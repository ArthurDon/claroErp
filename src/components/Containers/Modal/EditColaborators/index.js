import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  FormEditColaborators,
  Loader,
  AlertsErrors,
  ModalTemplate,
} from '../../../Presentations';

import { sendForgotPassword } from '../../../../services';

class ModalEditContributors extends Component {
  /**
   * Constructor
   * @param {obj} props
   */
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
      displayFormEditContributors: false,
      loader: false,
      name: '',
      email: '',
      errorMessage: '',
      successMessage: '',
    };

    this.baseState = this.state;
  }

  /**
   * Component Did Mount
   */
  componentDidMount() {
    const { name, email } = this.props;
    if (name || email) {
      this.setState({
        name,
        email,
      });
    }
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
      displayFormEditContributors: true,
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
   * Function Handle Submit Form Send Email
   * @param {obj} event
   */
  async onClickButtonEditContributors(event) {
    event.preventDefault();

    const { email } = this.state;

    this.setState({ loader: true });

    const sendFormNameEmail = await sendForgotPassword(email);

    if (!sendFormNameEmail.status) {
      this.setState({ errorMessage: sendFormNameEmail.message, loader: false });
      return;
    }

    this.setState({
      loader: false,
      displayFormEditContributors: false,
      successMessage: `Mensagem enviada com sucesso para o e-mail: ${email}`,
    });
  }

  /**
   * Render Component
   */
  render() {
    const {
      displayModal,
      loader,
      displayFormEditContributors,
      name,
      email,
      errorMessage,
      successMessage,
    } = this.state;
    return (
      <>
        <a href="/#" onClick={(event) => this.onClickButtonModal(event, true)}>
          <i className="fas fa-pen-square" />
        </a>

        {displayModal !== false && (
          <ModalTemplate>
            <Loader display={loader} />

            {displayFormEditContributors !== false && (
              <FormEditColaborators
                name={name}
                email={email}
                onClick={(event) => this.onClickButtonEditContributors(event)}
              />
            )}

            {errorMessage !== '' && <AlertsErrors message={errorMessage} />}

            {successMessage !== '' && (
              <footer>
                <h3 style={{ marginBottom: 20 }}>{successMessage}</h3>
                <a
                  href="/#"
                  style={{ color: 'hsla(0, 0%, 20%, 1)', fontSize: '.8rem' }}
                  onClick={(event) => this.onClickRedirectPage(event)}
                >
                  Fechar
                </a>
              </footer>
            )}

            {successMessage === '' && (
              <a
                href="/#"
                style={{ color: 'hsla(0, 0%, 20%, 1)', fontSize: '.8rem' }}
                onClick={(event) => this.onClickButtonModal(event, false)}
              >
                Voltar
              </a>
            )}
          </ModalTemplate>
        )}
      </>
    );
  }
}

ModalEditContributors.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default ModalEditContributors;
