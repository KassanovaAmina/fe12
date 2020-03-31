import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

function App() {
    const mainTitle = 'Stay Home & Order online';
    const menuItems =[
        {title: 'Categories', url: 'https://www.mtu.edu/admissions/'},
        {title: 'Deals', url: 'https://www.mtu.edu/gradschool/'},
        {title: 'What`s New', url: 'https://www.mtu.edu/colleges-schools/'},
        {title: 'Same Day Delivery', url: 'https://www.mtu.edu/research/'},
    ];

    const footerMenuItems = [
        {title: 'Help', url: 'https://www.mtu.edu/accessibility/'},
        {title: 'Stores', url: 'https://www.mtu.edu/equity/equal-opportunity/'},
        {title: 'Apps', url: 'https://www.mtu.edu/hr/'},
        {title: 'Social', url: 'https://www.mtu.edu/it/'},
        {title: 'More', url: 'https://www.mtu.edu/equity/'}
    ];

    const onButtonClick = (n) => {
        console.log(n)
    }

    const menu = [
        'Categories',
        'Go 2',
        'Go 3'
    ]



    return (
        <div className="App">
            <Header

                title={mainTitle}
                menuItems={menuItems}/>
            {menuItems.map(el => <button key={el} onClick={() => onButtonClick(el)}>{el.title}</button>)}
            <Content/>
            <Footer footerMenuItems={footerMenuItems}/>
        </div>
    );
}

export default App;

//<input type="text" />