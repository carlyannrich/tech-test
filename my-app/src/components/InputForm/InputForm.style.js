import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.paper,
    border: 'solid',
    borderWidth: '1px',
    borderRadius: '50px',
    color: '#fff',
    width: '80%',
    margin: '2% auto',
    padding: theme.spacing(8, 0, 6),
  },

  button: {
    margin: '2% 40%',
  },

  textField: {
    width: '80%',
    margin: '2% 10%',
  },
}));

export default styles;
