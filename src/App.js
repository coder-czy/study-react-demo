import { ConfigProvider } from 'antd'

import Meals from './components/meals'
import Search from './components/search'
import Cart from './components/cart'



function App () {


  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#ffcd00' } }}>
      <div style={{ width: '750rem', height: '100vh', overflow: 'hidden', position: 'relative' }}>
        <Search></Search>
        <Meals></Meals>
        <Cart></Cart>
      </div>
    </ConfigProvider>
  )
}

export default App
