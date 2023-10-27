import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import CartContent from './components/CartContent/CartContent'
import Hombre from './components/Sections/Hombre'
import Mujer from './components/sections/Mujer'
import ProductShowCase from './components/Products/ProductShowCase'
import {ProductsProvider} from './components/ProductsProvider/ProductsProvider'
import Lino from './components/Sections/Lino'
import Algodon from './components/Sections/Algodon'
import Accesorios from './components/Sections/Accesorios'
import CheckOut from './components/CheckOut/CheckOut'

const App = () => {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CartContent />} />
          <Route path='/hombre' element={<Hombre />} />
          <Route path='/mujer' element={<Mujer />} />
          <Route
            path='/prodShowCase/:productId'
            element={<ProductShowCase />}
          />
          <Route path='/lino' element={<Lino />} />
          <Route path='/algodon' element={<Algodon />} />
          <Route path='/accesorios' element={<Accesorios />} />
          <Route path='/checkOut' element={<CheckOut />} />
        </Routes>
      </ProductsProvider>
    </BrowserRouter>
  )
}

export default App
