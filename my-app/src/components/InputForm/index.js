import React from 'react';
import PropTypes from 'prop-types';

import { TextField, Button } from '@material-ui/core';
import { StyledInputForm, StyledBox } from './InputForm.style';

const InputForm = ({
  inputPlaceholder, buttonText, onSubmit, onChange, regexURL, label, helperText,
}) => (
  <section>
    <StyledInputForm>
      <StyledBox>
        <form onSubmit={onSubmit}>
          <TextField
            className="text-field"
            id="outlined-helperText result-box"
            variant="outlined"
            fullWidth
            placeholder={inputPlaceholder}
            onChange={onChange}
            type="text"
            required
            inputProps={{ pattern: regexURL }}
            label={label}
            helperText={helperText}
          />
          <Button
            size="large"
            color="primary"
            variant="contained"
            type="submit"
          >
            {buttonText}
          </Button>
        </form>
      </StyledBox>
    </StyledInputForm>
  </section>
);

InputForm.propTypes = {
  inputPlaceholder: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  regexURL: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  helperText: PropTypes.string.isRequired,
};

export default InputForm;
