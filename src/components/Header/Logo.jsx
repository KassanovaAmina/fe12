import React from 'react';
import logo from '../../images/logo.jpeg';

function Logo() {
    return (
        <div>
            <img className="Logo" src={logo} alt="logo"/>
            <a href='https://www.target.com/'/>
        </div>

    );
}

export default Logo;