import RenderingCase from '@/routes/RenderingCase'
import LayoutDesktopSystem from './components/LayoutDesktopSystem/LayoutDesktopSystem'
import { useGetCurrentUser } from '@/utils/hooks/tanstack-query/auth-query'
import { AuthContext } from '@/utils/context/AuthContext'

export default function LayoutSystem() {
  const { data: users } = useGetCurrentUser()

  if (!users) return <></>
  return (
    <AuthContext.Provider value={users}>
      <RenderingCase
        desktopComponent={<LayoutDesktopSystem />}
        tabletComponent={<LayoutDesktopSystem />}
        mobileComponent={<LayoutDesktopSystem />}
      />
    </AuthContext.Provider>
  )
}
