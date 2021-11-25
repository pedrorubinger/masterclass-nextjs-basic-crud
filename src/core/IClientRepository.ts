import Client from './Client'

export default interface IClientRepository {
  save(client: Client): Promise<Client>
  destroy(client: Client): Promise<void>
  getAll(): Promise<Client[]>
}
