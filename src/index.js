import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.css'
import { Provider } from 'react-redux'
import store from './store'

// 移动端适配
document.documentElement.style.fontSize = 100 / 750 + 'vw'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)


reportWebVitals()
