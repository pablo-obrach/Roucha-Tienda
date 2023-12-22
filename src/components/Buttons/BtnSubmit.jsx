import styles from './BtnComprar.module.css'

const BtnSubmit = ({btnTitle, onClick}) => {
  return (
    <button onClick={onClick} type='submit' className={styles.BtnComprar}>
      {btnTitle}
    </button>
  )
}

export default BtnSubmit
