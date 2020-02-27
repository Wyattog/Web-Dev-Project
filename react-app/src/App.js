import React from 'react';
import PubSub from 'pubsub-js';
import './App.css';
import {HIVESUBCREATE} from './components/lib/subscriptions';
import Main from './main';
import Footer from './components/footer';


class App extends React.Component
{
  constructor(props){
    super(props);
  }
  

/* user authentication?
hiveSubCreateHandler(msg, ){
  console.log("hiveSubCreateHandler works");
   
  });

}
*/

render() {
  return (
  <blockquote>
    <Main />
    
    <Footer />
  </blockquote>
  );

  }
}

export default App;
