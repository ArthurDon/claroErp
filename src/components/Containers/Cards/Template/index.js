import React from 'react';
import PropTypes from 'prop-types';

const CardTemplate = ({ status, children }) => (
  <div className={`_card ${status || ''}`}>{children}</div>
);

CardTemplate.defaultProps = {
  status: '',
};

CardTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  status: PropTypes.string,
};

export default CardTemplate;
