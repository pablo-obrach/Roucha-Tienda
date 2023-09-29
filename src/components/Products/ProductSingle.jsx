import BtnComprar from '../Buttons/BtnComprar'
import styles from './ProductSingle.module.css'
import {useParams} from 'react-router-dom'
import {useProductsContext} from '../ProductsProvider/ProductsProvider'

const ProductSingle = () => {
  const {productId} = useParams()
  const {products, cart, setCart} = useProductsContext()

  console.log(cart)

  const handleBuy = product => {
    setCart([...cart, product])
  }

  return (
    <>
      {products &&
        products
          .filter(prod => prod.id === Number(productId))
          .map(product => (
            <div key={product.id} className={styles.ProductSingleContainer}>
              <div>
                <img
                  className={styles.ProductSingleImage}
                  src={product.image1}
                  alt={product.name}
                />
              </div>

              <div className={styles.ProductSingleInfo}>
                <h3 className={styles.ProductSingleTitle}>{product.name}</h3>
                <h4 className={styles.ProductSinglePrice}>$ {product.price}</h4>
                <p className={styles.ProductSingleDescription}>
                  {product.description}
                </p>

                <div className={styles.ProductSingleSizes}>
                  <span className={styles.ProductSingleSizesTitle}>TALLE:</span>
                  <div
                    className={styles.ProductSingleSizesContainer}
                    id='sizes'
                  >
                    <div className={styles.sizesOption} id='small'>
                      S
                    </div>
                    <div className={styles.sizesOption} id='medium'>
                      M
                    </div>
                    <div className={styles.sizesOption} id='large'>
                      L
                    </div>
                  </div>

                  <BtnComprar
                    handleBuy={() => handleBuy(product)}
                    btnTitle={'AGREGAR A LA BOLSA'}
                  />
                </div>
              </div>
            </div>
          ))}
    </>
  )
}

export default ProductSingle
