export function BrandRibbon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`brand-ribbon ${className}`}
      viewBox="0 0 640 530"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M700 25C480-30 530 128 376 140S169 120 154 286S499 289 704 404"
        stroke="var(--color-ink)"
        strokeWidth="74"
      />
      <path
        d="M700 25C480-30 530 128 376 140S169 120 154 286S499 289 704 404"
        stroke="var(--color-magenta)"
        strokeWidth="70"
      />
      <path
        d="M720 129C502 71 558 231 404 243S197 223 182 389S527 392 732 507"
        stroke="var(--color-ink)"
        strokeWidth="74"
      />
      <path
        d="M720 129C502 71 558 231 404 243S197 223 182 389S527 392 732 507"
        stroke="var(--color-turquoise)"
        strokeWidth="70"
      />
    </svg>
  )
}
