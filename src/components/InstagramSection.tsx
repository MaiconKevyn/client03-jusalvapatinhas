import { Instagram } from './InstagramIcon'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { project } from '../data/project'

export function InstagramSection() {
  return (
    <section
      className="instagram-section section"
      id="instagram"
      aria-labelledby="instagram-title"
    >
      <div className="container instagram-grid">
        <div>
          <span className="section-kicker">
            <Instagram size={18} />
            {project.instagramHandle}
          </span>
          <h2 id="instagram-title">
            Cada resgate tem
            <br />
            um próximo capítulo.
          </h2>
          <p>
            Acompanhe os resgatados, conheça os animais disponíveis para adoção
            e veja como fazer parte dessa história.
          </p>
          <a
            className="button button-primary"
            href={project.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Acompanhar no Instagram
            <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="instagram-postcard">
          <Instagram size={38} strokeWidth={1.4} />
          <p>
            Resgate.
            <br />
            Reabilitação.
            <br />
            <span>Adoção.</span>
          </p>
          <div>
            <MapPin size={16} />
            {project.location}
          </div>
          <a
            className="text-link"
            href={project.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver {project.instagramHandle}
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  )
}
