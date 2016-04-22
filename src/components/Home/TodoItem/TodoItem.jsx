/**
 * Created by xmityaz on 22.04.16.
 */

import React, { PropTypes } from 'react';
import styles from './TodoItem.css';

const propTypes = {
  children: PropTypes.string
};

function TodoItem({ children }) {
  return (
    <div className={styles.todoItem}>
      {children}
      <button className={styles.close}>x</button>
    </div>
  )
}

TodoItem.propTypes = propTypes;

export default TodoItem;
