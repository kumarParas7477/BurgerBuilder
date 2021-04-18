import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Layout from './components/Layout/layout';
class App extends Component {
  render() {
    return (
      <div >
  <Layout>
    <BurgerBuilder />
  </Layout>
      </div>
    );
  }
}

export default App;
