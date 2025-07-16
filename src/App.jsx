import { useState, useEffect, useContext } from 'react'
import './App.css' // VER SI LO BORRO

import { Routes, Route } from 'react-router-dom'

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
import { useAuth } from './context/AuthContext'

function App() {
  const { isAuthenticated, role } = useAuth()


  return (
    <>
        <Routes>

          <Route path="/" element={
            <RutaProtegida isAuthenticated={isAuthenticated} requeridRole='cliente' role={role}>
            <Home />
          </RutaProtegida> } />

          <Route path="/acercade" element={ <AcercaDe /> }/>

          <Route path="/productos" element={ <GaleriaDeProductos /> }/>

          <Route path='/productos/:id' element={ <DetallesProducto /> }/>

          <Route path="/contacto" element={ <Contacto /> }/>

          <Route path='/admin' element={
            <RutaProtegida isAuthenticated={isAuthenticated} requeridRole="admin" role={role}>
              <Admin />
            </RutaProtegida>
          } />

          <Route path='/login' element={ <Login/> }/>

          <Route path="*" element={ <NotFound/> }/>

        </Routes>
    </>
  )
}

export default App
