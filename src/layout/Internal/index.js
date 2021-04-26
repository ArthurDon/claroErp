import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../../components/Presentations/Menu/Internal';
import Footer from '../../components/Presentations/Footer/Internal';

const LayoutInternal = ({ children, displayFooter }) => (
  <>
    <Menu />
    {children}

    {displayFooter && <Footer />}
  </>
);

LayoutInternal.defaultProps = {
  displayFooter: false,
};

LayoutInternal.propTypes = {
  children: PropTypes.node.isRequired,
  displayFooter: PropTypes.bool,
};

export default LayoutInternal;
