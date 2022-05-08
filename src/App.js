import React, {useState} from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'

const App = () => {
  const usersData = [
    { id: 1, nome: 'Raphael', usuario: 'Professor' },
    { id: 2, nome: 'Arthur', usuario: 'Prim' },
    { id: 3, nome: 'Carol', usuario: 'K' },
  ]

  const initialFormState = { id: null, nome: '', usuario: '' }
  const [users, setUsers] = useState(usersData)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({ id: user.id, nome: user.nome, Usuario: user.usuario })
  }

  
  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="container">
      <h1>CRUD App com Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Atualizar Usuario</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
          <h2>Add usuario</h2>
          )}
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>Ver usuarios</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App