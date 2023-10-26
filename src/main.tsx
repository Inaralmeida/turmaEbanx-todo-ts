import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App.tsx'
import { GlobalStyles } from './styles/GlobalStyles.ts'
import { theme } from './styles/theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme.default}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
