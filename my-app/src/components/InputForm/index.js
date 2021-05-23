import React from 'react';
import PropTypes from 'prop-types';

import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const StyledBox = styled(Box)({
  background: '#fff',
  border: 'solid',
  borderWidth: '1px',
  borderRadius: '50px',
  color: '#000',
  padding: '1% 0 1% 0',
  width: '80%',
  margin: '2% auto',
});

const StyledTypography = styled(Typography)({
  color: '#000',
  margin: '2% 5% 1% 5%',
  fontSize: '1.5rem',
  fontWeight: '400',
});

const StyledTextField = styled(TextField)({
  color: '#000',
  margin: '2% 5%',
  width: '90%',
});

const StyledButton = styled(Button)({
  margin: '2% auto',
  display: 'flex',
});

const InputForm = ({ labelText, inputPlaceholder, buttonText }) => (
  <section>
    <StyledBox>
      <form>
        <StyledTypography component="h2" type="text" htmlFor="result-box">
          {labelText}
        </StyledTypography>
        <StyledTextField id="outlined-basic result-box" variant="outlined" fullWidth placeholder={inputPlaceholder} />
        <StyledButton size="large" color="primary" variant="contained" type="submit" onClick={() => { alert('clicked'); }}>{buttonText}</StyledButton>
      </form>
    </StyledBox>
  </section>
);

InputForm.propTypes = {
  labelText: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default InputForm;
