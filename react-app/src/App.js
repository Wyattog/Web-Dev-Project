import React from 'react';
import PubSub from 'pubsub-js';
import './App.css';
import {HIVESUBCREATE} from './components/lib/subscriptions';
import Main from './main';
import axios from 'axios';
import {APIBASEURL} from './components/lib/config';
axios.defaults.baseURL = APIBASEURL;


class App extends React.Component
{
  constructor(props){
    super(props);
  }
  this.state = {
    hiveData: []
  }
  this.hiveSubCreateHandler = this.hiveSubCreateHandler.bind(this);
  PubSub.subscribe(HIVESUBCREATE, this.hiveSubCreateHandler);

}

componentDidMount() {
  axios.get(APIBASEURL + 'products/')
  .then((res) => {
    this.setState({
      hiveData: res.JSON
    })
    .catch(err) => {
      console.log(err);
    })
  }
}

// user authentication?
hiveSubCreateHandler(msg, ){
  console.log("hiveSubCreateHandler works");
   
  });

}


render() {
  return (
    
    <Main />
  
  );

  }
}

export default App;
