/* eslint-disable react-refresh/only-export-components */
import React, {useState, useContext, useEffect} from 'react'

const productsContext = React.createContext()

export function ProductsProvider({children}) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  )

  const handleBuy = product => {
    const productRepeat = cart.find(prod => prod.id === product.id)

    if (productRepeat) {
      setCart(
        cart.map(prod =>
          prod.id === product.id
            ? {...product, cantidad: productRepeat.cantidad + 1}
            : prod
        )
      )
    } else {
      setCart([...cart, product])
    }
  }

  const decreaseProduct = product => {
    const productRepeat = cart.find(prod => prod.id === product.id)

    productRepeat.cantidad !== 1 &&
      setCart(
        cart.map(prod =>
          prod.id === product.id
            ? {...product, cantidad: productRepeat.cantidad - 1}
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

  const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0)

  return (
    <productsContext.Provider
      value={{
        cart,
        setCart,
        handleBuy,
        decreaseProduct,
        removeProduct,
        total
      }}
    >
      {children}
    </productsContext.Provider>
  )
}

export function useProductsContext() {
  return useContext(productsContext)
}
