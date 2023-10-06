import {useProductsContext} from '../ProductsProvider/ProductsProvider'
import styles from './CartElements.module.css'
import CartTotal from './CartTotal'
import closeIcon from '../../assets/icons/EpCloseBold.svg'
import addIcon from '../../assets/icons/MiAdd.svg'
import removeIcon from '../../assets/icons/MiRemove.svg'

const CartElements = () => {
  const {cart, handleBuy, decreaseProduct, removeProduct} = useProductsContext()

  return (
    <div className={styles.mainContainerCart}>
      {cart.length !== 0 ? (
        cart.map(product => (
          <div className={styles.productCard} key={product.id}>
            <img
              className={styles.productImage}
              src={product.image1}
              alt={product.name}
            />
            <h3 className={styles.productText}>{product.name}</h3>
            <button
              onClick={() => removeProduct(product)}
              className={styles.productButtonEliminar}
            >
              <img src={closeIcon} alt='close icon' />
            </button>

            <button
              className={styles.productButtonQuantity}
              onClick={() => decreaseProduct(product)}
            >
              <img src={removeIcon} alt='Remove Icon' />
            </button>
            <h3 className={styles.productText}>cantidad: {product.quantity}</h3>
            <button
              className={styles.productButtonQuantity}
              onClick={() => handleBuy(product)}
            >
              <img src={addIcon} alt='Add Icon' />
            </button>
            <h4 className={styles.productText}>
              ${product.price * product.quantity}
            </h4>
          </div>
        ))
      ) : (
        <p>No hay elementos en el carrito</p>
      )}
      {cart.length !== 0 && <CartTotal />}
    </div>
  )
}

export default CartElements
