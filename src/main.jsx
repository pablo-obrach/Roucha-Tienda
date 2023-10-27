import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import {initializeApp} from 'firebase/app'
import 'react-toastify/dist/ReactToastify.css'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: 'roucha-tienda.firebaseapp.com',
  projectId: 'roucha-tienda',
  storageBucket: 'roucha-tienda.appspot.com',
  messagingSenderId: '307681554498',
  appId: '1:307681554498:web:230cfd864dc39e3fd4bddb'
}

initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
