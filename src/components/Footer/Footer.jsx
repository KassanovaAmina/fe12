import React from 'react';
import FooterMenu from "./FooterMenu";
import Contacts from "./Contacts";

function Footer(props) {
    return (
        <div className='footer'>
            <h4>Support</h4>
            <FooterMenu footerMenuItems={props.footerMenuItems}/>
            <Contacts/>
        </div>
    );
}

export default Footer;

