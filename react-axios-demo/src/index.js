import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom';
import './index.scss'
import Home from './views/Home';
import About from './views/About';
import News from './views/News';
import Demo from './views/Demo';
import Contacts from './views/Contacts';
import Products from './views/Products';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/Home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/news" component={News} />
      <Route path="/demo" component={Demo} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/products" component={Products} />
      <Redirect from="/" to="/Home" />
    </Switch>
    
  </HashRouter>,
  //<Route path="/contacts" component={Contacts}>Contacts</Route>
  //<React.StrictMode>
  // <App />
  //</React.StrictMode>,

  document.getElementById("root")
);


