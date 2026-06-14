import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Set this exactly to your team directory name */}
    <BrowserRouter basename="/team-6-s26">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)