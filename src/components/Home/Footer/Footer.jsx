/**
 * Created by xmityaz on 22.04.16.
 */

import React, { PropTypes } from 'react';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../../constants/filters';
import styles from './Footer.css';

const propTypes = {
  filter: PropTypes.string,
  onClearCompleted: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired
};

const filters = [SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE];
const filterTitles = {
  [SHOW_ALL]: "All",
  [SHOW_COMPLETED]: "Completed",
  [SHOW_ACTIVE]: "Active",
}

function Footer({ filter, onClearCompleted, onFilterChange }) {
  return (
    <div className={styles.footer}>
      <div className={styles.filter}>
        {filters.map(item =>
          <div
            className={styles.filterItem + (item === filter ? ` ${styles.selected}` : '')}
            key={item}
            onClick={onFilterChange.bind(null, item)}
          >
            {filterTitles[item]}
          </div>
        )}
      </div>

      <button
        className={styles.clearCompleted}
        onClick={onClearCompleted}
      >
        Clear completed
      </button>
    </div>
  )
}

Footer.propTypes = propTypes;

export default Footer;
