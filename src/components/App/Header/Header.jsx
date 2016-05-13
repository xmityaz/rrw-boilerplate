/**
 * Created by xmityaz on 17.04.16.
 */

import React from 'react';
import { Link } from 'react-router';
import styles from './Header.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerNav}>
        <Link className={styles.headerNavTab} to="/">Home</Link>
        <Link className={styles.headerNavTab} to="about">About</Link>
      </div>
    </div>
  );
}
