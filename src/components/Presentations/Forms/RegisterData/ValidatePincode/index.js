import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const FormValidatePincode = ({
  phone,
  pinCode,
  countResendPincode,
  messageResendPincode,
  onClickButtonChangeNumber,
  onSubmit,
  onChange,
  btnResendPincode,
  onClickResendPincode,
}) => (
  <>
    <header>
      <img src="assets/images/claro-logo.png" alt="Claro Logo" />
      <h1>Digite o código de acesso que enviamos via SMS para o número:</h1>
      <span className="phone-number">
        <p>+{phone}</p>
        <a href="/#" onClick={onClickButtonChangeNumber}>
          Alterar número
        </a>
      </span>
    </header>
    <form className="frm-login" onSubmit={onSubmit}>
      <label htmlFor="code">Digite o código de acesso</label>
      <NumberFormat
        value={pinCode}
        onChange={onChange}
        maxLength={6}
        type="text"
        name="pinCode"
        placeholder="Seu código de acesso"
        autoComplete="off"
        required
      />
      <input type="submit" value="Validar código de acesso" />
      {messageResendPincode && (
        <span className="time-count">
          <p>
            Você receberá o SMS em até :{' '}
            <strong>{countResendPincode} segundos</strong>
          </p>
        </span>
      )}
      {btnResendPincode && (
        <button
          style={{
            background: 'none',
            textDecoration: 'underline',
            marginTop: 10,
          }}
          onClick={onClickResendPincode}
          type="button"
        >
          Reenviar código
        </button>
      )}
    </form>
  </>
);

FormValidatePincode.propTypes = {
  phone: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  btnResendPincode: PropTypes.bool.isRequired,
  messageResendPincode: PropTypes.bool.isRequired,
  onClickResendPincode: PropTypes.func.isRequired,
  countResendPincode: PropTypes.number.isRequired,
  onClickButtonChangeNumber: PropTypes.func.isRequired,
  pinCode: PropTypes.string.isRequired,
};

export default FormValidatePincode;
