import MovingSign from '../MovingSing/MovingSign'
import NavBar from '../header/NavBar'
import Footer from '../Footer/Footer'
import ProductAlgodon from '../Products/ProductAlgodon'
import styles from '../../App.module.css'
const Algodon = () => {
  return (
    <div className={styles.mainContainer}>
      <MovingSign />
      <NavBar />
      <ProductAlgodon />
      <Footer />
    </div>
  )
}

export default Algodon
