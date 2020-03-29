import React from 'react';
import HeaderMenuItem from "../../src/components/Header/HeaderMenuItem";

function Menu(props) {
    return <ul>
        {props.menuItems.map((el, i) => <HeaderMenuItem key={i} item={el} />)}
    </ul>;

}
export default Menu;