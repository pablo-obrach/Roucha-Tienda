/* eslint-disable react-refresh/only-export-components */
import React, {useState, useContext, useEffect} from 'react'
import {getFirestore, collection, addDoc} from 'firebase/firestore'

const productsContext = React.createContext()

export function ProductsProvider({children}) {
  const [cart, setCart] = useState({
    buyer: {
      nombre: 'Jhon',
      apellido: 'Doe',
      email: 'jhon@doe.com',
      telefono: '123534563'
    },
    items: [],
    total: 0
  })

  const [orderId, setOrderId] = useState('')
  console.log(orderId)

  const handleBuy = product => {
    const {items} = cart
    const index = items.findIndex(i => i.id === product.id)

    if (index > -1) {
      items[index].cantidad += 1
    } else {
      items.push({
        ...product
      })
    }

    setCart({
      ...cart,
      items,
      total: total()
    })
  }

  const decreaseProduct = product => {
    const {items} = cart
    const index = items.findIndex(i => i.id === product.id)

    if (index > -1) {
      if (items[index].cantidad > 1) {
        items[index].cantidad -= 1
      }
    }

    setCart({
      ...cart,
      items
    })
  }

  const removeProduct = product => {
    const {items} = cart
    const index = items.findIndex(i => i.id === product.id)

    if (index > -1) {
      items.splice(index, 1)
    }

    setCart({
      ...cart,
      items
    })
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart.items))
  }, [cart])

  const total = () => {
    return cart.items.reduce(
      (acc, item) => acc + item.precio * item.cantidad,
      0
    )
  }

  const sendOrder = () => {
    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')

    addDoc(ordersCollection, {...cart, date: new Date()}).then(({id}) => {
      setOrderId(id)
    })
  }

  return (
    <productsContext.Provider
      value={{
        cart,
        setCart,
        handleBuy,
        decreaseProduct,
        removeProduct,
        total,
        sendOrder,
        orderId
      }}
    >
      {children}
    </productsContext.Provider>
  )
}

export function useProductsContext() {
  return useContext(productsContext)
}
