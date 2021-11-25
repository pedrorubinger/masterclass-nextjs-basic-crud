import { useState } from 'react'

import Client from '../core/Client'
import Button from './Button'
import Input from './Input'

interface IFormProps {
  children?: React.ReactNode
  client: Client
  onCancel?: () => void
  onChangeClient?: (client: Client) => void
}

export default function Form({
  client,
  onCancel,
  onChangeClient,
}: IFormProps) {
  const id = client?.id
  const [name, setName] = useState<string>(
    client?.name || ''
  )
  const [age, setAge] = useState<number>(
    client?.age || 0
  )

  return (
    <div>
      {id && (
        <Input
          label="ID"
          className="mb-5"
          readOnly
          value={id}
        />
      )}
      <Input
        label="Nome"
        className="mb-5"
        onChange={setName}
        value={name}
      />
      <Input
        label="Idade"
        type="number"
        className="mb-5"
        value={age}
        onChange={setAge}
      />

      <div className="flex justify-end mt-7">
        <Button
          color="blue"
          className="mr-2"
          onClick={() => onChangeClient?.(new Client(name, +age, id))}
        >
          {id ? 'Alterar' : 'Salvar'}
        </Button>

        <Button
          color="gray"
          onClick={onCancel}
        >
          Cancelar
        </Button>
      </div>
    </div>
  )
}