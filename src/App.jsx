import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

function App() {
    const mainTitle = 'COUNTER APP';
    const menuItems =[
        {
            title: 'Main'
        },
        {
            title: 'About'
        },
        {
            title: 'Contacts'
        },
        {
            title: 'Deals'
        }
    ];
    return (
        <div className="App">
            <Header
                title={mainTitle}
                version='12.12.23'
                menuItems={menuItems}
            />
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;