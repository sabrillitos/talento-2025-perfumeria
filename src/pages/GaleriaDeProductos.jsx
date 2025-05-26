import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/loading_perfumes.gif'

const GaleriaDeProductos = ({borrarProducto, agregarCarrito, cart, productos, cargando}) => {
    return (
        <>
        <Header borrarProducto={borrarProducto} cartItems={cart}/>
            <h1 style={{textAlign:'center'}}>FUTURAS PROMOCIONES PRONTO...</h1>
    {
    cargando
        ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
            <img src={loading} alt='loading' />
            </div>
        )
        : <ProductList agregarCarrito={agregarCarrito} productos={productos}/>
    }

        <Footer/>
        </>
    )
}

export default GaleriaDeProductos