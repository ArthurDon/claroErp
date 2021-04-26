import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../../components/Presentations/Menu/External';
import Footer from '../../components/Presentations/Footer/External';

const LayoutExternal = ({ children }) => (
  <>
    <Menu />
    {children}
    <Footer />
  </>
);

LayoutExternal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutExternal;
