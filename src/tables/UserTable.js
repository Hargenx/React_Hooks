import React from 'react'

const UserTable = (props) => (
    <table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Usuario</th>
                <th>Ação</th>
            </tr>
        </thead>
        <tbody>
            {props.users.length > 0 ? (
                props.users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.nome}</td>
                        <td>{user.usuario}</td>
                <td>
                    <button onClick={() => {
                    props.editRow(user)}}
                    className="button muted-button">Editar</button>
                    <button onClick={() => 
                    props.deleteUser(user.id)}
                    className="button muted-button">Apagar</button>
                </td>
            </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>Sem usuarios</td>
                </tr>
            )}
        </tbody>
    </table>
)

export default UserTable

