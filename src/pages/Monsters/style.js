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
  localisation: {
    marginBottom: '2%',
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 600,
  },
  description : {
    marginBottom: '5%',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  bold: {
    fontWeight: 'bold'
  },
  picto: {
    width: '5%',
    marginRight: 10,
  },
  boxRes: {
    width: '100%',
  },
  column: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 24,
  },
  carac: {
    display: 'block'
  }
}));