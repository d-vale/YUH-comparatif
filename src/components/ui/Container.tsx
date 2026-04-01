interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-[1412px] mx-auto px-4 md:px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  )
}
