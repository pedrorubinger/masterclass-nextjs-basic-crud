import '../backend/config'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Button from '../components/Button'
import Form from '../components/Form'
import useClients from '../hooks/useClients'

export default function Home() {
  const {
    selectedClient,
    deletedClient,
    newClient,
    saveClient,
    client,
    clients,
    visible,
    setVisible,
  } = useClients()
  // const clients = [
  //   new Client('Ana', 34, '1'),
  //   new Client('Bia', 28, '2'),
  //   new Client('João', 33, '3'),
  //   new Client('Pedro', 22, '4'),
  // ]

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {visible === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button
                className="mb-4"
                color="green"
                onClick={newClient}
              >
                Novo Cliente
              </Button>
            </div>
            <Table
              clients={clients}
              selectedClient={selectedClient}
              deletedClient={deletedClient}
            />
          </>
        ) : (
          <Form
            client={client}
            onCancel={() => setVisible('table')}
            onChangeClient={saveClient}
          />
        )}
      </Layout>
    </div>
  )
}
