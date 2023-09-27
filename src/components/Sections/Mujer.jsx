import MovingSign from '../MovingSing/MovingSign'
import NavBar from '../header/NavBar'
import Footer from '../Footer/Footer'
import ItemMujerContainer from '../Items/ItemMujerContainer'
import {ProductsProvider} from '../ProductsProvider/ProductsProvider'
import styles from '../../App.module.css'

const Mujer = () => {
  return (
    <ProductsProvider>
      <div className={styles.mainContainer}>
        <MovingSign />
        <NavBar />
        <ItemMujerContainer />
        <Footer />
      </div>
    </ProductsProvider>
  )
}

export default Mujer
