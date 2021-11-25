import {
  addDoc,
  collection,
  doc,
  deleteDoc,
  getDocs,
  query,
  setDoc,
} from 'firebase/firestore'

import db from '../config'
import Client from '../../core/Client'
import IClientRepository from '../../core/IClientRepository'

export default class ClientCollection implements IClientRepository {
  async save(client: Client): Promise<Client> {
    if (!client.id) {
      const docRef = await addDoc(
        collection(db, 'clients'),
        { name: client.name, age: client.age },
      )
  
      console.log('Document written with ID:', docRef.id)
      return new Client(client.name, client.age, docRef.id)
    } else {
      await setDoc(
        doc(db, 'clients', client.id),
        { name: client.name, age: client.age }
      )

      return client
    }
  }

  async getAll(): Promise<Client[]> {
    const q = query(collection(db, 'clients'))
    const clients = []
    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
      clients.push({ ...doc.data(), id: doc.id })
    })
    return clients
  }

  async destroy(client: Client): Promise<void> {
    await deleteDoc(doc(db, 'clients', client.id))
  }
}