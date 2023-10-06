import {useProductsContext} from '../ProductsProvider/ProductsProvider'
import {CircularProgress} from '@mui/material'
import Products from './Products'
import {Link} from 'react-router-dom'
import styles from './ProductLino.module.css'

const ProductLino = () => {
  const {products} = useProductsContext()

  return (
    <div className={styles.mainContainer}>
      {products != null ? (
        products
          .filter(prod => prod.tag === 'lino' && prod.gender === 'hombre')
          .map(product => (
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
