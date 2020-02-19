import React from 'react';
import NavBar from './navBar';

class Contact extends React.Component {
    
    render(){
     return (
            <blockquote>
            <NavBar />
            <h1>Contact Us</h1>

            <div>Contact us for any questions, we're happy to help!</div>

            <div>Email: Hive.construction@gmail.com</div>

            <div>Phone: 801-555-5555</div>
            
            </blockquote>
        );
    }
}
export default Contact;