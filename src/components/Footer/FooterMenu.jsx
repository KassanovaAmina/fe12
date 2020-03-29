import React from 'react';
import FooterMenuItem from "./FooterMenuItem";

function FooterMenu(props) {
    return <ul className=''>
        {props.footerMenuItems.map(el => <FooterMenuItem key={el.title} item={el}/>)}
</ul>;

}

export default FooterMenu;