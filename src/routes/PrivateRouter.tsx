import LayoutSystem from '@/layout/LayoutSystem/LayoutSystem'
import { Navigate } from 'react-router-dom'

const PrivateRouter = () => {
    const isLog = Boolean(localStorage.getItem('access_token'))
    return !isLog ? <Navigate to="/" /> : <LayoutSystem />
}

export default PrivateRouter
