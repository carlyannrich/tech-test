/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import PropTypes from 'prop-types';

import { TextField, Button, Box } from '@material-ui/core';

import styles from './InputForm.style';

const InputForm = ({
  inputPlaceholder, buttonText, onSubmit, onChange, regexURL, label, helperText,
  props,
}) => {
  const classes = styles(props);
  return (
    <section>
      <Box className={classes.root}>
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
            className={classes.textField}
          />
          <Button
            size="large"
            color="primary"
            variant="contained"
            type="submit"
            className={classes.button}
          >
            {buttonText}
          </Button>
        </form>
      </Box>
    </section>
  );
};

InputForm.propTypes = {
  inputPlaceholder: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  regexURL: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  helperText: PropTypes.string.isRequired,
  props: PropTypes.string.isRequired,
};

export default InputForm;
