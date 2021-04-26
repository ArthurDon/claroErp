import React from 'react';
import PropTypes from 'prop-types';

const FormRegisterContributors = ({ onSubmit, onChange, name, email }) => (
  <section>
    <header>
      <h4 style={{ textTransform: 'uppercase' }}>Cadastrar novo colaborador</h4>
      <br />
      <h2>
        Os colaboradores cadastrados terão acesso ao produto{' '}
        <strong>E-Gestor</strong> e poderão consultar e fazer alterações
      </h2>
    </header>
    <div className="_infos">
      <form onSubmit={onSubmit} className="frm-new-collaborator">
        <label htmlFor="name">Nome do colaborador</label>
        <input
          name="name"
          onChange={onChange}
          value={name}
          type="text"
          id="name"
          placeholder="Digite o nome do colaborador"
          autoComplete="off"
          required
        />
        <label htmlFor="email">E-mail do colaborador</label>
        <input
          name="email"
          value={email}
          onChange={onChange}
          type="email"
          id="email"
          placeholder="Digite o e-mail do colaborador"
          autoComplete="off"
          required
        />
        {/* <label htmlFor="profile">Perfil do colaborador</label>
                    <select value={profile} name="profile" id="profile" onChange={onChange} required>
                        <option value="">Seleciona o perfil</option>
                        <option value="colaborador">Colaborador</option>
                        <option value="admin">Administrador</option>
                    </select> */}
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  </section>
);

FormRegisterContributors.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  // profile: PropTypes.string.isRequired
};

export default FormRegisterContributors;
