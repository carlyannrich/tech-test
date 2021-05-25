import React from 'react';
import PropTypes from 'prop-types';

import { TextField, Button } from '@material-ui/core';
import { StyledInputForm, StyledBox } from './InputForm.style';

const InputForm = ({
  inputPlaceholder, buttonText, onSubmit, onChange, regexURL, onClick,
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
            label="Enter Long URL here"
            helperText="Please use University URLs with the structure - ' jiscuniversity.com '."
          />
          <Button
            size="large"
            color="primary"
            variant="contained"
            type="submit"
            onClick={onClick}
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
  onClick: PropTypes.func.isRequired,
};

export default InputForm;
