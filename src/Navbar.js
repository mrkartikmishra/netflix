import React from 'react';

import './Navbar.css';

import Avatar from './images/1.png';

const Navbar = () => {
    return(
        <div className="nav">
            <img className="nav__logo" src="http://pngimg.com/uploads/netflix/netflix_PNG11.png" alt="Netflix logo" />
            <img className="nav__avatar" src={Avatar} alt="Avatar" />
        </div>
    );
}

export default Navbar;