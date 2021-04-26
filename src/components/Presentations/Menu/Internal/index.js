import React from 'react';
import { validateToken } from '../../../../utils';
import { ButtonLogout } from '../../../Containers';

export default () => (
  <header className="menu">
    <div className="center-content">
      <div className="_logo">
        <a href="/#">
          <img src="assets/images/claro-logo.png" alt="Claro Logo" />
        </a>
      </div>
      <nav className="action-user">
        <span className="name admin">{validateToken('email')}</span>
        <ul className="opt-user">
          <li>
            <ButtonLogout />
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
