import React, { Component } from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import Web3 from 'web3';

import './App.css';
import Restaurants from './components/Restaurants';

class App extends Component{
  async componentWillMount(){
    await this.loadWeb3();
  }

  async loadWeb3(){
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);

      await window.ethereum.enable();
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  }

  render(){
    return (
      <Router className="App">
        <Route path="/">
          <Restaurants />
        </Route>
      </Router>
    );
  }
}

export default App;