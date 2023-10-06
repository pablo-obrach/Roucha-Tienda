import MovingSign from '../MovingSing/MovingSign'
import NavBar from '../header/NavBar'
import Footer from '../Footer/Footer'
import ProductLino from '../Products/ProductLino'
import styles from '../../App.module.css'

const Lino = () => {
  return (
    <div className={styles.mainContainer}>
      <MovingSign />
      <NavBar />
      <ProductLino />
      <Footer />
    </div>
  )
}

export default Lino
