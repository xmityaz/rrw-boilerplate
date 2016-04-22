/**
 * Created by xmityaz on 12.04.16.
 */

import React, { Component } from 'react';
import Header from '../../components/App/Header/Header';

import styles from './App.css';

export default class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
