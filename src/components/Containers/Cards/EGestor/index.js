import React from 'react';
import PropTypes from 'prop-types';
import CardTemplate from '../Template';

const CardEGestor = ({ namePlan, onClickButtonCard }) => (
  <CardTemplate>
    <div className="image">
      <img src="assets/images/logo-egestor.png" alt="" />
    </div>
    <div className="plan">
      <span>MEU PLANO</span>
      <p>{namePlan}</p>
    </div>
    <a href="/#" onClick={onClickButtonCard} className="bt-plan">
      Acessar
    </a>
  </CardTemplate>
);

CardEGestor.propTypes = {
  namePlan: PropTypes.string.isRequired,
  onClickButtonCard: PropTypes.func.isRequired,
};

export default CardEGestor;
