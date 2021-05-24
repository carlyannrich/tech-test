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
  margin: '2% auto 5% auto',
});

export const StyledInputForm = styled.div`
h2 {
    font-size: 1.2rem;
    text-align: center;
    color: #000;
    margin: 2% 5% 1% 5%;
    font-weight: 400;
    padding: 4% 0;

     @media ${device.tablet} {
         font-size: 1rem;
         padding: 0;
    }

    @media ${device.laptop} {
        font-size: 2rem;
        padding: 0;
    }
}

.text-field {
    color: #000;
    margin: 2% 5%;
    width: 90%;
}

button {
    margin: 5% auto;
    display: flex;

    @media ${device.tablet} {
        margin: 2% auto;
    }

    @media ${device.laptop} {
        margin: 2% auto;
    }
}

`;
