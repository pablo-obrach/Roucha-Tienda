/* eslint-disable react-refresh/only-export-components */
import React, {useState, useContext, useEffect} from 'react'

const productsContext = React.createContext()

export function ProductsProvider({children}) {
  const [products, setProducts] = useState(null)
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  )

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const handleBuy = product => {
    const productRepeat = cart.find(prod => prod.id === product.id)

    if (productRepeat) {
      setCart(
        cart.map(prod =>
          prod.id === product.id
            ? {...product, quantity: productRepeat.quantity + 1}
            : prod
        )
      )
    } else {
      setCart([...cart, product])
    }
  }

  const decreaseProduct = product => {
    const productRepeat = cart.find(prod => prod.id === product.id)

    productRepeat.quantity !== 1 &&
      setCart(
        cart.map(prod =>
          prod.id === product.id
            ? {...product, quantity: productRepeat.quantity - 1}
            : prod
        )
      )
  }

  const removeProduct = product => {
    setCart(cart.filter(prod => prod.id !== product.id))
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <productsContext.Provider
      value={{
        products,
        cart,
        setCart,
        handleBuy,
        decreaseProduct,
        removeProduct
      }}
    >
      {children}
    </productsContext.Provider>
  )
}

export function useProductsContext() {
  return useContext(productsContext)
}
