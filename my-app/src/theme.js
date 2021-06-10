import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    background: '#fffff',
  },
  typography: {
    h1: {
      fontSize: '1.3rem',
      padding: '3% 0 3% 45%',
      width: '50%',
      // @media ${ device.mobileM } {
      //     font - size: 1.7rem;
      //     padding: 3 % 0 3 % 45 %;
      //     width: 50 %;
      // }

      // @media ${ device.tablet } {
      //     font - size: 2rem;
      //     padding: 5 % 0 3 % 30 %;
      //     width: 60 %;
      // }

      // @media ${ device.laptop } {
      //     font - size: 2.5rem;
      //     padding: 5 % 0 3 % 37 %;
      //     width: 60 %;
      // }

      // @media ${ device.laptopL } {
      //     font - size: 2.5rem;
      //     padding: 5 % 0 3 % 52 %;
      //     width: 40 %;
      // }
    },
  },
});

export default theme;
