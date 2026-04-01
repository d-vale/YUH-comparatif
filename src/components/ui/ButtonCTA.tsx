interface ButtonCTAProps {
  href?: string
  children: React.ReactNode
  className?: string
  size?: 'default' | 'small'
}

export default function ButtonCTA({ href = '#', children, className = '', size = 'default' }: ButtonCTAProps) {
  const sizeClasses = size === 'small' ? 'px-6 py-2' : 'px-12 py-3'
  return (
    <a
      href={href}
      className={`inline-block bg-orange text-white text-button-text font-bold ${sizeClasses} rounded-full hover:bg-orange-dark transition-colors ${className}`}
    >
      {children}
    </a>
  )
}
