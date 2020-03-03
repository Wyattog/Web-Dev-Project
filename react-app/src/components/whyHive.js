import React from 'react';
import { render } from '@testing-library/react';
import NavBar from './navBar';
import Footer from './footer';


class WhyHive extends React.Component {
    
    render() {
    return (
        <blockquote>
            <NavBar />
         
                <h1>HIVE REMODELING</h1>
                <h1>H- HONESTY</h1> <div>Honest and straightforward always, we take pride in our customers knowing exactly what their getting.</div>
                <h1>I- INTEGRITY</h1> <div>Here at HIVE we practice strong moral princibles.</div>
                <h1>V- VALUE</h1> <div>We value your time and hard earned money.</div>
                <h1>E- EXPERIENCE</h1> <div>We have years of experience and are licensed and certified.</div>
             <br></br>
             <div>We are dedicated to bringing you a professional and exciting expereience and look forward to working with you.</div>
            
        </blockquote>
        
    )
    }
}

export default WhyHive