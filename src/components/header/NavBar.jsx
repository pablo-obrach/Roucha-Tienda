import {useState} from 'react'
import NavBarMenu from './NavBarMenu'
import Links from './Links'
import HeaderTitle from './HeaderTitle'
import CartWidget from './CartWidget'

import styles from './NavBar.module.css'
import {useProductsContext} from '../ProductsProvider/ProductsProvider'

const NavBar = () => {
  const [clicked, setClicked] = useState(false)
  const {cart} = useProductsContext()

  const handleClicked = () => {
    setClicked(!clicked)
  }

  return (
    <nav className={styles.headerContainer}>
      <NavBarMenu handleClicked={handleClicked} />
      <Links clicked={clicked} />
      <HeaderTitle />
      <CartWidget items={cart.items.length} />
    </nav>
  )
}

export default NavBar
