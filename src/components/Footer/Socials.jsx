import facebookIcon from '../../assets/icons/49052.png'
import instagramIcon from '../../assets/icons/instagram-logo-thin.svg'
import vimeoIcon from '../../assets/icons/vimeo.svg'
import styles from './Socials.module.css'

const Socials = () => {
  return (
    <div className={styles.socialsContainer}>
      <h4 className={styles.socialsTitle}>SEGUINOS</h4>
      <a href=''>
        <img
          className={styles.socialsIcons}
          src={facebookIcon}
          alt='facebook-logo'
        />
      </a>
      <a href=''>
        <img
          className={styles.socialsIcons}
          src={instagramIcon}
          alt='instagram-logo'
        />
      </a>
      <a href=''>
        <img className={styles.socialsIcons} src={vimeoIcon} alt='vimeo-logo' />
      </a>
    </div>
  )
}

export default Socials
