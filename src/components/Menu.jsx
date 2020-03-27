import React from 'react';
import MenuItem from "./MenuItem";

function Menu(props) {
    return <ul>
        {props.menuItems.map((el, i) => <MenuItem key={i} item={el} />)}
    </ul>;

}
export default Menu;