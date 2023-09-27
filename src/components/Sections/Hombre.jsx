import MovingSign from '../MovingSing/MovingSign'
import NavBar from '../header/NavBar'
import ItemHombreContainer from '../Items/itemHombreContainer'
import {ProductsProvider} from '../ProductsProvider/ProductsProvider'
import styles from '../../App.module.css'
import Footer from '../Footer/Footer'

const Hombre = () => {
  return (
    <ProductsProvider>
      <div className={styles.mainContainer}>
        <MovingSign />
        <NavBar />
        <ItemHombreContainer />
        <Footer />
      </div>
    </ProductsProvider>
  )
}

export default Hombre
