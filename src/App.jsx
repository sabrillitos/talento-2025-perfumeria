import { useState, useEffect } from 'react'
import './App.css' // VER SI LO BORRO

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from "./pages/Home"
import AcercaDe from "./pages/AcercaDe"
import Contacto from "./pages/Contacto"
import GaleriaDeProductos from "./pages/GaleriaDeProductos"
import NotFound from "./pages/NotFound"
import DetallesProducto from "./pages/DetallesProducto"
import Login from './pages/Login'
import Admin from './pages/Admin'
import RutaProtegida from './auth/RutasProtegidas'

function App() {
  // Inicio los estados
  const [cart, setCart] = useState([])
  const [productos, setProductos] = useState([0])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)
  const [isAuthenticated, setIsAuth] = useState(false)
  
  // Manejo efectos secundarios
  useEffect(()=>{
    fetch("https://68279db46b7628c52910f173.mockapi.io/productos-ecommerce/productos")
    .then(respuesta => respuesta.json())

    .then(datos => {
      setTimeout(()=>{
        setProductos(datos)
        setCargando(false)
      },2000)
    })

    .catch(error =>{
      console.log('Error ', error)
      setCargando(false)
      setError(true)
    })

  },[])

const handleAddToCart = (product, cantidad) => {
  const productInCart = cart.find((item) => item.id === product.id);

  const totalCantidad = productInCart
    ? productInCart.quantity + cantidad
    : cantidad;

  if (totalCantidad > product.stock) {
    alert("No hay suficiente stock disponible");
    return;
  }

  if (productInCart) {
    setCart(
      cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + cantidad }
          : item
      )
    );
  } else {
    setCart([...cart, { ...product, quantity: cantidad }]);
  }
};

  if (error){
    return(
      <div>
        <h1>Hubo un error al cargar los productos</h1>
      </div>
    )
  }


  const handleDeleteFromCart = (product) => {

    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === product.id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return null; 
          }
        } else {
          return item; // Si no es el producto, lo dejamos igual
        }
      }).filter(item => item !== null);
    });
  };
  


  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={ <Home borrarProducto={handleDeleteFromCart} agregarCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando}/> }/>

          <Route path="/acercade" element={ <AcercaDe borrarProducto={handleDeleteFromCart} cart={cart}/> }/>

          <Route path="/productos" element={ <GaleriaDeProductos borrarProducto={handleDeleteFromCart} agregarCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando}/> }/>

          <Route path='/productos/:id' element={ <DetallesProducto productos={productos}/> }/>

          <Route path="/contacto" element={ <Contacto borrarProducto={handleDeleteFromCart} cart={cart}/> }/>

          { <Route path='/admin' element={ <RutaProtegida isAuthenticated={isAuthenticated}> <Admin/> </RutaProtegida> }/> }

          { <Route path='/login' element={ <Login/> }/>}

          <Route path="*" element={ <NotFound/> }/>

        </Routes>
      </Router>
    </>
  )
}

export default App
