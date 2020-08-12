import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';

import Header from './Header'
import Home from '../pages/Home'
import MyProfile from '../pages/MyProfile'
import About from '../pages/About'
import Product from '../pages/Product'
import ProductDetail from '../pages/Product/ProductDetails'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Header></Header>
          <div style={{
            width: "400px",
            margin: "0 auto"
          }}>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/products" component={Product}></Route>
              <Route path="/products/:id" component={ProductDetail}></Route>
              <Route path="/myprofile" component={MyProfile}></Route>
              <Route path="/about" component={About}></Route>
              <Redirect from="/goods" to="/products" />
              <Redirect from="/*" to="/" />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
