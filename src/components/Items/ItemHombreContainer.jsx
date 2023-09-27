import styles from './ItemListContainer.module.css'
import {useProductsContext} from '../ProductsProvider/ProductsProvider'
import {Link} from 'react-router-dom'

import Products from '../Products/Products'

const ItemHombreContainer = () => {
  const {products} = useProductsContext()

  return (
    <div className={styles.mainContainer}>
      <div className={styles.ItemListContainer}>
        {products &&
          products
            .filter(prod => prod.gender === 'hombre')
            .map(product => (
              <Link
                className={styles.link}
                key={product.id}
                to={`/ProdShowCase/${product.id}`}
              >
                {' '}
                <Products key={product.id} item={product} />{' '}
              </Link>
            ))}
      </div>
    </div>
  )
}

export default ItemHombreContainer
