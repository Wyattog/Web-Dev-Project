import React from 'react';
import NavBar from './navBar';
import { render } from '@testing-library/react';

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