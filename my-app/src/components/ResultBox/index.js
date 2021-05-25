import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { StyledResultBox, StyledBox } from './ResultBox.style';

const ResultBox = ({
  labelText, buttonText, value,
}) => {
  const copyToClipboard = () => {
    // const [isCopied, setCopied] = React.useState(false);

    // function handleCopy(text) {
    //   if (typeof text === "string" || typeof text == "number") {
    //     // copy
    //   } else {
    //     // don't copy
    //     console.error(
    //       `Cannot copy typeof ${typeof text} to clipboard, must be a string or number.`
    //     );
    //   }
    // }
  };
  const onClickHandle = copyToClipboard();
  return (
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
            />
            <Button
              size="large"
              color="primary"
              variant="contained"
              type="submit"
              onClick={() => onClickHandle()}
            >
              {buttonText}
            </Button>
          </form>
        </StyledBox>
      </StyledResultBox>
    </section>
  );
};

ResultBox.propTypes = {
  labelText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default ResultBox;
