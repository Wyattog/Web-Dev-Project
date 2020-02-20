import React from 'react';
import NavBar from './navBar';
import './stylesheets/component.css'
class Contact extends React.Component {
    
    render(){
     return (
            <blockquote>
            <NavBar />
            <h2>Contact Us</h2>

            <div>Contact us for any questions, we're happy to help!</div>

            <div>Email: Hive.construction@gmail.com</div>

            <div>Phone: 801-555-5555</div>
            
            </blockquote>
        );
    }
}
export default Contact;