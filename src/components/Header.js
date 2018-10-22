import React from 'react';
import './Header.css';
import logo from './shipp.svg';

function Header(){
    return(
        <header>
        <img src={logo} className='logo' alt='Setlist Vessel'/>
        </header>

    )

}

export default Header;