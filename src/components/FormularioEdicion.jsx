import React, { useState, useEffect } from 'react';

function FormularioEdicion({ productoSeleccionado, onActualizar }) {
    const [producto, setProducto] = useState(productoSeleccionado);
    const [errores, setErrores] = useState({});

    useEffect(() => {
        setProducto(productoSeleccionado);
    }, [productoSeleccionado]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    };

    return (
        <form onSubmit={(e) => {
            e.preventDefault();

            const nuevosErrores = {};

            if (!producto.nombre || producto.nombre.trim() === '') {
                nuevosErrores.nombre = 'El nombre es obligatorio.';
            }

            if (!producto.precio || producto.precio <= 0) {
                nuevosErrores.precio = 'El precio debe ser mayor a 0.';
            }

            if (!producto.stock || producto.stock < 0) {
                nuevosErrores.stock = 'El stock no puede ser negativo.';
            }

            if (!producto.imagen || producto.imagen.trim() === '') {
                nuevosErrores.imagen = 'La URL de la imagen es obligatoria.';
            }

            if (!producto.categoria || producto.categoria.trim() === '') {
                nuevosErrores.categoria = 'La categoría es obligatoria.';
            }

            if (!producto.detalle || producto.detalle.trim().length < 10) {
                nuevosErrores.detalle = 'El detalle debe tener al menos 10 caracteres.';
            }

            if (!producto.ingredientes || producto.ingredientes.trim().length < 5) {
                nuevosErrores.ingredientes = 'Los ingredientes deben tener al menos 5 caracteres.';
            }

            setErrores(nuevosErrores);

            if (Object.keys(nuevosErrores).length === 0) {
                onActualizar(producto);
            }
        }}>
            <h2>Editar Producto</h2>

            <div>
                <label>ID:</label>
                <input type="number" name="id" value={producto.id || ''} readOnly />
            </div>

            <div>
                <label>Nombre:</label>
                <input type="text" name="nombre" value={producto.nombre || ''} onChange={handleChange} required />
                {errores.nombre && <p style={{ color: 'red' }}>{errores.nombre}</p>}
            </div>

            <div>
                <label>Precio:</label>
                <input type="number" name="precio" value={producto.precio || ''} onChange={handleChange} required />
                {errores.precio && <p style={{ color: 'red' }}>{errores.precio}</p>}
            </div>

            <div>
                <label>Stock:</label>
                <input type="number" name="stock" value={producto.stock || ''} onChange={handleChange} required />
                {errores.stock && <p style={{ color: 'red' }}>{errores.stock}</p>}
            </div>

            <div>
                <label>Imagen URL:</label>
                <input type="text" name="imagen" value={producto.imagen || ''} onChange={handleChange} required />
                {errores.imagen && <p style={{ color: 'red' }}>{errores.imagen}</p>}
            </div>

            <div>
                <label>Categoría:</label>
                <input type="text" name="categoria" value={producto.categoria || ''} onChange={handleChange} required />
                {errores.categoria && <p style={{ color: 'red' }}>{errores.categoria}</p>}
            </div>

            <div>
                <label>Detalle:</label>
                <textarea name="detalle" value={producto.detalle || ''} onChange={handleChange} required />
                {errores.detalle && <p style={{ color: 'red' }}>{errores.detalle}</p>}
            </div>

            <div>
                <label>Ingredientes:</label>
                <textarea name="ingredientes" value={producto.ingredientes || ''} onChange={handleChange} required />
                {errores.ingredientes && <p style={{ color: 'red' }}>{errores.ingredientes}</p>}
            </div>

            <button type="submit">Actualizar Producto</button>
        </form>
    );
}

export default FormularioEdicion;
