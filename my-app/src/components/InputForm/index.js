import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { StyledInputForm, StyledBox } from './InputForm.style';

const InputForm = ({ labelText, inputPlaceholder, buttonText }) => {
  const [input, setInput] = useState('');

  const handleOnClick = () => {
    console.log('onClick', input);
  };

  useEffect(() => {
    console.log('useEffect', input);
  }, [input]);

  return (
    <section>
      <StyledInputForm>
        <StyledBox>
          <form>
            <Typography
              component="h2"
              type="text"
              htmlFor="result-box"
            >
              {labelText}
            </Typography>
            <TextField
              className="text-field"
              id="outlined-basic result-box"
              variant="outlined"
              fullWidth
              placeholder={inputPlaceholder}
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <Button
              size="large"
              color="primary"
              variant="contained"
              type="submit"
              onClick={() => handleOnClick()}
            >
              {buttonText}
            </Button>
          </form>
        </StyledBox>
      </StyledInputForm>
    </section>
  );
};

InputForm.propTypes = {
  labelText: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default InputForm;
