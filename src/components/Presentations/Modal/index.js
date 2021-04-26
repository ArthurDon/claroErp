import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ children }) => (
  <div className="modal">
    <section className="content" style={{ maxWidth: '400px' }}>
      {children}
    </section>
  </div>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
