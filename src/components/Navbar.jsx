import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

const Navbar = () => {

    const {user, setUser} = useContext(UserContext)

    return (
        <div>
            {
                user ?
                    <>
                        <NavLink to="/">Inicio</NavLink>
                        <button onClick={() => {setUser(false)}}>LogOut</button>
                    </>
                :
                    <NavLink to="/login" onClick={() => {setUser(true)}}>Login</NavLink>
            }
        </div>
    )
}

export default Navbar