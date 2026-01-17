import { createContext, useContext } from 'react'
import { UserInfo } from '../models/user'

export const AuthContext = createContext<UserInfo | null>(null)

export const useAuth = () => {
    const ctx = useContext(AuthContext)
    if (!ctx) throw new Error('useAuth must be used within AuthProvider')
    return ctx
}
