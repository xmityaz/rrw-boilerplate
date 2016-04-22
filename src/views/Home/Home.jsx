/**
 * Created by xmityaz on 22.04.16.
 */

import React, { Component } from 'react';
import styles from './Home.css';
import TodoItem from '../../components/Home/TodoItem/TodoItem.jsx';
import Filter from '../../components/Home/Footer/Footer.jsx';

const items = ['hey', 'My name is Siokroeskr', 'Na mene misi yaka'];

export default class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <input
          className={styles.todoInput}
          placeholder="What needs to be done?"
        />

        {items.map((item, idx) => <TodoItem key={idx}>{item}</TodoItem>)}

        <Filter />
      </div>
    )
  }
}