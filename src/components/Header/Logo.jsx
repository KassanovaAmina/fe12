import React from 'react';
import logo from '../../images/logo.png';

function Logo() {
    return (
        <div>
            <img className="Logo" src={logo} alt="logo"/>
            <a href='https://www.mtu.edu/'/>
        </div>

    );
}

export default Logo;