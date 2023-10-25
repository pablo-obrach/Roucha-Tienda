import BtnComprar from '../Buttons/BtnComprar'
import styles from './ProductSingle.module.css'
import {useParams} from 'react-router-dom'
import {useProductsContext} from '../ProductsProvider/ProductsProvider'
import {useEffect, useState} from 'react'
import {getDocs, getFirestore, collection} from 'firebase/firestore'

const ProductSingle = () => {
  const {productId} = useParams()
  const {handleBuy} = useProductsContext()
  const [products, setProducts] = useState(null)

  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, 'items')

    getDocs(itemsCollection).then(snapshot => {
      if (!snapshot.empty) {
        setProducts(
          snapshot.docs.map(doc => {
            return {id: doc.id, ...doc.data()}
          })
        )
      }
    })
  }, [])

  return (
    <>
      {products &&
        products
          .filter(prod => prod.id === productId)
          .map(product => (
            <div key={product.id} className={styles.ProductSingleContainer}>
              <div>
                <img
                  className={styles.ProductSingleImage}
                  src={product.imagen}
                  alt={product.nombre}
                />
              </div>

              <div className={styles.ProductSingleInfo}>
                <h3 className={styles.ProductSingleTitle}>{product.nombre}</h3>
                <h4 className={styles.ProductSinglePrice}>
                  $ {product.precio}
                </h4>
                <p className={styles.ProductSingleDescription}>
                  {product.descripcion}
                </p>

                <div className={styles.ProductSingleSizes}>
                  <span className={styles.ProductSingleSizesTitle}>TALLE:</span>
                  <div
                    className={styles.ProductSingleSizesContainer}
                    id='sizes'
                  >
                    <div className={styles.sizesOption} id='small'>
                      S
                    </div>
                    <div className={styles.sizesOption} id='medium'>
                      M
                    </div>
                    <div className={styles.sizesOption} id='large'>
                      L
                    </div>
                  </div>

                  <BtnComprar
                    handleBuy={() => handleBuy(product)}
                    btnTitle={'AGREGAR A LA BOLSA'}
                  />
                </div>
              </div>
            </div>
          ))}
    </>
  )
}

export default ProductSingle
