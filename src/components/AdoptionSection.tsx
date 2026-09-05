import { useState } from 'react'
import {
  ArrowDown,
  Cat,
  Dog,
  Heart,
  PawPrint,
  Search,
  SlidersHorizontal,
} from 'lucide-react'
import { pets } from '../data/pets'
import { project } from '../data/project'
import type { Pet, PetStatus, Species } from '../data/pets'
import { PetCard } from './PetCard'

export function AdoptionSection({
  favorites,
  onFavorite,
  onSelect,
}: {
  favorites: string[]
  onFavorite: (id: string) => void
  onSelect: (pet: Pet) => void
}) {
  const [species, setSpecies] = useState<Species | 'all'>('all')
  const [size, setSize] = useState('all')
  const [query, setQuery] = useState('')
  const [onlyFavorites, setOnlyFavorites] = useState(false)
  const [status, setStatus] = useState<PetStatus>('seeking')
  const [visibleCount, setVisibleCount] = useState(8)
  const normalize = (value: string) =>
    value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase('pt-BR')
  const filtered = pets.filter(
    (pet) =>
      pet.status === status &&
      (species === 'all' || pet.species === species) &&
      (size === 'all' || pet.size === size) &&
      (!onlyFavorites || favorites.includes(pet.id)) &&
      normalize([pet.name, ...pet.aliases].join(' ')).includes(
        normalize(query.trim()),
      ),
  )
  const visiblePets = filtered.slice(0, visibleCount)

  function resetFilters() {
    setSpecies('all')
    setSize('all')
    setQuery('')
    setOnlyFavorites(false)
    setVisibleCount(8)
  }

  return (
    <section
      id="adote"
      className="section adoption-section"
      aria-labelledby="adoption-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="section-kicker">
              <PawPrint size={17} />
              Encontre uma conexão
            </div>
            <h2 id="adoption-title">
              Seu novo melhor amigo
              <br />
              está por aqui.
            </h2>
          </div>
          <p>
            Cada olhar tem uma história. <br />
            Que tal fazer parte do próximo capítulo?
          </p>
        </div>
        <div
          className="catalog-statuses"
          role="group"
          aria-label="Situação dos resgatados"
        >
          {(
            [
              { value: 'seeking', label: 'Buscam um lar' },
              { value: 'uncertain', label: 'Situação a confirmar' },
              { value: 'adopted', label: 'Já adotados' },
            ] as const
          ).map(({ value, label }) => (
            <button
              key={value}
              aria-pressed={status === value}
              onClick={() => {
                setStatus(value)
                resetFilters()
              }}
            >
              {label}{' '}
              <span>{pets.filter((pet) => pet.status === value).length}</span>
            </button>
          ))}
        </div>
        <p className="catalog-context">
          {status === 'seeking'
            ? 'Fotos e histórias reais do projeto. Os posts indicavam busca por uma família; confirme a disponibilidade atual com a Ju.'
            : status === 'uncertain'
              ? 'Encontramos informações diferentes sobre a adoção nestas publicações. Converse com a Ju para saber a situação atual.'
              : 'Histórias com adoção anunciada pelo projeto. Estes animais não estão na lista de quem busca um lar.'}
        </p>
        <div className="adoption-toolbar">
          <div
            className="segmented-control"
            role="group"
            aria-label="Tipo de animal"
          >
            {(
              [
                { value: 'all', label: 'Todos', Icon: PawPrint },
                { value: 'dog', label: 'Cachorros', Icon: Dog },
                { value: 'cat', label: 'Gatos', Icon: Cat },
              ] as const
            ).map(({ value, label, Icon }) => (
              <button
                key={value}
                aria-pressed={species === value}
                className={species === value ? 'selected' : ''}
                onClick={() => {
                  setSpecies(value)
                  setVisibleCount(8)
                }}
              >
                <Icon size={17} />
                {label}
              </button>
            ))}
          </div>
          <div className="filter-controls">
            <label className="search-field">
              <Search size={17} />
              <input
                aria-label="Buscar animal pelo nome"
                placeholder="Buscar um amigo"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value)
                  setVisibleCount(8)
                }}
              />
            </label>
            <label className="size-filter">
              <SlidersHorizontal size={16} />
              <select
                aria-label="Filtrar por porte"
                value={size}
                onChange={(event) => {
                  setSize(event.target.value)
                  setVisibleCount(8)
                }}
              >
                <option value="all">Todos os portes</option>
                <option>Pequeno</option>
                <option>Médio</option>
                <option>Grande</option>
              </select>
            </label>
            <button
              className={`saved-filter ${onlyFavorites ? 'active' : ''}`}
              onClick={() => {
                setOnlyFavorites(!onlyFavorites)
                setVisibleCount(8)
              }}
              aria-pressed={onlyFavorites}
              aria-label={`Mostrar favoritos (${favorites.length})`}
            >
              <Heart size={18} fill={onlyFavorites ? 'currentColor' : 'none'} />
              <span>{favorites.length}</span>
            </button>
          </div>
        </div>
        <p className="catalog-count" role="status">
          {visiblePets.length} de {filtered.length}{' '}
          {filtered.length === 1 ? 'animal' : 'animais'}
        </p>
        {visiblePets.length ? (
          <div className="pet-grid">
            {visiblePets.map((pet) => (
              <PetCard
                key={pet.id}
                pet={pet}
                favorite={favorites.includes(pet.id)}
                onFavorite={() => onFavorite(pet.id)}
                onSelect={() => onSelect(pet)}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <PawPrint size={36} />
            <h3>
              {onlyFavorites
                ? 'Seu coração ainda tem espaço.'
                : 'Nenhuma patinha por aqui.'}
            </h3>
            <p>
              {onlyFavorites
                ? 'Toque no coração de um perfil para guardar seus novos amigos.'
                : 'Tente outro nome ou ajuste os filtros para conhecer mais amigos.'}
            </p>
            <button className="button button-outline" onClick={resetFilters}>
              Ver todos os animais
            </button>
          </div>
        )}
        <div className="adoption-bottom">
          <p>
            Idades e cuidados se referem às datas dos posts.{' '}
            <a
              className="inline-link"
              href={project.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale com o projeto no Instagram.
            </a>
          </p>
          {visiblePets.length < filtered.length && (
            <button
              className="text-link"
              onClick={() => setVisibleCount((count) => count + 8)}
            >
              Conhecer mais {Math.min(8, filtered.length - visiblePets.length)}{' '}
              amigos
              <ArrowDown size={17} />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
