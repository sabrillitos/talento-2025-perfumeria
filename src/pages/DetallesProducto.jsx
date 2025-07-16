import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './styleDetallesProducto.css';
import NotFound from './NotFound';
import { CartContext } from '../context/CartContext';

const DetallesProducto = () => {
    const { productos } = useContext(CartContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const product = productos.find(producto => producto.id == id);

    return (
        <div className="detalles-container">
            <h1>Detalle del producto: {id}</h1>

            {product ? (
                <div className="detalles-layout">
                    <img src={product.imagen} alt={product.nombre} className="detalles-imagen" />
                    <div className="detalles-info">
                        <h2>{product.nombre}</h2>

                        <div className="detalles-cuadro">
                            <h3>Detalles</h3>
                            <p>{product.detalle}</p>
                        </div>

                        <div className="detalles-cuadro">
                            <h3>Ingredientes</h3>
                            <p>{product.ingredientes}</p>
                        </div>

                        <div className="detalles-cuadro">
                            <h3>Categoría</h3>
                            <p>{product.categoria}</p>
                        </div>

                        <button className="volver-btn" onClick={() => navigate(-1)}>Volver atrás</button>
                    </div>
                </div>
            ) : (
                <NotFound />
            )}
        </div>
    );
};

export default DetallesProducto;
