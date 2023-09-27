import styles from './ItemListContainer.module.css'
import {useProductsContext} from '../ProductsProvider/ProductsProvider'
import Products from '../Products/Products'
import {Link} from 'react-router-dom'

const ItemMujerContainer = () => {
  const {products} = useProductsContext()

  return (
    <div className={styles.mainContainer}>
      <div className={styles.ItemListContainer}>
        {products &&
          products
            .filter(prod => prod.gender === 'mujer')
            .map(product => (
              <Link
                className={styles.link}
                key={product.id}
                to={`/ProdShowCase/${product.id}`}
              >
                <Products key={product.id} item={product} />
              </Link>
            ))}
      </div>
    </div>
  )
}

export default ItemMujerContainer
