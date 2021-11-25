import { useCallback, useEffect, useState } from 'react'

import ClientCollection from '../backend/db/ClientCollection'
import Client from '../core/Client'
import IClientRepository from '../core/IClientRepository'

const clientRepo: IClientRepository = new ClientCollection()

export default function useClients() {
  const [visible, setVisible] = useState<'table' | 'form'>(
    'table'
  )
  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])

  const fetchAllClients = useCallback(async () => {
    clientRepo.getAll()
      .then((clients) => {
        console.log('clients:', clients)
        setClients(clients)
        setVisible('table')
      })
  }, [])

  const selectedClient = (client: Client) => {
    setClient(client)
    setVisible('form')
  }

  const deletedClient = async (client: Client) => {
    await clientRepo.destroy(client)
    await fetchAllClients()
  }

  const saveClient = async (client: Client) => {
    await clientRepo.save(client)
    await fetchAllClients()
  }

  const newClient = () => {
    setClient(Client.empty())
    setVisible('form')
  }

  useEffect(() => {
    fetchAllClients()
  }, [fetchAllClients])

  return {
    fetchAllClients,
    selectedClient,
    deletedClient,
    saveClient,
    newClient,
    setVisible,
    visible,
    client,
    clients,
  }
}
