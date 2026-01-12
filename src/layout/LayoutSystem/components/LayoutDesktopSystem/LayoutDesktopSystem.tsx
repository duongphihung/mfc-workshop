import { Layout } from 'antd'
import styles from './LayoutDesktopSystem.module.scss'
import { Content } from 'antd/es/layout/layout'
import { Outlet } from 'react-router-dom'
import NavigationBar from '@/components/NavigationBar/NavigationBar'

const LayoutDesktopSystem = () => {
    return (
        <Layout style={{ height: "100vh", background: "#EDF3ED" }}>
            <NavigationBar />
            <Content className={styles.content}>
                <Outlet />
            </Content>
        </Layout>
    )
}

export default LayoutDesktopSystem