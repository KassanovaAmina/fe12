import React from 'react';
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <h1>Online Learning</h1>
            <Content/>
            <a href="https://www.mtu.edu/online/apply/">Apply now</a>
            <Footer/>
        </div>
    );
}

export default App;