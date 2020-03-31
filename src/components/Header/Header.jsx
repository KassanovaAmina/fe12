import React from 'react';
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";

function Header(props) {
    return (
        <div className='header'>
            <Logo/>
            {props.title} <hr/>
        </div>
    );

}
export default Header;