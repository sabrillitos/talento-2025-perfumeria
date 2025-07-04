import { useState, useEffect, useContext } from 'react'
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
import { CartContext } from './context/CartContext'

function App() {
  const {cart, productos, cargando, error, handleAddToCart, handleDeleteFromCart, isAuthenticated} = useContext(CartContext)

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
