import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './styleEstatico.css'
import Cart from '../Cart'
import { CartContext } from '../../context/CartContext'


const Header = () => {

const [isCartOpen, setCartOpen] = useState(false)

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/' className='link'>Inicio <i className="fa-solid fa-house"></i></Link></li>
                    <li><Link to='/acercade' className='link'>Sobre nosotros <i class="fa-solid fa-user"></i></Link></li>
                    <li><Link to='/productos' className='link'>Galeria de productos <i class="fa-solid fa-basket-shopping"></i></Link></li>
                    <li><Link to='/contacto' className='link'>Contacto <i class="fa-solid fa-envelope"></i></Link></li>
                    <li className='cartnav'>
                        <button className='btnCart' onClick={()=> setCartOpen(true)}><i className="fa-solid fa-cart-shopping"></i></button>
                        <Cart isOpen={isCartOpen} onClose={()=>
                            setCartOpen(false)}/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header