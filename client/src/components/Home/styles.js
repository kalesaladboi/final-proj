import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    padding: '40px',
    marginBottom: '1rem',
    display: 'flex',
    background: 'white',
    fontcolor: 'grey',
  },
  pagination: {
    borderRadius: 4,
    position: 'center',
    width: '100%',
    marginTop: '5rem',
    marginRight: '200px',
    display: 'inline-block',
    background: '#e73291',
    buttoncolor: '#420420',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
}));
