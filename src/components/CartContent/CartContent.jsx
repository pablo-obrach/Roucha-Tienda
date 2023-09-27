import {ProductsProvider} from '../ProductsProvider/ProductsProvider'
import MovingSign from '../MovingSing/MovingSign'
import NavBar from '../header/NavBar'
import Footer from '../Footer/Footer'
import CartElements from './CartElements'
import styles from '../../App.module.css'
import style from './CartContent.module.css'

const CartContent = () => {
  return (
    <ProductsProvider>
      <div className={styles.mainContainer}>
        <MovingSign />
        <NavBar />
        <div className={style.CartContentContainer}>
          <CartElements />
        </div>
        <Footer />
      </div>
    </ProductsProvider>
  )
}

export default CartContent
