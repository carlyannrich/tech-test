import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { StyledInputForm, StyledBox } from './InputForm.style';

const InputForm = ({ labelText, inputPlaceholder, buttonText }) => {
  const [input, setInput] = useState('');

  const handleOnClick = (url) => {
    const validation = /e/;
    console.log(validation.test(url));
  };

  // useEffect(() => {
  //   console.log('useEffect', input);
  // }, [input]);

  return (
    <section>
      <StyledInputForm>
        <StyledBox>
          <form onSubmit={() => handleOnClick(input)}>
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
              type="text"
              required
              // eslint-disable-next-line no-useless-escape
              inputProps={{ pattern: '^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$' }}
            />
            <Button
              size="large"
              color="primary"
              variant="contained"
              type="submit"
              onClick={() => handleOnClick(input)}
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
