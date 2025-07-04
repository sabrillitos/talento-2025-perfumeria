import React, { useState, useEffect } from "react";
import FormularioProducto from "../components/FormularioProducto";

const Admin = () => {
    const [productos, setProductos] = useState([]);
    const [form, setForm] = useState({ id: null, name: "", price: "" });
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false)

    useEffect(() => {
        fetch("/data/data.json")
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => {
                    setProductos(data);
                    setLoading(false);
                }, 2000);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setError(true);
                setLoading(false);
            });
    }, []);

    const agregarProducto = async (producto) =>{
        try{
            const respuesta = await fetch('https://68279db46b7628c52910f173.mockapi.io/productos-ecommerce/productos',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
        })
        if(!respuesta.ok){
            throw new Error('Error al agregar producto')
        }
        const data = await respuesta.json()
        alert('Producto agregado correctamente')
        }catch(error){
            console.log(error.message);
            
        }
    }

    return (
        <div className="container">
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <>
                    <nav>
                        <ul className="nav">
                            <li className="navItem">
                                <button className="navButton">
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                </button>
                            </li>
                            <li className="navItem">
                                <a href="/admin">Admin</a>
                            </li>
                        </ul>
                    </nav>
                    <h1 className="title">Panel Administrativo</h1>

                    <ul
                        className="list"
                        style={{
                            listStyle: "none",
                            padding: 0,
                            margin: 0,
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "20px", // espacio entre columnas y filas
                            justifyContent: "center", // centra la grilla horizontalmente
                        }}
                        >
                        {productos.map((product) => (
                            <li
                            key={product.id}
                            className="listItem"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                padding: "10px",
                                border: "1px solid #ccc",
                                borderRadius: "8px",
                                width: "150px", // ancho fijo para que queden en columnas
                                boxSizing: "border-box",
                            }}
                            >
                            <img
                                src={product.imagen}
                                alt={product.nombre}
                                style={{
                                width: "50px",
                                height: "50px",
                                objectFit: "cover",
                                marginBottom: "10px",
                                borderRadius: "4px",
                                }}
                            />
                            <span style={{ fontWeight: "bold", marginBottom: "5px" }}>
                                {product.nombre}
                            </span>
                            <span style={{ marginBottom: "10px" }}>${product.precio}</span>
                            <div>
                                <button
                                className="editButton"
                                style={{
                                    marginRight: "10px",
                                    padding: "5px 10px",
                                    backgroundColor: "#2196F3",
                                    color: "white",
                                    border: "none",
                                    cursor: "pointer",
                                    borderRadius: "4px",
                                }}
                                >
                                Editar
                                </button>

                                <button
                                className="deleteButton"
                                style={{
                                    padding: "5px 10px",
                                    backgroundColor: "#f44336",
                                    color: "white",
                                    border: "none",
                                    cursor: "pointer",
                                    borderRadius: "4px",
                                }}
                                >
                                Eliminar
                                </button>
                            </div>
                            </li>
                        ))}
                        </ul>

                </>
            )}
            <button onClick={()=> setOpen(true)}>Agregar producto nuevo</button>
            {open && (<FormularioProducto onAgregar={agregarProducto}/>)}
        </div>
    );
};

export default Admin;