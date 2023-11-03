import React from 'react'
import ReactDOM from 'react-dom/client'
import ToDoApp from './Components/ToDoApp'
import "./assets/css/styles.css"
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToDoApp />
    </Provider>

  </React.StrictMode>,
)
