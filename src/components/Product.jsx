import React, {useState}from 'react'
import './styleProductos.css'
import { Link } from 'react-router-dom';

const Product = ({producto, agregarCarrito}) => {

    const [cantidad, setCantidad] = useState(1);

    const increase = () => setCantidad(prev => (prev < producto.stock ? prev + 1 : prev));
    const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1));

    return (
        <section className='card'>
            <div className='imgContainer'>
                <img src={producto.imagen} alt='' className='imagen'/>
            </div>

            <h3 className='nombre'>{producto.nombre}</h3>
            <p className='precio'>${producto.precio}</p>
            <p className='stock'>Disponibles: {producto.stock}</p>

            <div className='cantidadContainer'>
                <button className='quantityButton' onClick={decrease}>-</button>
                <span className='quantityNumber'>{cantidad}</span>
                <button className='quantityButton' onClick={increase}>+</button>
            </div>

            <button className='agregarBtn' onClick={()=> agregarCarrito(producto, cantidad)}>Agregar</button>
        
            <Link to={`/productos/${producto.id}`} className='verBtn'>Ver detalle</Link>

        </section>
    )
}

export default Product