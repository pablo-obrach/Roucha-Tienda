import styles from './ItemListContainer.module.css'
// import {useProductsContext} from '../ProductsProvider/ProductsProvider'
import {Link} from 'react-router-dom'
import {CircularProgress} from '@mui/material'
import Products from '../Products/Products'
import {
  getDocs,
  getFirestore,
  collection,
  query,
  where
} from 'firebase/firestore'
import {useEffect, useState} from 'react'

const ItemHombreContainer = () => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    const db = getFirestore()
    const q = query(collection(db, 'items'), where('genero', '==', 'hombre'))

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
      <div className={styles.ItemListContainer}>
        {products != null ? (
          products.map(product => (
            <Link
              className={styles.link}
              key={product.id}
              to={`/ProdShowCase/${product.id}`}
            >
              {' '}
              <Products key={product.id} item={product} />{' '}
            </Link>
          ))
        ) : (
          <CircularProgress />
        )}
      </div>
    </div>
  )
}

export default ItemHombreContainer
