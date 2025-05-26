import React from 'react';
import { Link } from 'react-router-dom';
import './styleNotFound.css';

const NotFound = () => {
    return (
        <div className="notfound-container">
            <div className="notfound-box">
                <h1 className="notfound-title">Error 404</h1>
                <p className="notfound-text">Parece que esta fragancia se evaporó... No pudimos encontrar lo que buscás.</p>
                <Link to="/" className="notfound-button">Regresar al inicio</Link>
            </div>
        </div>
    );
};

export default NotFound;
