import { makeStyles } from '@material-ui/core/styles';

export const style = makeStyles(theme => ({
  boxMonsters: {
    width: '100%',
  },
  parent: {
    width: '100%',
    textAlign: 'center',
  },
  flex: {
    display: 'flex',
  },
  img: {
    height: '150px'
  },
  localisation: {
    marginBottom: '2%',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  level: {
    fontStyle: 'italic',
  },
  picto: {
    height: 19,
    margin: 5,
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
    fontSize: 22,
    height: 'fit-content',
  },
  carac: {
    display: 'block',
  },
  number: {
    marginRight: 10,
  },
  firstBox: {
    height: 'fit-content',
  },
  stats: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
}));