import React from 'react';
import HeaderMenuItem from "./HeaderMenuItem";

function HeaderMenu(props) {
    return (
        <div className='headerMenu'>
            <ul>
                {props.menuItems.map(el => <HeaderMenuItem key={el.title} item={el}/>)}
            </ul>
        </div>
    );

}

export default HeaderMenu;