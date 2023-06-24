import React, {useState, useEffect} from 'react';

const EditUserForm = (props) => {

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const [user, setUser] = useState(props.currentUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
        }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username && user.email) props.updateUser(user);
    }

    return (
        <form>
            <label className="fs-3">Name</label>
            <input className="u-full-width" type="text" value={user.name} name="name" onChange={handleChange} />
            <label className="fs-3">Username</label>
            <input className="u-full-width" type="text" value={user.username} name="username" onChange={handleChange} />
            <label className="fs-3">Email</label>
            <input className="u-full-width" type="text" value={user.email} name="email" onChange={handleChange} /><br></br><br></br>
            <button className="btn btn-secondary btn-lg"type="submit" onClick={handleSubmit} >Edit user</button><br></br><br></br>
            <button className="btn btn-secondary btn-lg" type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        </form>
    )
}

export default EditUserForm;