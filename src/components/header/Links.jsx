import {Link} from 'react-router-dom'
import styles from './Links.module.css'

const Links = ({clicked}) => {
  return (
    <ul className={`${styles.linksContainer} ${clicked ? styles.active : ''}`}>
      <li>
        <Link to={'/hombre'}>Hombre</Link>
      </li>
      <li>
        <Link to={'/mujer'}>Mujer</Link>
      </li>
    </ul>
  )
}

export default Links
