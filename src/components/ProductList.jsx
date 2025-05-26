import React from 'react'
import Product from './Product'
import './styleProductos.css'

const ProductList = ({productos, agregarCarrito}) => {
    return (
        <>
            <h2 style={{textAlign:'center', fontWeight:'500', fontSize:'50px'}}>Listado de productos</h2>
            <div className='productsContainer'>
                {
                    productos.map(producto=>(
                        <Product key={producto.id} producto={producto} agregarCarrito={agregarCarrito}/>
                    ))
                }
            </div>
        </>
    )
}

export default ProductList