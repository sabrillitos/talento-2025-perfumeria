import React, {useContext} from 'react'
import './styleCart.css'
import { CartContext } from '../context/CartContext'

const Cart = ({ isOpen, onClose }) => {

    const {cart, handleDeleteFromCart} = useContext(CartContext)

    return (
        <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>

            <div className='cart-header'>
                <h2>Carrito</h2>
            <button onClick={onClose} className='close-button'>X</button>
            </div>

            <div className='cart-content'>
                {cart.length === 0 ? (
                <p style={{ color: 'red', fontWeight: 'bold' }}>Su carrito está vacío</p>
                ) : (
                <div className='cart-items'>
                {cart.map((item) => (
                    <div key={item.id} className='cart-card'>
                        <img src={item.imagen} alt={item.nombre} className='cart-img' />
                        <div className='cart-info'>
                            <p className='cart-nombre'>{item.nombre}</p>
                            <p className='cart-detalle'>
                            ${Number(item.precio).toFixed(2)} x {item.quantity} = ${(Number(item.precio) * item.quantity).toFixed(2)}
                            </p>
                    </div>
                    <button onClick={() => handleDeleteFromCart(item)} className='deleteBtn'>
                        <i className='fa-solid fa-trash'></i>
                    </button>
                    </div>
                ))}
                </div>
            )}
            </div>

            {cart.length > 0 && (
                <div className='cart-footer'>
                <p>Total: ${cart
                .reduce((acc, item) => acc + Number(item.precio) * item.quantity, 0)
                .toFixed(2)}
                </p>
                <button className='pagarBtn'>Pagar</button>
                </div>
            )}
        </div>
    )
}

export default Cart
