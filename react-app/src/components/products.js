import React from 'react';
import NavBar from './navBar';
import { render } from '@testing-library/react';
import {APIBASEURL} from './components/lib/config';
axios.defaults.baseURL = APIBASEURL;


class Products extends React.Component {
    
    render(){
     return (
            <blockquote>
            <NavBar />

            <div>Here are the products...</div>
            </blockquote>
        );
    }
}
export default Products