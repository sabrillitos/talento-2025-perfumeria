import React, {useContext} from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/loading_perfumes.gif'
import { CartContext } from '../context/CartContext'

const Home = () => {
    const { cargando } = useContext(CartContext)
    return (
        <>
        <Header />
        <main>

            <img style={{objectFit:'cover', width:'100%', height:'100%'}} src='https://res.cloudinary.com/df93m2opb/image/upload/v1748227179/header_hqizvi.png'/>
        
            { //TERNARIO 
                cargando ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                <img src={loading} alt='loading' />
            </div>
            ) : <ProductList />
            }
        
        </main>

        <Footer/>
        </>
    )
}

export default Home
