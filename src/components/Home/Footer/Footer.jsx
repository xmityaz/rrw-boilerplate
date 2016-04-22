/**
 * Created by xmityaz on 22.04.16.
 */

import React from 'react';
import styles from './Footer.css';

export default function () {
  return (
    <div className={styles.footer}>
      <div className={styles.filter}>
        <div className={styles.filterItem}>All</div>
        <div className={styles.filterItem}>Completed</div>
        <div className={styles.filterItem}>Active</div>
      </div>

      <button className={styles.clearCompleted}>Clear completed</button>
    </div>
  )
}