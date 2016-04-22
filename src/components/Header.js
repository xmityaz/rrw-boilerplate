/**
 * Created by xmityaz on 17.04.16.
 */

import React from 'react';
import { Link } from 'react-router';

export default function Header() {
  return (
    <div className="header">
      <div className="header__nav">
        <Link className="header-nav__tab" to="list">List</Link>
        <Link className="header-nav__tab" to="about">About</Link>
      </div>
    </div>
  );
}
