import MovingSign from '../MovingSing/MovingSign'
import NavBar from '../header/NavBar'
import Footer from '../Footer/Footer'
import ProductAccesorios from '../Products/ProductAccesorios'
import styles from '../../App.module.css'

const Accesorios = () => {
  return (
    <div className={styles.mainContainer}>
      <MovingSign />
      <NavBar />
      <ProductAccesorios />
      <Footer />
    </div>
  )
}

export default Accesorios
