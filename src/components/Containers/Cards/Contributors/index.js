/* eslint-disable import/no-useless-path-segments */
import React from 'react';
import PropTypes from 'prop-types';
import CardTemplate from '../Template';
import ModalRemoveContributors from '../../../Containers/Modal/RemoveContributors';
import ModalEditContributors from '../../Modal/EditColaborators';

const CardContributors = ({ name, email, code, phone, tittleContributors }) => {
  const status = tittleContributors === 'Administrador' ? 'admin' : '';
  const icon =
    tittleContributors === 'Administrador' ? 'fas fa-crown' : 'fas fa-id-badge';

  return (
    <CardTemplate status={status}>
      <div>
        <div className="category">
          <i className={icon} />
          <p>{tittleContributors}</p>
        </div>
        <div className="user-infos">
          <p className="name">{name}</p>
          <ul className="list-action-user">
            <li className="contact">
              <a
                href={`mailto:${email}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fas fa-envelope" />
              </a>
            </li>
            <li className="edit">
              <ModalEditContributors name={name} email={email} phone={phone} />
            </li>
            {tittleContributors !== 'Administrador' && (
              <li className="delete">
                <ModalRemoveContributors
                  code={code}
                  name={name}
                  email={email}
                />
              </li>
            )}
          </ul>
        </div>
      </div>
    </CardTemplate>
  );
};

CardContributors.defaultProps = {
  code: '',
  phone: '',
};

CardContributors.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  code: PropTypes.number,
  phone: PropTypes.string,
  tittleContributors: PropTypes.string.isRequired,
};

export default CardContributors;
