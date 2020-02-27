import React from 'react';
import NavBar from './navBar';
import {APIBASEURL} from './lib/config';
import axios from 'axios';
import ApplianceList from './appliance scripts/appliance';
axios.defaults.baseURL = APIBASEURL;


class Products extends React.Component {
    constructor(props){
        super(props);

    this.state = {
        hiveData: []
      }
    }
    
    componentDidMount() {
      axios.get('appliances/') 
        .then((res) => {
          this.setState({
            hiveData: res.data
          });
        })
        .catch((err) => {
          console.log(err);
        });
      }
      
    
    render(){
     return (
            <blockquote>
            <NavBar />
            <ApplianceList appliance = {this.state.hiveData} />
            </blockquote>
        );
    }
}
export default Products