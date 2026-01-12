import { ConfigProvider, Grid } from 'antd'
import { useLayoutEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.scss'
import { useSystemStore } from './utils/store/systemStore'
import { themes } from '@/utils/styles/ant_theme'
import DomRouter from './routes/DomRouter'
function App() {
  const screens = Grid.useBreakpoint()
  const { setWithApp } = useSystemStore()

  useLayoutEffect(() => {
    if (screens) {
      const newArray = Object.entries(screens).filter((screen) => !!screen[1])
      if (newArray.length !== 0) {
        setWithApp(newArray[newArray.length - 1][0])
      }
    }
  }, [setWithApp, screens])

  return (
    <div className="App" style={{ height: '100vh', width: '100%', overflow: 'hidden' }}>
      <ConfigProvider theme={{ ...themes }}>
        <BrowserRouter>
          <DomRouter />
        </BrowserRouter>
      </ConfigProvider>
    </div>
  )
}

export default App
