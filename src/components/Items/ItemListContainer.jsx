import styles from './ItemListContainer.module.css'
import {useProductsContext} from '../ProductsProvider/ProductsProvider'
import Products from '../Products/Products'
import {Link} from 'react-router-dom'
import {CircularProgress} from '@mui/material'

const ItemListContainer = () => {
  const {products} = useProductsContext()

  return (
    <div className={styles.mainContainer}>
      <div className={styles.ItemListContainer}>
        {products != null ? (
          products.map(product => (
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
    </div>
  )
}

export default ItemListContainer
