
import React from 'react';
import './UserTable.css';
const UserTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
            
                    <th className="fs-3">Id</th>
                    <th className="fs-3" >Name</th>
                    <th className="fs-3">Username</th>
                    <th className="fs-3">Email</th>
                    <th className="fs-3">Actions</th>
                </tr>
            </thead>
            <tbody>
                { props.users.length > 0 ? (
                    props.users.map(user => {
                        const {id, name, username,email} = user;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{username}</td>
                                <td>{email}</td>
                                <td>
                                    
                                     <button className="btn btn-outline-success"onClick={() => props.editUser(id, user)}>Edit</button>
                                     <button className="btn btn-outline-danger"onClick={() => props.deleteUser(id)}>Delete</button> 
                                    
                                   
                                  
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan={4}>No users found</td>
                    </tr>
                )   
                }
            </tbody>
        </table>
    )
}

export default UserTable;