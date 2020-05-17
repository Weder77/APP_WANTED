import { makeStyles } from '@material-ui/core/styles';

export const style = makeStyles(theme => ({
  box: {
    marginTop: '6%',
  },
  boxMonsters: {
    width: '100%',
  },
  parent: {
    width: '100%',
    textAlign: 'center',
  },
  img: {
    width: '15%',
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 600,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  bold: {
    fontWeight: 'bold'
  }
}));