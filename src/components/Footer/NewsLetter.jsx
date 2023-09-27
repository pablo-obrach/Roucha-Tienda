import styles from './NewsLetter.module.css'

const NewsLetter = () => {
  return (
    <div className={styles.NewsLetterContainer}>
      <div>
        <h3 className={styles.NewsLetterTitle}>
          SUSCRIBITE A NUESTRO NEWSLETTER
        </h3>
      </div>
      <form className={styles.NewsLetterForm} action='post'>
        <label htmlFor='newsletter'>
          <input
            className={styles.NewsLetterEmail}
            type='email'
            name='email'
            id='newsletter'
            placeholder='Ingresa tu e-mail'
          />
          <button className={styles.NewsLetterButtonEnviar} type='submit'>
            ENVIAR
          </button>
        </label>
      </form>
    </div>
  )
}

export default NewsLetter
