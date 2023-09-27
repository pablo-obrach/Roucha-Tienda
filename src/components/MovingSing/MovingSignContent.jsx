import {useState} from 'react'
import styles from './MovingSignContent.module.css'

const MovingSignContent = () => {
  const [isAlternate, setIsAlternate] = useState(false)

  const onAnimationIteration = () => {
    setIsAlternate(prevIsAlternate => !prevIsAlternate)
  }

  return (
    <>
      <p
        className={`${styles.texts} ${isAlternate ? styles.alternate : ''}`}
        onAnimationIteration={onAnimationIteration}
      >
        {isAlternate ? (
          <>
            <b>
              3 CUOTAS SIN INTERESES CON TARJETA EN ARTICULOS DE PRODUCCION
              NACIONAL
            </b>
          </>
        ) : (
          <>
            <b>Envíos gratis</b> a todo el país, en compras superiores a
            $90.000-
          </>
        )}
      </p>
    </>
  )
}

export default MovingSignContent
