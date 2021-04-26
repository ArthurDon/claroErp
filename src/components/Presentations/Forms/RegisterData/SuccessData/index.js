import React from 'react';
import PropTypes from 'prop-types';

const FormSuccessData = ({ displaySuccessMergeAccount, email, onClick }) => (
  <section>
    <header>
      <img src="assets/images/claro-logo.png" alt="Claro Logo" />
      <h1>
        <strong>Cadastro Concluído!</strong>
      </h1>
    </header>
    {!displaySuccessMergeAccount && (
      <>
        <div className="_infos">
          <p>
            Enviamos um e-mail de confirmação para: <strong>{email}</strong>
          </p>
          <p>
            Acesse seu e-mail e clique no link de confirmação para confirmar a
            sua conta!
          </p>
          <p>Caso não tenha recebido o e-mail, clique abaixo para reenviar</p>
        </div>
        <a href="/#" className="bt-register" onClick={onClick}>
          Reenviar E-mail de confirmação
        </a>
      </>
    )}
  </section>
);

FormSuccessData.propTypes = {
  displaySuccessMergeAccount: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FormSuccessData;
