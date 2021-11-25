interface IInputProps {
  label: string
  value: any
  readOnly?: boolean
  type?: 'text' | 'number'
  className?: string
  onChange?: (value: any) => void
}

export default function Input({
  label,
  value,
  type = 'text',
  readOnly = false,
  className,
  onChange,
}: IInputProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="mb-2">{label}</label>
      <input
        className={`
          border border-purple-500 rounded-lg
          focus:outline-none bg-gray-50 px-4 py-2
          ${!readOnly && 'focus:bg-white'}
        `}
        onChange={(e) => onChange?.(e.target.value)}
        type={type}
        value={value}
        readOnly={readOnly}
      />
    </div>
  )
}