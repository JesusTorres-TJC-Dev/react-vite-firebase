import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import { Navigate } from 'react-router-dom'

const RquireAuth = ({children}) => {
    const { user } = useContext(UserContext)

    if(!user){
        console.log('hola')
        return <Navigate to="/login"/>
    }

    return children
}

export default RquireAuth