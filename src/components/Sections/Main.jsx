import videoMainHombre from '../../assets/videos/videoMainHombre.mp4'
import {Link} from 'react-router-dom'
import styles from './Main.module.css'
import linoImage from '../../assets/img/secciones/hombre/1-lino/2-b.png'
import algodonImage from '../../assets/img/secciones/hombre/2-algodon/2-a.png'
import accesoriosImage from '../../assets/img/secciones/hombre/4-accesorios/2-b.png'

const Main = () => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.videoContainer}>
        <video
          width={'100%'}
          loop={true}
          src={videoMainHombre}
          autoPlay
          muted
          controls
        ></video>
      </div>

      <div className={styles.textContainer}>
        <h2>CONOCÉ NUESTRA TIENDA ONLINE</h2>
        <p> ENVIOS GRATIS A TODO EL PAIS EN COMPRAS SUPERIORES A $90,000</p>
      </div>
      <div className={styles.linksContainer}>
        <ul className={styles.linksListContainer}>
          <li>
            <Link to={'/hombre'}>Hombre</Link>
          </li>
          <li>
            <Link to={'/mujer'}>Mujer</Link>
          </li>
        </ul>
      </div>

      <div className={styles.cardsContainer}>
        <Link className={styles.cardLink} to={'/lino'}>
          {' '}
          <div className={styles.cardMain}>
            <img src={linoImage} alt='seccion lino' />
            <h4>LINO</h4>
          </div>
        </Link>
        <Link className={styles.cardLink} to={'/algodon'}>
          {' '}
          <div className={styles.cardMain}>
            <img src={algodonImage} alt='seccion algodon' />
            <h4>ALGODON</h4>
          </div>
        </Link>
        <Link className={styles.cardLink} to={'/accesorios'}>
          <div className={styles.cardMain}>
            <img src={accesoriosImage} alt='seccion accesorios' />
            <h4>ACCESORIOS</h4>
          </div>
        </Link>
      </div>
    </main>
  )
}

export default Main
