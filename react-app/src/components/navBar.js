import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import './stylesheets/navBar.css';
import logo from '../hivelogo.png';

class NavBar extends React.Component {
    render() {
        return(
            <blockquote>
                <div>
                <a href="/"><img className="logo" src={logo} width="50" height="50" alt="Hive logo" /></a>
                </div>
            <nav className = 'navbar'>
                <h3><a href="./whyHive">Why Hive</a></h3>
                <h3><a href="./products">Products</a></h3>
                <h3><a href="./contact">Contact Us</a></h3>
            </nav>
            </blockquote>
        )
    }
}

export default NavBar