import React, { useState } from 'react';

import {
  ModalRecoveryPassword,
  ModalRegisterData,
  ModalHelp,
} from '../../components/Containers';

import {
  Loader,
  FormLogin,
  AlertsErrors,
} from '../../components/Presentations';

import Footer from '../../components/Presentations/Footer/External';

import { validatorEmail, createToken } from '../../utils';
import { sendCheckPassword, verifyCustomToken } from '../../services';

const FORM_DATA = {
  email: '',
  password: '',
};

const Login = () => {
  /**
   * Hooks
   */
  const [formData, setFormData] = useState(FORM_DATA);
  const [errorMessage, setErrorMessage] = useState('');
  const [loader, setLoader] = useState(false);

  /**
   * Function Handle Change
   * @param {object} event
   */
  const handleChange = (event) => {
    setErrorMessage('');

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  /**
   * Function Handle Submit
   * @param {*} event
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    const validator = validatorEmail(formData.email);

    if (!validator.status) {
      setErrorMessage(validator.message);
      return;
    }

    setLoader(true);

    const sendCheckPasswordResponse = await sendCheckPassword(
      validator.email,
      formData.password
    );

    if (!sendCheckPasswordResponse.status) {
      setLoader(false);
      setErrorMessage(sendCheckPasswordResponse.message);
      return;
    }

    const sendVerifyCustomToken = await verifyCustomToken(
      sendCheckPasswordResponse.customToken
    );

    if (!sendVerifyCustomToken.status) {
      setLoader(false);
      setErrorMessage(sendVerifyCustomToken.message);
      return;
    }

    createToken(sendVerifyCustomToken.idToken, formData.email);

    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 1500);
  };

  return (
    <div className="str-container">
      <main
        style={{ display: 'flex', flexDirection: 'column', height: 'auto' }}
        className="page-login"
      >
        <Loader display={loader} />
        <div className="center-content">
          <section className="content">
            <header>
              <img src="assets/images/claro-logo.png" alt="Claro Logo" />
              <h4
                style={{
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  marginTop: 10,
                }}
              >
                Login de Acesso
              </h4>
              <h4 style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                Digite seu login e senha para continuar
              </h4>
            </header>
            <FormLogin
              email={formData.email}
              password={formData.password}
              onChange={(event) => handleChange(event)}
              onSubmit={(event) => handleSubmit(event)}
            />

            {errorMessage !== '' && <AlertsErrors message={errorMessage} />}

            <ModalRecoveryPassword flowRecoveryPassword={false} />

            <ModalRegisterData />
            <ModalHelp />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
