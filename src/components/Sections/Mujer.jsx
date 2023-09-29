import MovingSign from '../MovingSing/MovingSign'
import NavBar from '../header/NavBar'
import Footer from '../Footer/Footer'
import ItemMujerContainer from '../Items/ItemMujerContainer'
import styles from '../../App.module.css'

const Mujer = () => {
  return (
    <div className={styles.mainContainer}>
      <MovingSign />
      <NavBar />
      <ItemMujerContainer />
      <Footer />
    </div>
  )
}

export default Mujer
