import {useProductsContext} from '../ProductsProvider/ProductsProvider'

const CartElements = () => {
  const {cart} = useProductsContext()

  return (
    <>
      {cart &&
        cart.map(product => (
          <div key={product.id}>
            <img src={product.image1} alt={product.name} />
            <h3>{product.name}</h3>
            <h4>{product.price}</h4>
          </div>
        ))}
    </>
  )
}

export default CartElements
