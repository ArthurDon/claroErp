/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import queryString from 'query-string';

import {
  FormSendPhone,
  FormRegisterData,
  FormSuccessData,
  FormValidatePincode,
  Loader,
  AlertsErrors,
  ModalTemplate,
} from '../../../Presentations';

import {
  validatorPhoneNumber,
  validatorPincode,
  validatorEmail,
  validatorPassword,
  validatorCNPJ,
  validatorIdenticalPassword,
} from '../../../../utils';

import {
  sendPincode,
  validatePincode,
  authorization,
  verifyCustomToken,
  sendMergeAccount,
  getMergeAccount,
} from '../../../../services';

export default class ModalRegisterData extends Component {
  /**
   * Constructor
   * @param {obj} props
   */
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
      displayFormSendPhone: false,
      displayFormValidatePincode: false,
      displayFormSuccessData: false,
      displayFormRegisterData: false,
      displaySuccessMergeAccount: false,
      loader: false,
      btnResendPincode: false,
      messageResendPincode: true,
      countResendPincode: 60,
      phone: '',
      email: '',
      password: '',
      cnpj: '',
      confirmPassword: '',
      errorMessage: '',
      pinCode: '',
      idToken: '',
      transactionId: '',
    };

    this.baseState = this.state;
  }

  /**
   * Component Did Mount
   */
  componentDidMount() {
    const params = queryString.parse(window.location.search);
    if (params.confirmToken) {
      this.getMergeAccount(params.confirmToken);
    }
  }

  /**
   * Function Get Merge Account
   * @param {json} token
   */
  async getMergeAccount(token) {
    const getMergeAccountResponse = await getMergeAccount(token);

    if (!getMergeAccountResponse.status) {
      this.setState({
        displayModal: true,
        errorMessage: getMergeAccountResponse.message,
        loader: false,
      });
      return;
    }

    this.setState({
      displayModal: true,
      displayFormSuccessData: true,
      displaySuccessMergeAccount: true,
    });
  }

  /**
   * Function On Click Button Modal
   * @param {obj} event
   * @param {bool} status
   */
  onClickButtonModal(event, status) {
    event.preventDefault();

    if (!status) {
      this.setState(this.baseState);
      return;
    }

    this.setState({
      displayModal: true,
      displayFormSendPhone: true,
    });
  }

  /**
   * Function On Click Button Change Number
   * @param {obj} event
   */
  onClickButtonChangeNumber(event) {
    event.preventDefault();

    this.setState({
      displayFormSendPhone: true,
      displayFormValidatePincode: false,
    });
  }

  /**
   * Function Handle Change Form Send Phone
   * @param {obj} event
   */
  handleChangeFormSendPhone(event) {
    this.setState({ phone: event.target.value, errorMessage: '' });
  }

  /**
   * Function Handle Submit Form Send Phone
   * @param {obj} event
   */
  async handleSubmitFormSendPhone(event) {
    event.preventDefault();

    const { phone } = this.state;

    const validator = validatorPhoneNumber(phone);

    if (!validator.status) {
      this.setState({ errorMessage: validator.message });
      return;
    }

    this.setState({ loader: true });

    const sendFormPhone = await sendPincode(validator.phone);

    if (!sendFormPhone.status) {
      this.setState({ errorMessage: sendFormPhone.message, loader: false });
      return;
    }

    this.showCountSendPincode();

    this.setState({
      loader: false,
      displayFormSendPhone: false,
      displayFormValidatePincode: true,
      transactionId: sendFormPhone.transactionId,
      phone: validator.phone,
    });
  }

  /**
   * Function Handle Change Form Validate Pincode
   * @param {obj} event
   */
  handleChangeFormValidatePincode(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorMessage: '',
    });
  }

  /**
   * Function Handle Submit Form Validate Pincode
   * @param {obj} event
   */
  async handleSubmitFormValidatePincode(event) {
    event.preventDefault();

    const { pinCode, transactionId } = this.state;

    const validator = validatorPincode(pinCode);

    if (!validator.status) {
      this.setState({ errorMessage: validator.message });
      return;
    }

    this.setState({ loader: true });

    const sendFormCode = await validatePincode(
      validator.pincode,
      transactionId
    );

    if (!sendFormCode.status) {
      this.setState({ errorMessage: sendFormCode.message, loader: false });
      return;
    }

    const sendAuthorize = await authorization(sendFormCode.fsAuthToken);

    if (!sendAuthorize.status) {
      this.setState({ errorMessage: sendAuthorize.message, loader: false });
      return;
    }

    const sendVerifyCustomToken = await verifyCustomToken(
      sendAuthorize.customToken
    );

    if (!sendVerifyCustomToken.status) {
      this.setState({ errorMessage: sendAuthorize.message, loader: false });
      return;
    }

    this.setState({
      displayFormValidatePincode: false,
      displayFormRegisterData: true,
      loader: false,
      idToken: sendVerifyCustomToken.idToken,
    });
  }

  /**
   * Function Handle Change Form Register Data
   * @param {obj} event
   */
  handleChangeFormRegisterData(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorMessage: '',
    });
  }

  /**
   * Functiom Handle Submit Form Register Data
   * @param {obj} event
   */
  async handleSubmitFormRegisterData(event) {
    event.preventDefault();

    const {
      email,
      phone,
      cnpj,
      password,
      confirmPassword,
      idToken,
    } = this.state;

    const validatorCnpj = validatorCNPJ(cnpj);

    if (!validatorCnpj.status) {
      this.setState({ errorMessage: validatorCnpj.message });
      return;
    }

    const validatorMail = validatorEmail(email);

    if (!validatorMail.status) {
      this.setState({ errorMessage: validatorMail.message });
      return;
    }

    const validatorIdenticalPass = validatorIdenticalPassword(
      password,
      confirmPassword
    );

    if (!validatorIdenticalPass.status) {
      this.setState({ errorMessage: validatorIdenticalPass.message });
      return;
    }

    const validatorPass = validatorPassword(password);

    if (!validatorPass.status) {
      this.setState({ errorMessage: validatorPass.message });
      return;
    }

    this.setState({ loader: true });

    const sendFormRegisterData = await sendMergeAccount(
      idToken,
      validatorIdenticalPass.password,
      validatorCnpj.cnpj,
      validatorMail.email,
      phone
    );

    if (!sendFormRegisterData.status) {
      this.setState({
        errorMessage: sendFormRegisterData.message,
        loader: false,
      });
      return;
    }

    this.setState({
      displayFormRegisterData: false,
      displayFormSuccessData: true,
      loader: false,
    });
  }

  /**
   * Function On Click Button Resend Email
   * @param {obj} event
   */
  onClickButtonResendEmail(event) {
    event.preventDefault();

    this.setState({
      displayFormRegisterData: true,
      displayFormSuccessData: false,
    });
  }

  /**
   * Function Show Count Send Pincode
   */
  showCountSendPincode() {
    const intervalId = setInterval(() => {
      // eslint-disable-next-line react/destructuring-assignment
      const count = this.state.countResendPincode - 1;
      if (count >= 1) {
        this.setState({
          countResendPincode: count,
          messageResendPincode: true,
          btnResendPincode: false,
        });
      } else {
        clearInterval(intervalId);
        this.setState({
          countResendPincode: 60,
          messageResendPincode: false,
          btnResendPincode: true,
        });
      }
    }, 1000);
  }

  /**
   * Handle Resend Pincode
   * @param {event} event
   */
  async handleResendPincode() {
    const { phone } = this.state;

    const response = await sendPincode(phone);

    if (!response.status) {
      this.setState({
        messageResendPincode: false,
        btnResendPincode: true,
        errorMessage: response.message,
      });
      return;
    }
    this.showCountSendPincode();

    this.setState({
      transactionId: response.transaction_id,
    });
  }

  /**
   * Render Component
   */
  render() {
    const {
      displayModal,
      loader,
      displayFormSendPhone,
      phone,
      email,
      displayFormValidatePincode,
      countResendPincode,
      pinCode,
      displayFormRegisterData,
      password,
      cnpj,
      btnResendPincode,
      messageResendPincode,
      confirmPassword,
      displayFormSuccessData,
      displaySuccessMergeAccount,
      errorMessage,
    } = this.state;
    return (
      <>
        <a
          onClick={(event) => this.onClickButtonModal(event, true)}
          href="/#"
          className="bt-register"
          style={{ color: 'red' }}
        >
          Criar Cadastro
        </a>
        {displayModal !== false && (
          <ModalTemplate>
            <Loader display={loader} />

            {displayFormSendPhone !== false && (
              <FormSendPhone
                displayFormSendPhone={displayFormSendPhone}
                phone={phone}
                onChange={(event) => this.handleChangeFormSendPhone(event)}
                onSubmit={(event) => this.handleSubmitFormSendPhone(event)}
              />
            )}

            {displayFormValidatePincode !== false && (
              <FormValidatePincode
                phone={phone}
                countResendPincode={countResendPincode}
                messageResendPincode={messageResendPincode}
                onClickResendPincode={(event) =>
                  this.handleResendPincode(event)
                }
                pinCode={pinCode}
                btnResendPincode={btnResendPincode}
                onClickButtonChangeNumber={(event) =>
                  this.onClickButtonChangeNumber(event)
                }
                onChange={(event) =>
                  this.handleChangeFormValidatePincode(event)
                }
                onSubmit={(event) =>
                  this.handleSubmitFormValidatePincode(event)
                }
              />
            )}

            {displayFormRegisterData !== false && (
              <FormRegisterData
                email={email}
                password={password}
                cnpj={cnpj}
                confirmPassword={confirmPassword}
                onChange={(event) => this.handleChangeFormRegisterData(event)}
                onSubmit={(event) => this.handleSubmitFormRegisterData(event)}
              />
            )}

            {displayFormSuccessData !== false && (
              <FormSuccessData
                displaySuccessMergeAccount={displaySuccessMergeAccount}
                onClick={(event) => this.onClickButtonResendEmail(event)}
                email={email}
              />
            )}
            {errorMessage !== '' && <AlertsErrors message={errorMessage} />}

            <a
              href="/#"
              className="go-back"
              onClick={(event) => this.onClickButtonModal(event, false)}
            >
              Voltar
            </a>
          </ModalTemplate>
        )}
      </>
    );
  }
}
