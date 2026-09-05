import { ArrowDown, ArrowUpRight, Heart, MapPin, PawPrint } from 'lucide-react'
import { project } from '../data/project'
import { BrandRibbon } from './BrandRibbon'

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-location">
            <MapPin size={15} />
            {project.location}
            <span>·</span>Projeto independente
          </div>
          <h1 id="hero-title">
            Todo amor
            <br />
            merece <span>um lar.</span>
          </h1>
          <p>
            Resgate, reabilitação e adoção de cães e gatos.
            <br className="desktop-break" /> Uma nova chance, uma patinha de
            cada vez.
          </p>
          <div className="hero-actions">
            <a href="#adote" className="button button-primary">
              Encontre seu novo amigo
              <PawPrint size={18} />
            </a>
            <a
              href={project.adoptionForm}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Quero adotar
              <ArrowUpRight size={19} />
            </a>
          </div>
          <div className="hero-footnote">
            <span className="small-heart">
              <Heart size={19} />
            </span>
            <span>
              Resgatados da{' '}
              <a
                href={project.founderInstagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.founderHandle}
              </a>
              . Cuidado que transforma.
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <BrandRibbon />
          <div className="hero-image-frame">
            <img
              className="hero-image"
              src="/images/hero-pets.png"
              alt="Cão caramelo com um lenço verde sentado ao lado de um gatinho"
              fetchPriority="high"
              width="1536"
              height="1024"
            />
            <span className="hero-photo-caption">amor de quatro patas.</span>
          </div>
          <Heart
            className="hero-doodle hero-doodle-heart"
            size={47}
            strokeWidth={1.4}
            aria-hidden="true"
          />
          <svg
            className="hero-doodle hero-rays"
            viewBox="0 0 55 55"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M27 6v17M8 16l12 12M46 18 35 28"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <div className="hero-note">
            <Heart size={20} strokeWidth={1.5} />
            <span>
              O seu melhor amigo
              <br />
              pode estar aqui.
            </span>
          </div>
        </div>
      </div>
      <a className="hero-scroll" href="#adote" aria-label="Conhecer os animais">
        <ArrowDown size={17} />
      </a>
      <svg
        className="hero-wave"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 15C220 48 420 0 670 15S1120 43 1440 12V40H0Z"
          fill="currentColor"
        />
      </svg>
    </section>
  )
}

export function MissionStrip() {
  return (
    <div className="mission-strip">
      <div className="container mission-strip-inner">
        <span>Resgate</span>
        <PawPrint aria-hidden="true" />
        <span>Reabilitação</span>
        <PawPrint aria-hidden="true" />
        <span>Adoção responsável</span>
        <PawPrint aria-hidden="true" />
        <span>Uma nova chance</span>
      </div>
    </div>
  )
}
