import { useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Heart,
  House,
  PawPrint,
} from 'lucide-react'
import { formatPostDate } from '../data/pets'
import type { Pet } from '../data/pets'
import { Modal } from './Modal'
import { project } from '../data/project'

const commitments = [
  'Posso oferecer um lar seguro e uma adaptação paciente.',
  'Tenho disponibilidade para os cuidados diários e veterinários.',
  'Todas as pessoas da casa concordam com a adoção.',
]

export function PetDialog({
  pet,
  favorite,
  onFavorite,
  onClose,
}: {
  pet: Pet
  favorite: boolean
  onFavorite: () => void
  onClose: () => void
}) {
  const [preparing, setPreparing] = useState(false)
  const [checked, setChecked] = useState<number[]>([])
  const [photoIndex, setPhotoIndex] = useState(0)
  const photo = pet.photos[photoIndex]
  const seeking = pet.status === 'seeking'

  return (
    <Modal
      title={`Conheça ${pet.name}`}
      onClose={onClose}
      className="pet-modal"
    >
      <div className="pet-modal-gallery">
        <img
          className="pet-modal-image"
          src={photo.src}
          alt={`Foto de ${pet.name} publicada pelo projeto`}
          width="766"
          height="894"
        />
        {pet.photos.length > 1 && (
          <div
            className="pet-photo-choices"
            role="group"
            aria-label={`Fotos de ${pet.name}`}
          >
            {pet.photos.map((item, index) => (
              <button
                key={item.src}
                aria-label={`Ver foto ${index + 1} de ${pet.name}`}
                aria-pressed={photoIndex === index}
                onClick={() => setPhotoIndex(index)}
              >
                <img src={item.src} alt="" width="60" height="70" />
              </button>
            ))}
          </div>
        )}
        <a
          className="inline-link photo-source-link"
          href={photo.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver publicação desta foto <ArrowUpRight size={14} />
        </a>
      </div>
      <div className="pet-modal-content">
        <span className="section-kicker">
          <PawPrint size={15} />
          {seeking
            ? 'Em busca de uma família'
            : pet.status === 'adopted'
              ? 'Adoção anunciada pelo projeto'
              : 'Situação a confirmar'}
        </span>
        <div className="pet-modal-title">
          <h2>Conheça {pet.name}.</h2>
          <button
            className={`favorite-button inline-favorite ${favorite ? 'is-favorite' : ''}`}
            onClick={onFavorite}
            aria-label={`${favorite ? 'Remover' : 'Salvar'} ${pet.name} ${favorite ? 'dos' : 'nos'} favoritos`}
            aria-pressed={favorite}
          >
            <Heart size={20} fill={favorite ? 'currentColor' : 'none'} />
          </button>
        </div>
        <dl className="pet-facts">
          <div>
            <dt>Sexo</dt>
            <dd>{pet.sex ?? 'Não informado'}</dd>
          </div>
          <div>
            <dt>Porte</dt>
            <dd>{pet.size ?? 'Não informado'}</dd>
          </div>
          <div className="pet-age-fact">
            <dt>Idade na publicação</dt>
            <dd>
              {pet.age ?? 'Não informada'}
              {pet.ageDate && (
                <span>
                  Informada em {formatPostDate(pet.ageDate)}; pode ser uma
                  estimativa.
                </span>
              )}
            </dd>
          </div>
          {pet.birthDate && (
            <div className="pet-age-fact">
              <dt>Nascimento informado</dt>
              <dd>{formatPostDate(pet.birthDate)}</dd>
            </div>
          )}
        </dl>
        {pet.statusNote && <p className="pet-status-note">{pet.statusNote}</p>}
        {pet.storyIsCaption && (
          <h3 className="pet-detail-heading">
            Relato do projeto em {formatPostDate(pet.sources[0].date)}
          </h3>
        )}
        <p className="pet-story">{pet.story}</p>
        {pet.traits.length > 0 && (
          <div className="trait-list">
            {pet.traits.map((trait) => (
              <span key={trait}>{trait}</span>
            ))}
          </div>
        )}
        {pet.care && (
          <div className="pet-care">
            <h3>Cuidados informados no post</h3>
            <p>{pet.care}</p>
          </div>
        )}
        {pet.requirements && (
          <div className="pet-care">
            <h3>Para receber {pet.name}</h3>
            <p>{pet.requirements}</p>
          </div>
        )}
        <details className="pet-sources">
          <summary>Publicações consultadas ({pet.sources.length})</summary>
          <ul>
            {pet.sources.map((source) => (
              <li key={source.url}>
                <a
                  className="inline-link"
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {formatPostDate(source.date)} · {source.kind}{' '}
                  <ArrowUpRight size={13} />
                </a>
              </li>
            ))}
          </ul>
        </details>
        {seeking ? (
          <>
            <p className="profile-note">
              Confirme com a Ju a disponibilidade e os cuidados atuais antes de
              seguir com a adoção.
            </p>
            <a
              className="button button-primary full-width"
              href={project.adoptionForm}
              target="_blank"
              rel="noopener noreferrer"
            >
              Preencher questionário de adoção <ArrowUpRight size={18} />
            </a>
            <a
              className="text-link pet-contact-link"
              href={project.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Conversar com a Ju no Instagram <ArrowUpRight size={16} />
            </a>
            {preparing ? (
              <div className="adoption-checklist">
                <h3>
                  <House size={20} />
                  Seu lar está pronto?
                </h3>
                <p>
                  Uma nova amizade também é um compromisso. Pense com carinho:
                </p>
                {commitments.map((commitment, index) => (
                  <label key={commitment}>
                    <input
                      type="checkbox"
                      checked={checked.includes(index)}
                      onChange={() =>
                        setChecked((current) =>
                          current.includes(index)
                            ? current.filter((value) => value !== index)
                            : [...current, index],
                        )
                      }
                    />
                    <span>{commitment}</span>
                  </label>
                ))}
                {checked.length === commitments.length && (
                  <div className="readiness-message" role="status">
                    <Check size={20} />
                    <span>
                      Você já pensou nos primeiros cuidados! Preencha o
                      questionário e converse com o projeto sobre os animais
                      disponíveis.
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <button
                className="button button-outline full-width preparation-button"
                onClick={() => setPreparing(true)}
              >
                Como me preparar para adotar <ArrowRight size={18} />
              </button>
            )}
          </>
        ) : pet.status === 'uncertain' ? (
          <a
            className="button button-primary full-width"
            href={project.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Confirmar situação com a Ju <ArrowUpRight size={18} />
          </a>
        ) : (
          <p className="pet-status-note">
            A legenda desta publicação informa que {pet.name} foi adotado.
            Conheça os animais da aba “Buscam um lar” para iniciar uma nova
            adoção.
          </p>
        )}
      </div>
    </Modal>
  )
}
