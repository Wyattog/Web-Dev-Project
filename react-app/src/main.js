import React from 'react';
import { Switch, Route } from 'react-router-dom';

import WhyHive from './components/whyHive';
import Products from './components/products';
import Contact from './components/contact';
import Home from './home';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/products' component={Products}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route exact path='/whyhive' component={WhyHive}></Route>
    </Switch>
  );
}

export default Main;