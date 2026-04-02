export function ChevronDown({ size = 12, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" className={className}>
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ChevronLeft({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ChevronRight({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ArrowRight({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function StepperMarker() {
  return (
    <div className="relative flex items-center justify-center w-8 h-4">
      <div className="absolute w-2 h-2 rounded-[4px] bg-black" />
      <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
        <path d="M3.33778 0.726074L8.72622 3.83719L3.33778 0.726074ZM2.22222 7.55541H8.44444H2.22222ZM2.89333 14.5039L8.28178 11.3927L2.89333 14.5039ZM28.6622 15.2736L23.2738 12.1625L28.6622 15.2736ZM29.7778 8.4443H23.5556H29.7778ZM29.1067 1.49585L23.7182 4.60696L29.1067 1.49585Z" fill="#151A21" />
        <path d="M3.33778 0.726074L8.72622 3.83719M2.22222 7.55541H8.44444M2.89333 14.5039L8.28178 11.3927M28.6622 15.2736L23.2738 12.1625M29.7778 8.4443H23.5556M29.1067 1.49585L23.7182 4.60696" stroke="#151A21" strokeWidth="0.888889" strokeLinecap="round" />
      </svg>
    </div>
  )
}
