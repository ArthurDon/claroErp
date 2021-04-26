import React, { Component } from 'react';

import {
  FormRegisterContributors,
  Loader,
  AlertsErrors,
  ModalTemplate,
} from '../../../Presentations';

import { validatorEmail } from '../../../../utils';

import { sendUser } from '../../../../services';

class ModalRegisterContributors extends Component {
  /**
   * Constructor
   * @param {obj} props
   */
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
      displayFormRegisterContributors: false,
      loader: false,
      email: '',
      name: '',
      profile: '',
      errorMessage: '',
      successMessage: '',
    };

    this.baseState = this.state;
  }

  /**
   * Function On Click Button Modal
   */
  onClickButtonModal(event, status) {
    event.preventDefault();

    if (!status) {
      this.setState(this.baseState);
      return;
    }

    this.setState({
      displayModal: true,
      displayFormRegisterContributors: true,
    });
  }

  /**
   * Function On Click Redirect Page
   * @param {obj} event
   */
  onClickRedirectPage(event) {
    event.preventDefault();
    window.location.href = '/dashboard?tabList=1';
  }

  /**
   * Function Handle Change Form Send Email
   * @param {obj} event
   */
  handleChangeFormRegisterContributors(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  /**
   * Function Handle Submit Form Send Email
   * @param {obj} event
   */
  async handleSubmitFormRegisterContributors(event) {
    event.preventDefault();

    const { email, name } = this.state;

    const validator = validatorEmail(email);

    if (!validator.status) {
      this.setState({ errorMessage: validator.message });
      return;
    }

    this.setState({ loader: true });

    const sendFormEmailName = await sendUser(name, validator.email);

    if (!sendFormEmailName.status) {
      this.setState({ errorMessage: sendFormEmailName.message, loader: false });
      return;
    }

    this.setState({
      loader: false,
      displayFormRegisterContributors: false,
      successMessage: 'Colaborador cadastrado com sucesso!',
    });
  }

  /**
   * Render Component
   */
  render() {
    const {
      displayModal,
      name,
      email,
      profile,
      loader,
      displayFormRegisterContributors,
      errorMessage,
      successMessage,
    } = this.state;
    return (
      <>
        <a onClick={(event) => this.onClickButtonModal(event, true)} href="/#">
          <i className="fas fa-plus-circle" />
        </a>
        {displayModal !== false && (
          <ModalTemplate>
            <Loader display={loader} />

            {displayFormRegisterContributors !== false && (
              <FormRegisterContributors
                name={name}
                email={email}
                profile={profile}
                onChange={(event) =>
                  this.handleChangeFormRegisterContributors(event)
                }
                onSubmit={(event) =>
                  this.handleSubmitFormRegisterContributors(event)
                }
              />
            )}

            {errorMessage !== '' && <AlertsErrors message={errorMessage} />}

            {successMessage !== '' && (
              <footer>
                <h4>{successMessage}</h4>
                <a
                  href="/#"
                  style={{ color: 'hsla(0, 0%, 20%, 1)', fontSize: '.8rem' }}
                  onClick={(event) => this.onClickRedirectPage(event)}
                >
                  Voltar
                </a>
              </footer>
            )}

            {successMessage === '' && (
              <footer>
                <a
                  href="/#"
                  style={{ color: 'hsla(0, 0%, 20%, 1)', fontSize: '.8rem' }}
                  onClick={(event) => this.onClickButtonModal(event, false)}
                >
                  Voltar
                </a>
              </footer>
            )}
          </ModalTemplate>
        )}
      </>
    );
  }
}

export default ModalRegisterContributors;
