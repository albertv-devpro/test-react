import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' // Global styles
import './styles.css'
import App from './App' // Main App component
import reportWebVitals from './reportWebVitals' // Performance measuring

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Optionally measure performance, e.g. send to analytics or log to console
reportWebVitals()
