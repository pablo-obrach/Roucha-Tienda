import styles from './Products.module.css'

const Products = ({item}) => {
  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImage}
        src={item.imagen}
        alt={item.nombre}
      />
      <h3 className={styles.productName}>{item.nombre}</h3>
      <h4 className={styles.productPrice}>${item.precio}</h4>
    </div>
  )
}

export default Products
