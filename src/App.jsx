import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

function App() {
    const mainTitle = 'COVID-19 Update';
    const menuItems =[
        {title: 'Undergraduate Admissions', url: 'https://www.mtu.edu/admissions/'},
        {title: 'Graduate Admissions', url: 'https://www.mtu.edu/gradschool/'},
        {title: 'Academics', url: 'https://www.mtu.edu/colleges-schools/'},
        {title: 'Research', url: 'https://www.mtu.edu/research/'},
        {title: 'Campus Life and Safety', url: 'https://www.mtu.edu/admissions/life/involved/'},
        {title: 'About', url: 'https://www.mtu.edu/about/'},
    ];

    const footerMenuItems = [
        {title: 'Accessible Technology', url: 'https://www.mtu.edu/accessibility/'},
        {title: 'Equal Opportunity', url: 'https://www.mtu.edu/equity/equal-opportunity/'},
        {title: 'Human Resources', url: 'https://www.mtu.edu/hr/'},
        {title: 'Information Technology', url: 'https://www.mtu.edu/it/'},
        {title: 'Institutional Equity', url: 'https://www.mtu.edu/equity/'}
    ];

    return (
        <div className="App">
            <Header
                title={mainTitle}
                menuItems={menuItems}/>
            <Content/>
            <Footer footerMenuItems={footerMenuItems}/>
        </div>
    );
}

export default App;