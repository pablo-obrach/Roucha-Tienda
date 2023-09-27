import styles from './NavBarMenu.module.css'
// import NavBarMenuIcon from '../../assets/icons/NimbusMenu.svg'

const NavBarMenu = props => {
  return (
    <>
      <div className={styles.navIconContainer}>
        <div onClick={props.handleClicked} className={`${styles.navIcon5}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  )
}

export default NavBarMenu
