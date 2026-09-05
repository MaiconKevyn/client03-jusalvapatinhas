import { Instagram } from './InstagramIcon'
import { ArrowUpRight, Heart, MapPin, PawPrint } from 'lucide-react'
import { Brand } from './Brand'
import { project } from '../data/project'

export function Footer({ onSupport }: { onSupport: () => void }) {
  return (
    <>
      <section className="closing-cta" aria-labelledby="closing-title">
        <div className="container closing-cta-inner">
          <PawPrint
            className="closing-paw"
            size={62}
            strokeWidth={1.2}
            aria-hidden="true"
          />
          <div>
            <h2 id="closing-title">Um lar muda tudo.</h2>
            <p>E o próximo recomeço pode começar com você.</p>
          </div>
          <a
            className="button button-cream"
            href={project.adoptionForm}
            target="_blank"
            rel="noopener noreferrer"
          >
            Preencher questionário de adoção
            <ArrowUpRight size={19} />
          </a>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <Brand />
              <p>
                Projeto independente.
                <br />
                Resgate, reabilitação e adoção.
              </p>
            </div>
            <div className="footer-column">
              <h3>Conheça o projeto</h3>
              <a href="#quem-somos">Nossa história</a>
              <a
                href={project.adoptionForm}
                target="_blank"
                rel="noopener noreferrer"
              >
                Questionário de adoção
              </a>
              <a href="#duvidas">Dúvidas frequentes</a>
            </div>
            <div className="footer-column">
              <h3>Faça parte</h3>
              <a href="#como-ajudar">Como ajudar</a>
              <button onClick={onSupport}>Faça uma doação</button>
              <span className="footer-pix">Pix: {project.pixKey}</span>
              <a href="#como-ajudar">Voluntariado</a>
            </div>
            <div className="footer-note">
              <Instagram size={21} />
              <h3>Vamos ficar por perto.</h3>
              <a
                className="footer-social"
                href={project.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.instagramHandle}
                <ArrowUpRight size={15} />
              </a>
              <p className="footer-location">
                <MapPin size={14} />
                {project.location}
              </p>
              <p>
                Resgatados da{' '}
                <a
                  className="inline-link"
                  href={project.founderInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.founderHandle}
                </a>
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Ju Salva Patinhas</span>
            <span>Feito com cuidado por Umbra Studios</span>
            <span>
              Por um mundo com mais recomeços.
              <Heart size={13} />
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}
