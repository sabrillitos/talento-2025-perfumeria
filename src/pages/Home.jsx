import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/loading_perfumes.gif'

const Home = ({borrarProducto, agregarCarrito, cart, productos, cargando}) => {
    return (
        <>
        <Header borrarProducto={borrarProducto} cartItems={cart}/>
        <main>

            <img style={{objectFit:'cover', width:'100%', height:'100%'}} src='https://res.cloudinary.com/df93m2opb/image/upload/v1748227179/header_hqizvi.png'/>
        
            { //TERNARIO 
                cargando ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                <img src={loading} alt='loading' />
            </div>
            ) : <ProductList agregarCarrito={agregarCarrito} productos={productos}/>
            }
        
        </main>

        <Footer/>
        </>
    )
}

export default Home
