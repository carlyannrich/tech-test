import styled from 'styled-components';
import Box from '@material-ui/core/Box';

import device from '../../assets/device';

export const StyledBox = styled(Box)({
  background: '#fff',
  border: 'solid',
  borderWidth: '1px',
  borderRadius: '50px',
  color: '#000',
  padding: '1% 0 1% 0',
  width: '80%',
  margin: '2% auto',
});

export const StyledInputForm = styled.div`

.text-field {
    color: #000;
    margin: 15% 5% 5% 5%;
    width: 90%;

    @media ${device.tablet} {
        margin: 7% 5% 5% 5%;
    }

    @media ${device.laptop} {
        margin: 5% 5% 2% 5%;
    }
}

button {
    margin: 8% auto;
    display: flex;

    @media ${device.tablet} {
        margin: 2% auto;
    }

    @media ${device.laptop} {
        margin: 2% auto;
    }
}

`;
