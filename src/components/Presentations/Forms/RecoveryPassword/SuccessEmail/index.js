import React from 'react';
import PropTypes from 'prop-types';

const FormSuccesslEmail = ({ email }) => (
  <>
    <header>
      <img src="assets/images/claro-logo.png" alt="Claro Logo" />
      <h1 className="sucess">
        <strong>Mensagem Enviada com Sucesso!</strong>
      </h1>
    </header>
    <div className="_infos">
      <p>
        Enviamos uma mensagem de redefinição de senha para o e-mail:{' '}
        <strong>{email}</strong>
      </p>
      <p>A mensagem contém todas as informações para a redefinição</p>
    </div>
  </>
);

FormSuccesslEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default FormSuccesslEmail;
