import {useProductsContext} from '../ProductsProvider/ProductsProvider'
import styles from './CartElements.module.css'
import closeIcon from '../../assets/icons/EpCloseBold.svg'
import addIcon from '../../assets/icons/MiAdd.svg'
import removeIcon from '../../assets/icons/MiRemove.svg'
import BtnSubmit from '../Buttons/BtnSubmit'
import {ToastContainer, toast} from 'react-toastify'
import {Link} from 'react-router-dom'

const CartElements = () => {
  const {
    cart,
    handleBuy,
    decreaseProduct,
    removeProduct,
    total,
    sendOrder,
    setCart,
    orderId
  } = useProductsContext()

  console.log(cart)
  console.log(orderId)

  const notify = () => {
    toast.success('Su orden ya fue creada', {
      position: 'bottom-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined
    })
  }

  const handleFormChange = async e => {
    e.preventDefault()

    const nombre = e.target.nombre.value
    const apellido = e.target.apellido.value
    const telefono = e.target.telefono.value
    const email = e.target.email.value

    await setCart(prevCart => ({
      ...prevCart,
      buyer: {
        nombre,
        apellido,
        telefono,
        email
      }
    }))

    notify()
  }

  return (
    <div key={cart.id} className={styles.mainContainerCart}>
      <div key={cart.id} className={styles.titleContainer}>
        <h2>MI CARRITO</h2>
      </div>

      {cart.items.length !== 0 ? (
        cart.items.map(product => (
          <>
            <div className={styles.productCard} key={product.id}>
              <img
                className={styles.productImage}
                src={product.imagen}
                alt={product.nombre}
              />
              <h3 className={styles.productText}>{product.nombre}</h3>
              <h3 className={styles.productText}>${product.precio}</h3>
              <div className={styles.quantityContainer} key={product.id}>
                <button
                  className={styles.productButtonQuantity}
                  onClick={() => decreaseProduct(product)}
                >
                  <img src={removeIcon} alt='Remove Icon' />
                </button>
                <h3 className={styles.productText}>{product.cantidad}</h3>
                <button
                  className={styles.productButtonQuantity}
                  onClick={() => handleBuy(product)}
                >
                  <img src={addIcon} alt='Add Icon' />
                </button>
              </div>
              <h4 className={styles.productText}>
                ${product.precio * product.cantidad}
              </h4>
              <button
                onClick={() => removeProduct(product)}
                className={styles.productButtonEliminar}
              >
                <img src={closeIcon} alt='close icon' />
              </button>
            </div>
          </>
        ))
      ) : (
        <p>No hay elementos en el carrito</p>
      )}
      {cart.items.length !== 0 && (
        <>
          <div>
            <form
              action='post'
              id='form'
              className={styles.formContainer}
              onSubmit={e => handleFormChange(e)}
            >
              <div>
                <label htmlFor='nombre'>NOMBRE</label>
                <input
                  className={styles.input}
                  type='text'
                  name='nombre'
                  placeholder='nombre'
                  required
                />
              </div>
              <div>
                <label htmlFor='apellido'>APELLIDO</label>
                <input
                  className={styles.input}
                  type='text'
                  name='apellido'
                  placeholder='apellido'
                  required
                />
              </div>
              <div>
                <label htmlFor='telefono'>TELEFONO</label>
                <input
                  className={styles.input}
                  type='tel'
                  name='telefono'
                  id='telefono'
                  placeholder='telefono'
                  required
                />
              </div>
              <div>
                <label htmlFor='email'>E-MAIL</label>
                <input
                  className={styles.input}
                  type='email'
                  name='email'
                  id='email'
                  placeholder='e-mail'
                  required
                />
              </div>
              <div>
                <label htmlFor='email_repeat'>E-MAIL</label>
                <input
                  className={styles.input}
                  type='email'
                  name='email_repeat'
                  id='email_repeat'
                  placeholder='repetir e-mail'
                  required
                />
              </div>
              <BtnSubmit onClick={() => sendOrder()} btnTitle='COMPRAR' />
            </form>
            {orderId !== '' && (
              <Link className={styles.link} to={'/checkOut'}>
                Detalle de la orden
              </Link>
            )}
          </div>

          <div className={styles.totalContainer}>
            <p>TOTAL: ${total()}</p>
          </div>
        </>
      )}
      <ToastContainer />
    </div>
  )
}

export default CartElements
