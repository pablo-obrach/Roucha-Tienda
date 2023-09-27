import styles from './CartWidget.module.css'
import carritoWidgetIcon from '../../assets/icons/purse.svg'
import {Link} from 'react-router-dom'

const CartWidget = ({items}) => {
  return (
    <div className={styles.cartWidgetContainer}>
      <Link to={'/cart'}>
        <img
          className={styles.cartWidgetIcon}
          src={carritoWidgetIcon}
          alt='carrito icon'
        ></img>
      </Link>
      <p className={styles.itemsCount}>{items}</p>
    </div>
  )
}

export default CartWidget
