import React, { useState, useEffect, useContext } from "react";
import FormularioProducto from "../components/FormularioProducto";
import FormularioEdicion from "../components/FormularioEdicion";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const { setIsAuth } = useContext(CartContext);
    const navigate = useNavigate();

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [seleccionado, setSeleccionado] = useState(null);
    const [openEditor, setOpenEditor] = useState(false);

    const apiUrl = "https://68279db46b7628c52910f173.mockapi.io/productos";

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    setProductos(data);
                    setLoading(false);
                }, 2000);
            })
            .catch((error) => {
                console.error("Error al cargar productos:", error);
                setLoading(false);
            });
    }, []);

    const cargarProductos = async () => {
        try {
            const res = await fetch(apiUrl);
            const data = await res.json();
            setProductos(data);
        } catch (error) {
            console.log("Error al cargar productos", error);
        }
    };

    const agregarProducto = async (producto) => {
        try {
            const res = await fetch(apiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(producto),
            });
            if (!res.ok) throw new Error("Error al agregar producto");
            await res.json();
            alert("Producto agregado correctamente");
            cargarProductos();
            setOpen(false);
        } catch (error) {
            console.log(error.message);
        }
    };

    const actualizarProducto = async (producto) => {
        try {
            const res = await fetch(`${apiUrl}/${producto.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(producto),
            });
            if (!res.ok) throw new Error("Error al actualizar producto");
            await res.json();
            alert("Producto actualizado correctamente");
            setOpenEditor(false);
            setSeleccionado(null);
            cargarProductos();
        } catch (error) {
            console.log(error.message);
        }
    };

    const eliminarProducto = async (id) => {
        const confirmar = window.confirm("¿Estás seguro de eliminar el producto?");
        if (!confirmar) return;

        try {
            const res = await fetch(`${apiUrl}/${id}`, {
                method: "DELETE",
            });
            if (!res.ok) throw new Error("Error al eliminar");
            alert("Producto eliminado correctamente");
            cargarProductos();
        } catch (error) {
            alert("Hubo un problema al eliminar el producto");
        }
    };

    const handleLogout = () => {
        setIsAuth(false);
        navigate("/");
        localStorage.removeItem("isAuth");
    };

    return (
        <div className="container">
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <>
                    <nav>
                        <ul className="nav">
                            <li className="navItem">
                                <button className="navButton" onClick={handleLogout}>
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
                            gap: "20px",
                            justifyContent: "center",
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
                                    width: "150px",
                                    height: "250px", 
                                    boxSizing: "border-box",
                                    justifyContent: "space-between",
                                }}
                            >
                                <div style={{ textAlign: "center" }}>
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
                                    <span style={{ fontWeight: "bold", marginBottom: "5px", display: "block" }}>
                                        {product.nombre}
                                    </span>
                                    <span style={{ marginBottom: "10px", display: "block" }}>
                                        ${product.precio}
                                    </span>
                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        gap: "5px",
                                    }}
                                >
                                    <button
                                        className="editButton"
                                        style={{
                                            padding: "5px 8px",
                                            backgroundColor: "#2196F3",
                                            color: "white",
                                            border: "none",
                                            cursor: "pointer",
                                            borderRadius: "4px",
                                        }}
                                        onClick={() => {
                                            setOpenEditor(true);
                                            setSeleccionado(product);
                                        }}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className="deleteButton"
                                        style={{
                                            padding: "5px 8px",
                                            backgroundColor: "#f44336",
                                            color: "white",
                                            border: "none",
                                            cursor: "pointer",
                                            borderRadius: "4px",
                                        }}
                                        onClick={() => eliminarProducto(product.id)}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}

            <button onClick={() => setOpen(true)}>Agregar producto nuevo</button>

            {open && <FormularioProducto onAgregar={agregarProducto} />}
            {openEditor && (
                <FormularioEdicion
                    productoSeleccionado={seleccionado}
                    onActualizar={actualizarProducto}
                />
            )}
        </div>
    );
};

export default Admin;
