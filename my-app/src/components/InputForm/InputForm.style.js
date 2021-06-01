import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background,
    border: 'solid',
    borderWidth: '1px',
    borderRadius: '50px',
    color: '#000',
    padding: '1% 0 1% 0',
    width: '80%',
    margin: '2% auto',
  },
}));

export default styles;
