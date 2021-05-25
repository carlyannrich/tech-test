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
  margin: '3% auto',
});

export const StyledResultBox = styled.div`
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
        margin: 2% 5% 1% 5%;
    }

    @media ${device.laptop} {
        font-size: 1.5rem;
        padding: 0;
        margin: 1% 5% 0 5%;
    }
}

.text-field {
    color: #000;
    margin: 2% 15%;
    width: 70%;

    @media ${device.tablet} {
        margin: 2% 25%;
        width: 50%;
    }

    @media ${device.laptop} {
        margin: 2% 25%;
        width: 50%;
    }
}

button {
    margin: 5% auto;
    display: flex;

    @media ${device.tablet} {
        margin: 2% auto;
    }

    @media ${device.laptop} {
        margin: 1% auto;
    }
}

`;
