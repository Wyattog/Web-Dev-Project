import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/navBar';
class Home extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            
            <blockquote>
                
                <NavBar />
            <div>This is the home</div>
            <p>multiline JSX!</p>
            </blockquote>
        );
    }
};

ReactDOM.render(<Home />, document.getElementById('root'))

export default Home