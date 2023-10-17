import React from 'react'
import ReactDOM from 'react-dom/client'
import ToDoApp from './Components/ToDoApp'
import "./assets/css/styles.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToDoApp />
  </React.StrictMode>,
)
