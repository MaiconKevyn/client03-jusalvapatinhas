import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  HandHeart,
  Heart,
  House,
  MessagesSquare,
  MapPin,
  PawPrint,
} from 'lucide-react'
import { faqs } from '../data/pets'
import { project } from '../data/project'
import type { SupportKind } from './SupportDialog'

export function StorySection() {
  return (
    <section
      className="section story-section"
      id="quem-somos"
      aria-labelledby="story-title"
    >
      <div className="container story-grid">
        <div className="story-visual">
          <img
            src="/images/our-story.jpg"
            alt="Cachorro e gato descansando juntos em um gramado, imagem ilustrativa"
            loading="lazy"
            width="1100"
            height="733"
          />
          <div className="story-image-note">
            <Heart size={22} />
            Cada vida importa.
            <br />
            Cada recomeço também.
          </div>
          <PawPrint className="story-paw" size={54} aria-hidden="true" />
        </div>
        <div className="story-copy">
          <span className="section-kicker">
            <Heart size={17} />
            Por trás de cada patinha
          </span>
          <h2 id="story-title">
            O amor é o que
            <br />
            nos coloca em movimento.
          </h2>
          <p>
            Somos um projeto independente de resgate, reabilitação e adoção de
            cães e gatos em Porto Alegre, RS. Aqui, cada animal merece cuidado,
            respeito e uma nova chance.
          </p>
          <p>
            Os resgatados da{' '}
            <a
              className="inline-link"
              href={project.founderInstagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.founderHandle}
            </a>{' '}
            ganham um espaço para recomeçar. Com o apoio de quem doa,
            compartilha e adota, essa corrente de cuidado continua.
          </p>
          <div className="story-principles">
            <span>
              <Check size={17} />
              Projeto independente
            </span>
            <span>
              <MapPin size={17} />
              {project.location}
            </span>
          </div>
          <a href="#como-ajudar" className="text-link">
            Faça parte dessa história
            <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </section>
  )
}

const steps = [
  {
    number: '01',
    Icon: PawPrint,
    title: 'Conheça os resgatados',
    text: 'Acompanhe o Instagram e descubra quais patinhas estão esperando uma família.',
  },
  {
    number: '02',
    Icon: MessagesSquare,
    title: 'Preencha o questionário',
    text: 'Conte um pouco sobre você, sua casa e sua rotina no nosso formulário de adoção.',
  },
  {
    number: '03',
    Icon: House,
    title: 'Um novo começo',
    text: 'Converse com o projeto e combine os próximos passos para uma adoção responsável.',
  },
]

export function AdoptionSteps() {
  return (
    <section className="section steps-section" aria-labelledby="steps-title">
      <div className="container">
        <div className="centered-heading">
          <span className="section-kicker">
            Do primeiro olhar ao primeiro abraço
          </span>
          <h2 id="steps-title">Adotar é mais simples com companhia.</h2>
          <p>A gente caminha com você em cada etapa.</p>
        </div>
        <div className="steps-grid">
          {steps.map(({ number, Icon, title, text }) => (
            <article className="step" key={number}>
              <div className="step-top">
                <span className="step-icon">
                  <Icon size={26} strokeWidth={1.5} />
                </span>
                <span className="step-number">{number}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="steps-action">
          <a
            className="button button-primary"
            href={project.adoptionForm}
            target="_blank"
            rel="noopener noreferrer"
          >
            Preencher questionário de adoção
            <ArrowUpRight size={18} />
          </a>
          <span>Google Forms · pode solicitar login</span>
        </div>
      </div>
    </section>
  )
}

const ways = [
  {
    kind: 'donate',
    Icon: Heart,
    title: 'Doe um pouco de carinho',
    text: 'Sua contribuição ajuda a transformar resgates em cuidado, alimento e novas chances.',
    action: 'Quero contribuir',
  },
  {
    kind: 'foster',
    Icon: House,
    title: 'Seja um lar temporário',
    text: 'Um cantinho da sua casa pode ser o começo de uma história completamente nova.',
    action: 'Quero acolher',
  },
  {
    kind: 'volunteer',
    Icon: HandHeart,
    title: 'Doe seu tempo e talento',
    text: 'Na divulgação, nos encontros ou nos bastidores: sempre existe uma forma de somar.',
    action: 'Quero ser voluntário',
  },
] as const

export function HelpSection({
  onSupport,
}: {
  onSupport: (kind: SupportKind) => void
}) {
  return (
    <section
      className="section help-section"
      id="como-ajudar"
      aria-labelledby="help-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-kicker">
              <HandHeart size={18} />
              Juntos, a gente vai mais longe
            </span>
            <h2 id="help-title">
              Seu apoio vira cuidado.
              <br />E cuidado muda vidas.
            </h2>
          </div>
          <p>
            Existem muitas formas de fazer a diferença. <br />
            Uma delas tem tudo a ver com você.
          </p>
        </div>
        <div className="help-grid">
          {ways.map(({ kind, Icon, title, text, action }) => (
            <article className="help-card" key={kind}>
              <span className="help-icon">
                <Icon size={27} strokeWidth={1.5} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
              <button className="text-link" onClick={() => onSupport(kind)}>
                {action}
                <ArrowUpRight size={18} />
              </button>
            </article>
          ))}
        </div>
        <button className="supplies-link" onClick={() => onSupport('supplies')}>
          Ração, mantinhas e outros itens também são bem-vindos.
          <span>
            Veja como doar
            <ArrowRight size={16} />
          </span>
        </button>
      </div>
    </section>
  )
}

export function FaqSection() {
  return (
    <section
      className="section faq-section"
      id="duvidas"
      aria-labelledby="faq-title"
    >
      <div className="container faq-grid">
        <div>
          <span className="section-kicker">Pode perguntar</span>
          <h2 id="faq-title">
            Carinho também
            <br />é tirar as dúvidas.
          </h2>
          <p>
            Algumas respostas para você
            <br />
            dar o próximo passo com confiança.
          </p>
          <PawPrint
            className="faq-paw"
            size={62}
            strokeWidth={1.1}
            aria-hidden="true"
          />
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question} name="adoption-faq">
              <summary>
                {faq.question}
                <ChevronDown size={20} />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
