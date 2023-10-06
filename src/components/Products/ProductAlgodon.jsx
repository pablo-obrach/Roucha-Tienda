import {useProductsContext} from '../ProductsProvider/ProductsProvider'
import {CircularProgress} from '@mui/material'
import Products from './Products'
import {Link} from 'react-router-dom'
import styles from './ProductLino.module.css'
const ProductAlgodon = () => {
  const {products} = useProductsContext()
  return (
    <div className={styles.mainContainer}>
      {products != null ? (
        products
          .filter(prod => prod.tag === 'algodon' && prod.gender === 'hombre')
          .map(product => (
            <Link
              key={product.id}
              to={`/ProdShowCase/${product.id}`}
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

export default ProductAlgodon
