import {useProductsContext} from '../ProductsProvider/ProductsProvider'
import {Link} from 'react-router-dom'
import Products from '../Products/Products'
import {CircularProgress} from '@mui/material'
import styles from './ProductLino.module.css'

const ProductAccesorios = () => {
  const {products} = useProductsContext()
  return (
    <div className={styles.mainContainer}>
      {products != null ? (
        products
          .filter(prod => prod.tipo === 'accesorio' && prod.gender === 'hombre')
          .map(product => (
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
