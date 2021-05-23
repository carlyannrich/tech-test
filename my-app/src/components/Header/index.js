import React from 'react';
import PropTypes from 'prop-types';

import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const StyledBox = styled(Box)({
  margin: '2% auto',
  width: '100%',
});

const StyledTypography = styled(Typography)({
  color: '#000',
  margin: '2% auto',
  float: 'right',
  padding: '35px 10% 0 0',
});

const Header = ({ imgSrc, altText, title }) => (
  <header>
    <StyledBox>
      <img
        src={imgSrc}
        alt={altText}
      />
      <StyledTypography component="h1">{title}</StyledTypography>
    </StyledBox>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default Header;
