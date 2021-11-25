import Client from '../core/Client'
import { IconEdit, IconTrash } from './Icons'

interface ITableProps {
  children?: React.ReactNode
  clients: Client[]
  selectedClient?: (client: Client) => void
  deletedClient?: (client: Client) => void
}

export default function Table({
  clients,
  selectedClient,
  deletedClient,
}: ITableProps) {
  const showActions = !!selectedClient || !!deletedClient

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        bg-gradient-to-r from-purple-500 to-purple-800
        text-gray-100
      `}>
        <tr>
          <th className="text-left p-4">Código</th>
          <th className="text-left p-4">Nome</th>
          <th className="text-left p-4">Idade</th>
          {!!showActions && <th className="text-center p-4">Ações</th>}
        </tr>
      </thead>

      <tbody>
        {clients?.map((client, i) => (
          <tr
            key={client.id || i}
            className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
          >
            <td className="text-left p-4">{client.id}</td>
            <td className="text-left p-4">{client.name}</td>
            <td className="text-left p-4">{client.age}</td>
            {!!showActions && (
              <td className="flex justify-center">
                {selectedClient && (
                  <button
                    className={`
                      flex justify-center items-center
                      text-yellow-600 rounded-full p-2
                      hover:bg-purple-50
                    `}
                    onClick={() => selectedClient?.(client)}
                  >
                    {IconEdit}
                  </button>
                )}

                {deletedClient && (
                  <button
                    className={`
                      flex justify-center items-center
                      text-red-600 rounded-full p-2
                      hover:bg-purple-50
                    `}
                    onClick={() => deletedClient?.(client)}
                  >
                    {IconTrash}
                  </button>
                )}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
