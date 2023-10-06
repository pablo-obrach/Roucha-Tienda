import NavBar from '../header/NavBar'
import MovingSign from '../MovingSing/MovingSign'
import Main from '../Sections/Main'
import Footer from '../Footer/Footer'

import styles from '../../App.module.css'

const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <MovingSign />
      <NavBar />
      <Main />
      <Footer />
    </div>
  )
}

export default Home
