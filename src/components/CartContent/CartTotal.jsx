import {useProductsContext} from '../ProductsProvider/ProductsProvider'
const CartTotal = () => {
  const {cart} = useProductsContext()

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div>
      <h3>Total: ${total}</h3>
    </div>
  )
}

export default CartTotal
