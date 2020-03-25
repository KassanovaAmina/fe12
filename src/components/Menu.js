import React from 'react';

function Menu(props) {
    return <ul>
        {props.menuItems.map((el, i) => <li key={i}>{el}</li>)}
    </ul>;

}
export default Menu;