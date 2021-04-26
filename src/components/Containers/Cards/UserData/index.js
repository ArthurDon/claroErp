import React from 'react';
import PropTypes from 'prop-types';
import CardTemplate from '../Template';
import ModalRecoveryPassword from '../../Modal/RecoveryPassword';

const nameStyles = {
  fontSize: '1rem',
  fontWeight: 500,
};

const emailStyles = {
  fontWeight: 300,
};

const phoneStyles = {
  fontWeight: 300,
};

const CardUserData = ({ userName, email, phone }) => (
  <CardTemplate>
    <div className="plan">
      <p style={nameStyles}>{userName}</p>
      <p style={emailStyles}>{email}</p>
      <p style={phoneStyles}>{phone}</p>
    </div>
    <ModalRecoveryPassword flowRecoveryPassword />
  </CardTemplate>
);

CardUserData.propTypes = {
  userName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default CardUserData;
