import React, { useState } from 'react';

function FormularioProducto({ onAgregar }) {
    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        stock: '',
        imagen: '',
        categoria: '',
        detalle: '',
        ingredientes: ''
    });
    const [errores, setErrores] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    };


    const validarFormulario = () => {
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
    return Object.keys(nuevosErrores).length === 0;
};

    const handleSubmit = (e) => {
    e.preventDefault();
    if (!validarFormulario()) {
        return;
    }
    onAgregar(producto); 
    setProducto({ 
        nombre: '',
        precio: '',
        stock: '',
        imagen: '',
        categoria: '',
        detalle: '',
        ingredientes: ''
    });
};

return (
    <form onSubmit={handleSubmit}>
        <h2>Agregar Producto</h2>

        <div>
            <label>Nombre:</label>
            <input
                type="text" name="nombre" value={producto.nombre} onChange={handleChange} required />
            {errores.nombre && <p style={{ color: 'red' }}>{errores.nombre}</p>}
        </div>

        <div>
            <label>Precio:</label>
            <input
                type="number" name="precio" value={producto.precio} onChange={handleChange} required min="0" />
            {errores.precio && <p style={{ color: 'red' }}>{errores.precio}</p>}
        </div>

        <div>
            <label>Stock:</label>
            <input
                type="number" name="stock" value={producto.stock} onChange={handleChange} required min="0" />
            {errores.stock && <p style={{ color: 'red' }}>{errores.stock}</p>}
        </div>

        <div>
            <label>Imagen (URL):</label>
            <input
                type="text" name="imagen" value={producto.imagen} onChange={handleChange} required />
            {errores.imagen && <p style={{ color: 'red' }}>{errores.imagen}</p>}
        </div>

        <div>
            <label>Categoría:</label>
            <input
                type="text" name="categoria" value={producto.categoria} onChange={handleChange} required />
            {errores.categoria && <p style={{ color: 'red' }}>{errores.categoria}</p>}
        </div>

        <div>
            <label>Detalle:</label>
            <textarea
                name="detalle" value={producto.detalle} onChange={handleChange} required />
            {errores.detalle && <p style={{ color: 'red' }}>{errores.detalle}</p>}
        </div>

        <div>
            <label>Ingredientes:</label>
            <textarea
                name="ingredientes" value={producto.ingredientes} onChange={handleChange} required />
            {errores.ingredientes && <p style={{ color: 'red' }}>{errores.ingredientes}</p>}
        </div>

        <button type="submit">Agregar Producto</button>
    </form>
);
}

export default FormularioProducto;