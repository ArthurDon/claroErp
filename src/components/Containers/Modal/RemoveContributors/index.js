import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  FormRemoveContributors,
  Loader,
  AlertsErrors,
  ModalTemplate,
} from '../../../Presentations';

import { deleteUser } from '../../../../services';

class ModalRemoveContributors extends Component {
  /**
   * Constructor
   * @param {obj} props
   */
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
      displayFormRemoveContributors: false,
      loader: false,
      name: '',
      email: '',
      code: '',
      errorMessage: '',
      successMessage: '',
    };

    this.baseState = this.state;
  }

  /**
   * Component Did Mount
   */
  componentDidMount() {
    const { name, email, code } = this.props;

    if (name && email && code) {
      this.setState({
        name,
        email,
        code,
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
      displayFormRemoveContributors: true,
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
  async onClickButtonRemoveContributors(event) {
    event.preventDefault();

    const { email, code } = this.state;

    this.setState({ loader: true });

    const sendFormName = await deleteUser(code.toString(), email);

    if (!sendFormName.status) {
      this.setState({ errorMessage: sendFormName.message, loader: false });
      return;
    }

    this.setState({
      loader: false,
      displayFormRemoveContributors: false,
      successMessage: 'Colaborador excluido com sucesso!',
    });
  }

  /**
   * Render Component
   */
  render() {
    const {
      displayModal,
      displayFormRemoveContributors,
      loader,
      name,
      errorMessage,
      successMessage,
    } = this.state;
    return (
      <>
        <a href="/#" onClick={(event) => this.onClickButtonModal(event, true)}>
          <i className="fas fa-window-close" />
        </a>

        {displayModal !== false && (
          <ModalTemplate>
            <Loader display={loader} />

            {displayFormRemoveContributors !== false && (
              <FormRemoveContributors
                name={name}
                onClick={(event) => this.onClickButtonRemoveContributors(event)}
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

ModalRemoveContributors.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  code: PropTypes.number.isRequired,
};

export default ModalRemoveContributors;
