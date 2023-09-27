import {Link} from 'react-router-dom'
import styles from './HeaderTitle.module.css'

const HeaderTitle = () => {
  return (
    <Link className={styles.headerTitle} to={'/'}>
      <h1>ROÚCHA</h1>
    </Link>
  )
}

export default HeaderTitle
