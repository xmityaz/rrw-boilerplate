/**
 * Created by xmityaz on 12.04.16.
 */

import React, { Component } from 'react';
import Header from '../../components/Header';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        {this.props.children}
      </div>
    );
  }
}
