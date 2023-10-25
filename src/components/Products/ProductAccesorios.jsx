import {Link} from 'react-router-dom'
import Products from '../Products/Products'
import {CircularProgress} from '@mui/material'
import styles from './ProductLino.module.css'
import {useState, useEffect} from 'react'
import {
  getDocs,
  getFirestore,
  collection,
  query,
  where
} from 'firebase/firestore'

const ProductAccesorios = () => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    const db = getFirestore()
    const q = query(
      collection(db, 'items'),
      where('etiqueta', '==', 'accesorio')
    )

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
            to={`/ProdShowCase/${product.id}`}
            key={product.id}
            className={styles.link}
          >
            <Products key={product.id} item={product} />
          </Link>
        ))
      ) : (
        <CircularProgress />
      )}
    </div>
  )
}

export default ProductAccesorios
