import React, {useState} from 'react';

const AddUserForm = (props) => {

    const initUser = {id: null, name: '', username: '' , email:''};

    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username && user.email) {
            handleChange(e, props.addUser(user));
        }
    }

    return (
        <form>
            <label className="fs-3">Name</label>
    
            <input className="u-full-width"  type="text" value={user.name} name="name" onChange={handleChange} />
            <label className="fs-3">Username</label>
            <input className="u-full-width" type="text" value={user.username} name="username" onChange={handleChange} />
            <label className="fs-3">Email</label>
            <input className="u-full-width" type="text" value={user.email} name="email" onChange={handleChange} /><br></br><br></br>
            <button className="btn btn-secondary btn-lg" type="submit" onClick={handleSubmit} >Add user</button>
        </form>
    )
}

export default AddUserForm;