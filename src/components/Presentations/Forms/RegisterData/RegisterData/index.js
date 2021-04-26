import React from 'react';
import NumberFormat from 'react-number-format';
import PasswordMask from 'react-password-mask';
import PropTypes from 'prop-types';
import { maskCNPJ } from '../../../../../utils';

const FormRegisterData = ({
  cnpj,
  email,
  password,
  confirmPassword,
  onSubmit,
  onChange,
}) => (
  <section>
    <header>
      <img src="assets/images/claro-logo.png" alt="Claro Logo" />
      <h1>Para finalizar seu cadastro, digite os dados abaixo</h1>
    </header>
    <form className="frm-login" onSubmit={onSubmit}>
      <label htmlFor="cnpj">CNPJ da sua empresa</label>
      <NumberFormat
        type="text"
        name="cnpj"
        id="cnpj"
        value={cnpj}
        onChange={onChange}
        format={maskCNPJ}
        placeholder="CNPJ da sua empresa"
        required
      />
      <label htmlFor="email">
        Digite seu e-mail (será o seu login de acesso)
      </label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={onChange}
        placeholder="Seu e-mail"
        autoComplete="off"
        required
      />
      <label htmlFor="pass">Escolha uma senha</label>
      <PasswordMask
        name="password"
        type="password"
        id="pass"
        placeholder="Sua senha"
        value={password}
        onChange={onChange}
        showButtonContent="Exibir"
        hideButtonContent="Ocultar"
        required
      />
      <label htmlFor="pass2">Digite a senha novamente</label>
      <PasswordMask
        name="confirmPassword"
        type="password"
        id="confirmPassword"
        placeholder="Digite a senha novamente"
        value={confirmPassword}
        onChange={onChange}
        showButtonContent="Exibir"
        hideButtonContent="Ocultar"
        required
      />
      <input type="submit" value="Finalizar Cadastro" />
    </form>
  </section>
);

FormRegisterData.propTypes = {
  cnpj: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormRegisterData;
