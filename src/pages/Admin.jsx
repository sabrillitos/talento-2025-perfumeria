import React, { useState, useEffect, useContext } from "react";
import FormularioProducto from "../components/FormularioProducto";
import FormularioEdicion from "../components/FormularioEdicion";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";

const Admin = () => {
    const { setIsAuth } = useContext(CartContext);

    const { productos,
            loading,
            open,
            setOpen,
            openEditor,
            setOpenEditor,
            seleccionado,
            setSeleccionado,
            agregarProducto,
            actualizarProducto,
            eliminarProducto,} = useContext(AdminContext)

    const navigate = useNavigate();

    return (
        <div className="container">
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <>
                    <nav>
                        <ul className="nav">
                            <li className="navItem">
                                <button className="navButton" onClick={() => {
                                    setIsAuth(false);
                                    navigate('/');
                                    localStorage.removeItem('isAuth');
                                }}>
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
