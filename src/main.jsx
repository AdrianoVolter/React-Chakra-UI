import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './styles/theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode theme={theme}>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
