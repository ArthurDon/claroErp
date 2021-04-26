import React from 'react';
import Loading from 'react-fullscreen-loading';
import PropTypes from 'prop-types';

const Loader = ({ display }) => (
  <Loading
    loading={display}
    background="rgba(0, 0, 0, 0.6)"
    loaderColor="red"
  />
);

Loader.propTypes = {
  display: PropTypes.bool.isRequired,
};

export default Loader;
