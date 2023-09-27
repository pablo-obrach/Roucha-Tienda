import styles from './Products.module.css'

const Products = ({item}) => {
  return (
    <div className={styles.productCard}>
      <img className={styles.productImage} src={item.image1} alt={item.name} />
      <h3 className={styles.productName}>{item.name}</h3>
      <h4 className={styles.productPrice}>${item.price}</h4>
    </div>
  )
}

export default Products
