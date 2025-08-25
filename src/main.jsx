import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import proverbgiver  from './redux/store.jsx'


createRoot(document.getElementById('root')).render(
  <Provider store={proverbgiver} >
    <App />
  </Provider >,
)
