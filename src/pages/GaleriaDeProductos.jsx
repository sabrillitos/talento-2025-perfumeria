import React, { useContext } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/loading_perfumes.gif'
import { CartContext } from '../context/CartContext'

const GaleriaDeProductos = () => {

    const {cargando} = useContext(CartContext)

    return (
        <>
        <Header />
            <h1 style={{textAlign:'center'}}>FUTURAS PROMOCIONES PRONTO...</h1>
    {
    cargando
        ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
            <img src={loading} alt='loading' />
            </div>
        )
        : <ProductList  />
    }

        <Footer/>
        </>
    )
}

export default GaleriaDeProductos