import { PawPrint } from 'lucide-react'

export function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="Ju Salva Patinhas — início">
      <span className="brand-mark">
        <PawPrint size={30} strokeWidth={1.7} />
      </span>
      <span className="brand-name">
        Ju Salva
        <span>
          Patinhas<span className="brand-dot">.</span>
        </span>
      </span>
    </a>
  )
}
