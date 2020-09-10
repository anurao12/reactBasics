import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';
import '../header/header.styles.scss';


export const Header = () =>(
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
        <Link to='/shop' className='option'>Shop</Link>
        <Link to='/contact' className='option'>Contact</Link>
        </div>    
    </div>
)