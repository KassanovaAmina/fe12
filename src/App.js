import React from 'react';
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
    const mainTitle = 'COUNTER APP';
    const menuItems =[
        'Main', 'About', 'Contacts', 'Deals'
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