import React from 'react';
import reactStringReplace from 'react-string-replace';
import PropTypes from 'prop-types';
import './styles.css';

const AlertsErrors = ({ message }) => (
  <div className="div-error">
    {reactStringReplace(message, /(https?:\/\/\S+)/g, (match, i) => (
      <a key={match + i} rel="noopener noreferrer" target="_blank" href={match}>
        aqui
      </a>
    ))}
  </div>
);

AlertsErrors.propTypes = {
  message: PropTypes.string.isRequired,
};

export default AlertsErrors;
