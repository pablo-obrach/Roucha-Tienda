import MovingSign from '../MovingSing/MovingSign'
import NavBar from '../header/NavBar'
import Footer from '../Footer/Footer'
import styles from '../../App.module.css'
import style from './CheckOut.module.css'
import {useEffect, useState} from 'react'
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import {useProductsContext} from '../ProductsProvider/ProductsProvider'

const CheckOut = () => {
  const {orderId} = useProductsContext()
  console.log(orderId)
  const [order, setOrder] = useState(null)
  console.log(order)

  useEffect(() => {
    const db = getFirestore()
    const brief = doc(db, 'orders', orderId)

    getDoc(brief).then(snapshot => {
      if (!snapshot.empty) {
        setOrder({id: snapshot.id, ...snapshot.data()})
      }
    })
  }, [orderId])

  return (
    <>
      <MovingSign />
      <NavBar />
      <div className={styles.mainContainer}>
        {order != null ? (
          <div className={style.checkOutContainer}>
            <div className={style.checkOutInfo}>
              <h2>Detalle de la orden</h2>
              <h3>Id: {order.id}</h3>
              <h3>Nombre: {order.buyer.nombre}</h3>
              <h3>Apellido: {order.buyer.apellido}</h3>
              <h3>Email: {order.buyer.email}</h3>
              <h3>Telefono: {order.buyer.telefono}</h3>
            </div>

            <div className={style.checkOutItems}>
              <h2>Productos:</h2>
              {order.items.map((item, index) => (
                <div className={style.itemsContainer} key={index}>
                  <img src={item.imagen} alt={item.nombre} />

                  <div>
                    <h3>{item.nombre}</h3>
                    <h3>Precio: {item.precio}</h3>
                    <h3>Cantidad: {item.cantidad}</h3>
                  </div>
                </div>
              ))}
              <h2>Total: {order.total}</h2>
            </div>
          </div>
        ) : (
          <h2>no hay ordenes</h2>
        )}
      </div>
      <Footer />
    </>
  )
}

export default CheckOut
