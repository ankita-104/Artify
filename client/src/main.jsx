import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

//it is the entry point of React application and it is responsible for rendering the root component i.e App.js and attaching it to the HTML document. It sets up the React DOM and provides the initial rendering of your app.
