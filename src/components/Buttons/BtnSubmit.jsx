import styles from './BtnComprar.module.css'

const BtnSubmit = ({btnTitle}) => {
  return (
    <button type='submit' className={styles.BtnComprar}>
      {btnTitle}
    </button>
  )
}

export default BtnSubmit
