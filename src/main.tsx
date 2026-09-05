import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/dm-sans/latin-400.css'
import '@fontsource/dm-sans/latin-600.css'
import '@fontsource/fraunces/latin-400.css'
import '@fontsource/fraunces/latin-600.css'
import './styles/tokens.css'
import './styles/global.css'
import './styles/identity.css'
import './styles/rescue-catalog.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
