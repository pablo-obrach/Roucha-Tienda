import NavBar from '../header/NavBar'
import MovingSign from '../MovingSing/MovingSign'
import ItemListContainer from '../Items/ItemListContainer'
import Footer from '../Footer/Footer'

import styles from '../../App.module.css'

const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <MovingSign />
      <NavBar />
      <ItemListContainer greetings={'Bienvenidos a Nuestra Tienda'} />
      <Footer />
    </div>
  )
}

export default Home
