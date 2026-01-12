import { useAuth } from "../context/AuthContext"


export const usePermission = () => {
    const user = useAuth()

    const isAdmin = user.authority === 'ADMIN'
    const isUser = user.authority === 'USER'

    return {
        user,
        role: user.authority,
        isAdmin,
        isUser,
    }
}
