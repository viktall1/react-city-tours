import React from 'react'
import './Navbaar.scss';
import logo from '../../logo.png';

export default function NavBar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="city toures"/>
            <ul className="nav-links">
                <li>
                    <a href="" className="nav-link">Home</a>
                </li>
                <li>
                    <a href="" className="nav-link">About</a>
                </li>
                <li>
                    <a href="" className="nav-link">Khhd</a>
                </li>
            </ul>
        </nav>
    )
}
