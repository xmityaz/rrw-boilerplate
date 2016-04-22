/**
 * Created by xmityaz on 22.04.16.
 */

import React, { PropTypes } from 'react';
import styles from './TodoItem.css';

const propTypes = {
  children: PropTypes.string,
  completed: PropTypes.bool,
  onComplete: PropTypes.func,
  onRemove: PropTypes.func
};

function TodoItem({ children, completed, onComplete, onRemove }) {
  let className = styles.todoItem;

  if (completed) {
    className += ` ${styles.completed}`;
  }
  return (
    <div className={className} onClick={onComplete}>
      {children}
      <button onClick={onRemove} className={styles.close}>x</button>
    </div>
  )
}

TodoItem.propTypes = propTypes;

export default TodoItem;
