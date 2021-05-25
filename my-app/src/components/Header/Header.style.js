import styled from 'styled-components';

import device from '../../assets/device';

const StyledHeader = styled.header`
width: 100%;
background-color: white;
padding: 5% 0;

    @media ${device.tablet} {
        padding: 2% 0;
    }

    @media ${device.laptop} {
        padding: 0;
    }

img {
    position: absolute;
    width: 30%;
    padding: 2% 0 0 7%;


    @media ${device.tablet} {
        width: 20%;
        padding: 1% 0 0 7%;
    }

    @media ${device.laptop} {
        width: 15%;
        padding: 1% 0 0 10%;
    }
}

h1 {
    font-size: 1.3rem;
    padding: 3% 0 3% 45%;

    @media ${device.mobileM} {
        font-size: 1.7rem;
        padding: 3% 0 3% 45%;
    }

    @media ${device.tablet} {
        font-size: 2rem;
        padding: 5% 0 3% 35%;
    }

    @media ${device.laptop} {
        font-size: 2.5rem;
        padding: 5% 0 3% 52%;
    }
}

`;

export default StyledHeader;
