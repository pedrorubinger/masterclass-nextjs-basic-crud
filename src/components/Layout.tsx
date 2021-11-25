import Title from "./Title"

interface ILayoutProps {
  children: React.ReactNode
  title: string
}

export default function Layout(props: ILayoutProps) {
  return (
    <div className={`
      flex flex-col w-2/3
      bg-white text-gray-800 rounded-md
      overflow-auto
    `}>
      <Title>{props.title}</Title>
      <div className="p-6">
        {props.children}
      </div>
    </div>
  )
}