import React from 'react'
import './styleCart.css'

const Cart = ({ cartItems, isOpen, onClose, borrarProducto }) => {
    return (
        <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>

            <div className='cart-header'>
                <h2>Carrito</h2>
            <button onClick={onClose} className='close-button'>X</button>
            </div>

            <div className='cart-content'>
                {cartItems.length === 0 ? (
                <p style={{ color: 'red', fontWeight: 'bold' }}>Su carrito está vacío</p>
                ) : (
                <div className='cart-items'>
                {cartItems.map((item) => (
                    <div key={item.id} className='cart-card'>
                        <img src={item.imagen} alt={item.nombre} className='cart-img' />
                        <div className='cart-info'>
                            <p className='cart-nombre'>{item.nombre}</p>
                            <p className='cart-detalle'>
                            ${item.precio.toFixed(2)} x {item.quantity} = ${(item.precio * item.quantity).toFixed(2)}
                            </p>
                    </div>
                    <button onClick={() => borrarProducto(item)} className='deleteBtn'>
                        <i className='fa-solid fa-trash'></i>
                    </button>
                    </div>
                ))}
                </div>
            )}
            </div>

            {cartItems.length > 0 && (
                <div className='cart-footer'>
                <p>Total: ${cartItems
                    .reduce((acc, item) => acc + item.precio * item.quantity, 0)
                    .toFixed(2)}
                </p>
                <button className='pagarBtn'>Pagar</button>
                </div>
            )}
        </div>
    )
}

export default Cart
