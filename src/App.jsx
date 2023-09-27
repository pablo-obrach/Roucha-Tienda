import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import CartContent from './components/CartContent/CartContent'
import Hombre from './components/Sections/Hombre'
import Mujer from './components/sections/Mujer'
import ProductShowCase from './components/Products/ProductShowCase'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<CartContent />} />
        <Route path='/hombre' element={<Hombre />} />
        <Route path='/mujer' element={<Mujer />} />
        <Route path='/prodShowCase/:productId' element={<ProductShowCase />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

//TODO OBTENER EL ID DEL PRODUCTO Y PASARLO COMO PARAMETRO ✅
