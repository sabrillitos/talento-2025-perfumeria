import React, {useContext} from 'react'
import Product from './Product'
import './styleProductos.css'
import { CartContext } from '../context/CartContext'

const ProductList = () => {

    const {productos} = useContext(CartContext)

    return (
        <>
            <h2 style={{textAlign:'center', fontWeight:'500', fontSize:'50px'}}>Listado de productos</h2>
            <div className='productsContainer'>
                {
                    productos.map(producto=>(
                        <Product key={producto.id} producto={producto} />
                    ))
                }
            </div>
        </>
    )
}

export default ProductList