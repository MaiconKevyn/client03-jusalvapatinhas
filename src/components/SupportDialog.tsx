import { Instagram } from './InstagramIcon'
import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  HandHeart,
  Heart,
  House,
  Package,
} from 'lucide-react'
import { Modal } from './Modal'
import { PixDonation } from './PixDonation'
import { project } from '../data/project'

export type SupportKind = 'donate' | 'foster' | 'volunteer' | 'supplies'
const support = {
  donate: {
    title: 'Um pouco de você. Muito para eles.',
    description:
      'O apoio financeiro ajuda a manter o cuidado acontecendo, do resgate ao encontro com uma família.',
    items: [
      'Alimentação e cuidados do dia a dia',
      'Consultas e tratamentos veterinários',
      'Um acolhimento seguro durante a espera',
    ],
    next: 'Somos um projeto independente. Sua doação apoia o resgate, a reabilitação e a adoção de cães e gatos em Porto Alegre.',
  },
  foster: {
    title: 'Abra a porta para um recomeço.',
    description:
      'O lar temporário oferece segurança, rotina e carinho enquanto um animal espera pela adoção.',
    items: [
      'Um ambiente seguro e adequado ao animal',
      'Tempo para acompanhar a adaptação',
      'Disponibilidade alinhada com a equipe',
    ],
    next: 'Converse com o projeto pelo Instagram para alinhar o período de acolhimento e o apoio necessário.',
  },
  volunteer: {
    title: 'Seu tempo também salva vidas.',
    description:
      'Há muitas formas de somar à causa. Cada pessoa pode contribuir com o que sabe e com o tempo que tem.',
    items: [
      'Apoiar a divulgação dos animais',
      'Ajudar na organização de ações de adoção',
      'Compartilhar habilidades de fotografia e comunicação',
    ],
    next: 'Conte pelo Instagram como você gostaria de contribuir. As atividades e a disponibilidade são alinhadas com o projeto.',
  },
  supplies: {
    title: 'Cuidado que chega em cada doação.',
    description:
      'Itens básicos fazem parte de todos os dias de quem resgata e cuida.',
    items: [
      'Ração para cães e gatos em embalagem fechada',
      'Mantas, caminhas e caixas de transporte',
      'Produtos de higiene e limpeza adequados',
    ],
    next: 'Fale com o projeto pelo Instagram para confirmar as necessidades atuais e combinar a entrega em Porto Alegre.',
  },
}

export function SupportDialog({
  initialKind,
  onClose,
}: {
  initialKind: SupportKind
  onClose: () => void
}) {
  const [kind, setKind] = useState<SupportKind>(initialKind)
  const content = support[kind]
  const itemsList = (
    <ul>
      {content.items.map((item) => (
        <li key={item}>
          <Check size={17} />
          {item}
        </li>
      ))}
    </ul>
  )
  return (
    <Modal
      title="Como ajudar a Ju Salva Patinhas"
      onClose={onClose}
      className="support-modal"
    >
      <div className="support-modal-icon">
        <HandHeart size={32} />
      </div>
      <h2>Toda ajuda vira cuidado.</h2>
      <p>Encontre uma forma de fazer parte.</p>
      <div className="support-tabs" role="group" aria-label="Formas de ajudar">
        {(
          [
            { value: 'donate', label: 'Doar', Icon: Heart },
            { value: 'supplies', label: 'Doar itens', Icon: Package },
            { value: 'foster', label: 'Lar temporário', Icon: House },
            { value: 'volunteer', label: 'Voluntariado', Icon: HandHeart },
          ] as const
        ).map(({ value, label, Icon }) => (
          <button
            key={value}
            aria-pressed={kind === value}
            className={kind === value ? 'selected' : ''}
            onClick={() => setKind(value)}
          >
            <Icon size={17} />
            {label}
          </button>
        ))}
      </div>
      <div className="support-tab-content">
        {kind === 'donate' ? (
          <>
            <PixDonation />
            <details className="donation-impact">
              <summary>Como sua doação ajuda</summary>
              {itemsList}
            </details>
          </>
        ) : (
          <>
            <h3>{content.title}</h3>
            <p>{content.description}</p>
            {itemsList}
          </>
        )}
        <div className="contact-note">{content.next}</div>
        {kind !== 'donate' && (
          <a
            className="button button-primary full-width support-contact"
            href={project.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={18} />
            Conversar pelo Instagram
            <ArrowUpRight size={17} />
          </a>
        )}
      </div>
      <button className="button button-outline full-width" onClick={onClose}>
        Continuar conhecendo o projeto
      </button>
    </Modal>
  )
}
