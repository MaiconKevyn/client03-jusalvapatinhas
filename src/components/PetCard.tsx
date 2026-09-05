import { useState } from 'react'
import { ArrowUpRight, Heart, PawPrint } from 'lucide-react'
import type { Pet } from '../data/pets'
import { formatPostDate } from '../data/pets'

export function PetCard({
  pet,
  favorite,
  onFavorite,
  onSelect,
}: {
  pet: Pet
  favorite: boolean
  onFavorite: () => void
  onSelect: () => void
}) {
  const [imageFailed, setImageFailed] = useState(false)
  return (
    <article className="pet-card">
      <div className="pet-photo-wrap">
        <button
          className="pet-photo-button"
          onClick={onSelect}
          aria-label={`Conhecer ${pet.name}`}
        >
          {imageFailed ? (
            <div className="image-fallback">
              <PawPrint size={48} />
              <span>Foto de {pet.name}</span>
            </div>
          ) : (
            <img
              src={pet.image}
              alt={`${pet.species === 'dog' ? 'Cachorro' : 'Gato'} ${pet.name}, resgatado pelo projeto`}
              onError={() => setImageFailed(true)}
              loading="lazy"
              width="600"
              height="650"
            />
          )}
        </button>
        <span className="pet-species">
          {pet.species === 'dog' ? 'Cachorro' : 'Gato'}
        </span>
        <button
          className={`favorite-button ${favorite ? 'is-favorite' : ''}`}
          onClick={onFavorite}
          aria-label={`${favorite ? 'Remover' : 'Salvar'} ${pet.name} ${favorite ? 'dos' : 'nos'} favoritos`}
          aria-pressed={favorite}
        >
          <Heart size={19} fill={favorite ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="pet-card-body">
        <div className="pet-name-row">
          <h3>{pet.name}</h3>
          <span>{pet.sex ?? 'Sexo não informado'}</span>
        </div>
        <p className="pet-meta">
          {pet.age ?? 'Idade não informada'}
          {pet.size && (
            <>
              <span>·</span>Porte {pet.size.toLowerCase()}
            </>
          )}
        </p>
        <p className="pet-record-date">
          {pet.ageDate
            ? `Idade no post de ${formatPostDate(pet.ageDate)}`
            : `Publicação de ${formatPostDate(pet.sources[0].date)}`}
        </p>
        <p className="pet-personality">{pet.personality}</p>
        <button className="pet-detail-button" onClick={onSelect}>
          {pet.status === 'adopted' ? 'Conhecer a história' : 'Quero conhecer'}
          <ArrowUpRight size={18} />
        </button>
      </div>
    </article>
  )
}
