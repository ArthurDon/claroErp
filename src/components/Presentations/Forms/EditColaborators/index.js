import React from 'react';
import PropTypes from 'prop-types';

const STYLE1 = {
  textTransform: 'uppercase',
  fontSize: 16,
  fontWeight: 'bold',
};

const STYLE2 = {
  marginTop: 15,
};

const STYLE3 = {
  borderRadius: 5,
  color: 'white',
  display: 'inline-block',
  backgroundColor: 'hsla(357, 77%, 52%, 1)',
  fontSize: '.8rem',
  fontWeight: 500,
  padding: '10px 16px',
  textAlign: 'center',
  textDecoration: 'none',
  width: '100%',
  textTransform: 'uppercase',
};

const FormEditColaborators = ({ name, email, onClick }) => (
  <section>
    <header>
      <h1 style={STYLE1}>Redefinir senha deste colaborador</h1>
      <h2 style={STYLE2}>
        Iremos enviar uma mensagem de redefinição de senha para o colaborador{' '}
        <strong>{name}</strong> no e-mail: <strong>{email}</strong>
      </h2>
    </header>
    <div className="_infos">
      <button type="button" style={STYLE3} onClick={onClick}>
        Enviar Mensagem de Definição
      </button>
    </div>
  </section>
);

FormEditColaborators.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FormEditColaborators;
