import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ProfileSelectionProvider from './context/ProfileSelectionContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProfileSelectionProvider>
      <App />
    </ProfileSelectionProvider>
  </React.StrictMode>,
)
