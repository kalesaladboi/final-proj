import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    width: '100%',
    background: '#420420 !important',
    margin: '30px 0',
    border: '0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  heading: {
    color: '#420420',
    textDecoration: 'none',
    fontSize: '7em',
    fontWeight: 300,
  },
  logos: {
    marginLeft: '-20px',
    display: 'flex',
    flexDirection: 'row',
    width: '40%'

    
  },
  logo: {
    borderRadius: '40%',
  },
  Mlogo: {
    marginLeft: '20px',
    borderRadius: '40%',


  },
  toolbar: {
    backgroundcolor: '#420420',
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: 20,
      justifyContent: 'center',
    },
  },
  logout: {
    marginLeft: '20px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  brandContainer: {
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
