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

const FormRemoveContributors = ({ name, onClick }) => (
  <section>
    <header>
      <h1 style={STYLE1}>Excluir colaborador</h1>
      <h2 style={STYLE2}>
        Tem certeza que deseja excluir o colaborador <strong>{name}</strong> ?
      </h2>
    </header>
    <div className="_infos">
      <button type="button" style={STYLE3} onClick={onClick}>
        Excluir Colaborador
      </button>
    </div>
  </section>
);

FormRemoveContributors.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FormRemoveContributors;
