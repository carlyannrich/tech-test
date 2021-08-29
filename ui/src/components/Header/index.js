import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import StyledHeader from './Header.style';

// COMPONENT
const Header = ({ imgSrc, altText, title }) => (
  <StyledHeader>
    <img
      src={imgSrc}
      alt={altText}
    />
    <Typography component="h1" variant="h3">{title}</Typography>
  </StyledHeader>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default Header;
