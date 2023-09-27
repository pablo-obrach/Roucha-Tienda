import NewsLetter from './NewsLetter'
import Socials from './Socials'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <NewsLetter />
        <Socials />
      </div>

      <h3 className={styles.footerBottomText}>
        Todos los derechos reservados Roúcha 2023
      </h3>
    </footer>
  )
}

export default Footer
