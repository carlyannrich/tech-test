import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { StyledResultBox, StyledBox } from './ResultBox.style';

const ResultBox = ({
  labelText, buttonText, value, onClick,
}) => (
  <section>
    <StyledResultBox>
      <StyledBox>
        <form>
          <Typography
            component="h2"
            type="text"
          >
            {labelText}
          </Typography>
          <TextField
            className="text-field"
            id="outlined-basic result-box"
            variant="outlined"
            value={value}
            onFocus={(event) => {
              event.target.select();
            }}
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
    </StyledResultBox>
  </section>
);

ResultBox.propTypes = {
  labelText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ResultBox;
