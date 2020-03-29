import React from 'react';

function HeaderMenuItem(props) {
    return <li className='headerMenuItem'>
        <a href={props.item.url}>{props.item.title}</a>
    </li>;

}

export default HeaderMenuItem;
