import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  border: {
    border: 'dotted',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    background: '#420420',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'grey',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
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
    color: '#696969',
  },
  title: {
    padding: '0 16px',
    color: '#696969',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardAction: {
    display: 'table-row',
    textAlign: 'initial',
  },
});
