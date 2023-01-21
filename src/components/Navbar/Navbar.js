import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
          <nav className="nav-wrap">
            <div className="logo">
                <Link className='logo-link'>
                Raton 
                </Link>
            </div>
            <ul className='nav-container'>
                <li className='nav-item'>
                    <Link className = "nav-link">Home </Link>
                </li>
                <li className='nav-item'>
                    <Link className = "nav-link">Services </Link>
                </li>
                <li className='nav-item'>
                    <Link className = "nav-link"> Project </Link>
                </li>
                <li>
                    <Link className = "nav-link"> Contact  </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link'> About </Link>
                </li>
                <li className='nav-item'>
                    <Link className = "nav-link"> Blog </Link>
                </li>
            </ul>
            </nav>  
        </>
    );
};

export default Navbar;