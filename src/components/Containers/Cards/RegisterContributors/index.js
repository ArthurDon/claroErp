import React from 'react';
import PropTypes from 'prop-types';
import CardTemplate from '../Template';
import ModalRegisterContributors from '../../Modal/RegisterContributors';

const CardRegisterContributors = ({ workPlaceName }) => (
  <CardTemplate status="register">
    <div className="new-register">
      <ModalRegisterContributors />
      <p>
        Cadastrar funcionários e colaboradores da sua empresa para que eles
        possam ter acesso ao {workPlaceName}
      </p>
    </div>
  </CardTemplate>
);

CardRegisterContributors.propTypes = {
  workPlaceName: PropTypes.string.isRequired,
};

export default CardRegisterContributors;
