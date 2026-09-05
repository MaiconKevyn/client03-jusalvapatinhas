import { useRef, useState } from 'react'
import { Check, Copy, Heart } from 'lucide-react'
import { project } from '../data/project'

export function PixDonation() {
  const [status, setStatus] = useState<'idle' | 'copied' | 'manual'>('idle')
  const keyRef = useRef<HTMLInputElement>(null)

  async function copyPixKey() {
    try {
      await navigator.clipboard.writeText(project.pixKey)
      setStatus('copied')
    } catch {
      keyRef.current?.focus()
      keyRef.current?.select()
      setStatus('manual')
    }
  }

  return (
    <div className="pix-donation">
      <div className="pix-heading">
        <Heart size={20} />
        <h3>Doe via Pix</h3>
      </div>
      <p>Qualquer valor ajuda a cuidar de uma vida.</p>
      <label htmlFor="pix-key">Chave Pix · e-mail</label>
      <div className="pix-key-row">
        <input
          id="pix-key"
          ref={keyRef}
          value={project.pixKey}
          readOnly
          spellCheck={false}
          aria-describedby="pix-copy-status"
        />
        <button className="button button-primary" onClick={copyPixKey}>
          {status === 'copied' ? <Check size={17} /> : <Copy size={17} />}
          {status === 'copied' ? 'Copiada!' : 'Copiar chave'}
        </button>
      </div>
      <p className="pix-copy-status" id="pix-copy-status" role="status">
        {status === 'copied'
          ? 'Chave copiada. Abra o app do seu banco e escolha Pix para doar.'
          : status === 'manual'
            ? 'Selecione e copie a chave acima para usar no app do seu banco.'
            : 'Copie a chave e faça sua doação pelo app do seu banco.'}
      </p>
    </div>
  )
}
