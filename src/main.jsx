import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalStyle } from './GlobalStyle.jsx'
import { ThemeProvider } from 'styled-components'
import { Theme } from './Theme'
import { HashRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme} >
      <HashRouter>
        <GlobalStyle />
        <App />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
