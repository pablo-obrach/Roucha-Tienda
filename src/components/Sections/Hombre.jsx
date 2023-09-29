import MovingSign from '../MovingSing/MovingSign'
import NavBar from '../header/NavBar'
import ItemHombreContainer from '../Items/itemHombreContainer'
import styles from '../../App.module.css'
import Footer from '../Footer/Footer'

const Hombre = () => {
  return (
    <div className={styles.mainContainer}>
      <MovingSign />
      <NavBar />
      <ItemHombreContainer />
      <Footer />
    </div>
  )
}

export default Hombre
