
interface IButtonProps {
  children: React.ReactNode
  color?: 'green' | 'blue' | 'gray'
  className?: string
  onClick?: () => void
}

export default function Button({
  children,
  color = 'blue',
  className,
  onClick,
}: IButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        bg-gradient-to-r from-${color}-400 to-${color}-700
        text-white px-4 py-2 rounded-md
        ${className}
      `}
    >
      {children}
    </button>
  )
}