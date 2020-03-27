import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

function App() {
    const mainTitle = 'COUNTER APP';
    const menuItems =[
        {title: 'Undergraduate Admissions'},
        {title: 'Graduate Admissions'},
        {title: 'Academics'},
        {title: 'Research'},
        {title: 'Campus Life and Safety'},
        {title: 'About'}
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