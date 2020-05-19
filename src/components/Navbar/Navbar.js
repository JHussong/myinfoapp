import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
        <nav>
            <h3>My.Info</h3>
            <ul className='nav-links'>
                <Link to='/'><li>Images</li></Link>
                <Link to='/News'><li>News</li></Link>
                <Link to='/Weather'><li>Weather</li></Link>
            </ul>
        </nav>
    )
}


export default Navbar;