import React, { useState } from 'react'

const AddUserForm = (props) => {
    const initialFormState = { id: null, nome: '', usuario: '' }
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { nome, value } = event.target

        setUser({ ...user, [nome]: value })
    }

    return (
        <form onSubmit={event => {
            event.preventDefault()
            if (!user.nome || !user.usuario) return

            props.addUser(user)
            setUser(initialFormState)
        }}>
            <label>Nome</label>
            <input type="text" name="name" value={user.nome} onChange={handleInputChange} />
            <label>Usuario</label>
            <input type="text" name="username" value={user.usuario} onChange={handleInputChange} />
            <button>Novo usuario</button>
        </form>
    )
}

export default AddUserForm