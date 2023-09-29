import {useProductsContext} from '../ProductsProvider/ProductsProvider'
import styles from './CartElements.module.css'
const CartElements = () => {
  const {cart} = useProductsContext()

  return (
    <>
      {cart.length !== 0 ? (
        cart.map(product => (
          <div className={styles.productCard} key={product.id}>
            <img
              className={styles.productImage}
              src={product.image1}
              alt={product.name}
            />
            <h3 className={styles.productName}>{product.name}</h3>
            <h4 className={styles.productPrice}>${product.price}</h4>
          </div>
        ))
      ) : (
        <p>No hay elementos en el carrito</p>
      )}
    </>
  )
}

export default CartElements
