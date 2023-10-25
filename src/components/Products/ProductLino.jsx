import {CircularProgress} from '@mui/material'
import Products from './Products'
import {Link} from 'react-router-dom'
import styles from './ProductLino.module.css'
import {
  getDocs,
  getFirestore,
  collection,
  query,
  where
} from 'firebase/firestore'
import {useEffect, useState} from 'react'

const ProductLino = () => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    const db = getFirestore()
    const q = query(collection(db, 'items'), where('etiqueta', '==', 'lino'))

    getDocs(q).then(snapshot => {
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
    <div className={styles.mainContainer}>
      {products != null ? (
        products.map(product => (
          <Link
            key={product.id}
            to={`/ProdShowCase/${product.id}`}
            className={styles.link}
          >
            <Products key={product.id} item={product} />{' '}
          </Link>
        ))
      ) : (
        <CircularProgress />
      )}
    </div>
  )
}

export default ProductLino
