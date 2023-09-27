import styles from './ItemListContainer.module.css'
import {useProductsContext} from '../ProductsProvider/ProductsProvider'
import Products from '../Products/Products'
import {Link} from 'react-router-dom'

const ItemListContainer = ({greetings}) => {
  const {products} = useProductsContext()

  return (
    <div className={styles.mainContainer}>
      <h2>{greetings}</h2>
      <div className={styles.ItemListContainer}>
        {products &&
          products.map(product => (
            <Link
              key={product.id}
              to={`/ProdShowCase/${product.id}`}
              className={styles.link}
            >
              <Products key={product.id} item={product} />
            </Link>
          ))}
      </div>
    </div>
  )
}

export default ItemListContainer
