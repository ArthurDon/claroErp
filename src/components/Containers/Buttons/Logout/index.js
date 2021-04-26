import React, { useState } from 'react';
import Loader from '../../../Presentations/Loader';
import { removeToken, validateToken } from '../../../../utils';

const ButtonLogout = () => {
  /**
   * Hooks
   */
  const [loader, setLoader] = useState(false);

  /**
   * Function Handle Click Button Logout
   * @param {object} event
   */
  const handleClickButtonLogout = (event) => {
    event.preventDefault();

    if (validateToken('token')) {
      setLoader(true);

      setTimeout(() => {
        removeToken();
      }, 3000);
    }
  };

  return (
    <div>
      <Loader display={loader} />
      <a
        onClick={(event) => handleClickButtonLogout(event)}
        href="/#"
        className="exit"
      >
        Sair
      </a>
    </div>
  );
};

export default ButtonLogout;
