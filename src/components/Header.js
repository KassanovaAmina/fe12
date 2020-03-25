import React from 'react';
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import Version from "./Version";
import Menu from "./Menu";

function Header(props) {
    console.log(props);
    return (
        <div>
            <strong>Counter app
                {props.title}
                {props.version}

            <Version appVersion={props.version} />
            <hr/>
            <Menu menuItems={props.menuItems} />

            </strong>;
            <Logo/>
            <HeaderMenu/>
        </div>
    );//strong>Counter app</strong>;

}
export default Header;