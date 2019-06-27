import React, { Component } from 'react';

import PortfolioContainer from './portfolio/portfolio-container'

import moment from "moment";
  
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Hello World</h1>
        <h2>React Redux Router</h2>
        <PortfolioContainer />
      </div>
    );
  }
}
