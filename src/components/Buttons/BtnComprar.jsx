import styles from './BtnComprar.module.css'

const BtnComprar = ({handleBuy, btnTitle}) => {
  return (
    <button className={styles.BtnComprar} onClick={handleBuy}>
      {btnTitle}
    </button>
  )
}

export default BtnComprar
