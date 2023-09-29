/* eslint-disable react-refresh/only-export-components */
import React, {useState, useContext, useEffect} from 'react'

const productsContext = React.createContext()

export function ProductsProvider({children}) {
  const [products, setProducts] = useState(null)
  const [cart, setCart] = useState([])
  console.log(cart)

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <productsContext.Provider value={{products, cart, setCart}}>
      {children}
    </productsContext.Provider>
  )
}

export function useProductsContext() {
  return useContext(productsContext)
}
