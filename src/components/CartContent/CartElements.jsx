import {useProductsContext} from '../ProductsProvider/ProductsProvider'
import styles from './CartElements.module.css'
import closeIcon from '../../assets/icons/EpCloseBold.svg'
import addIcon from '../../assets/icons/MiAdd.svg'
import removeIcon from '../../assets/icons/MiRemove.svg'
import BtnComprar from '../Buttons/BtnComprar'
const CartElements = () => {
  const {cart, handleBuy, decreaseProduct, removeProduct, total} =
    useProductsContext()

  return (
    <div className={styles.mainContainerCart}>
      <div className={styles.titleContainer}>
        <h2>MI CARRITO</h2>
      </div>

      <div className={styles.SubTotalContainer}>
        <p>SUBTOTAL</p>
      </div>

      {cart.length !== 0 ? (
        cart.map(product => (
          <div className={styles.productCard} key={product.id}>
            <img
              className={styles.productImage}
              src={product.image1}
              alt={product.name}
            />
            <h3 className={styles.productText}>{product.name}</h3>
            <h3 className={styles.productText}>${product.price}</h3>
            <div className={styles.quantityContainer}>
              <button
                className={styles.productButtonQuantity}
                onClick={() => decreaseProduct(product)}
              >
                <img src={removeIcon} alt='Remove Icon' />
              </button>
              <h3 className={styles.productText}>{product.quantity}</h3>
              <button
                className={styles.productButtonQuantity}
                onClick={() => handleBuy(product)}
              >
                <img src={addIcon} alt='Add Icon' />
              </button>
            </div>
            <h4 className={styles.productText}>
              ${product.price * product.quantity}
            </h4>
            <button
              onClick={() => removeProduct(product)}
              className={styles.productButtonEliminar}
            >
              <img src={closeIcon} alt='close icon' />
            </button>
          </div>
        ))
      ) : (
        <p>No hay elementos en el carrito</p>
      )}
      {cart.length !== 0 && (
        <div className={styles.totalContainer}>
          <p>TOTAL: ${total}</p>
        </div>
      )}
      <div className={styles.buttonContainer}>
        <BtnComprar btnTitle='COMPRAR' />
      </div>
    </div>
  )
}

export default CartElements
