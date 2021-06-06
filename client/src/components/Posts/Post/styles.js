import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    border: 'solid',
  },
 
  fullHeightCard: {
    height: '100%',
  },
  
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'grey',
  },
  overlay2: {
    position: 'absolute',
    top: '40px',
    right: '20px',
    color: 'grey',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
    color: '#010414',
  },
  title: {
    padding: '0 16px',
    color: '#010414',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    
  },
  cardAction: {
    display: 'table-row',
    textAlign: 'center',
    color: '#b1b6cc',
    
  },
});
