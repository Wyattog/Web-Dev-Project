import React from 'react';
import { render } from '@testing-library/react';
import NavBar from './navBar';
import Footer from './footer';

class WhyHive extends React.Component {
    
    render() {
    return (
        <blockquote>
            <NavBar />
        <div> Why Hive? Hive is dedicated to being...</div>

        </blockquote>
        
    )
    }
}

export default WhyHive