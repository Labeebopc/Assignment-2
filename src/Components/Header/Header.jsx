import React from 'react'
import { NavLink } from "react-router-dom";
import '../Header/Header.css'

function Header() {
    return (
        <div className='header'>
            <nav className="navbar navbar-expand text-center">
        
                    <div className="navbar-nav">
                    <NavLink to='/' className="nav-item" >Requests<span className='badge bg-danger rounded-pill'>1</span></NavLink>
                    <NavLink to='/services' className="nav-item" >Services<span className='badge bg-danger rounded-pill'>1</span></NavLink>
                    <NavLink to='/payments' className="nav-item" >Payments<span className='badge bg-danger rounded-pill'>1</span></NavLink>
                    </div>
            
            </nav>
        </div>

    )
}

export default Header