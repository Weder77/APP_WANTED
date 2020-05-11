import { makeStyles } from '@material-ui/core/styles';

export const style = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  boxTitle: {
    marginBottom: '10%',
  },
  image: {
    backgroundImage: 'url(https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324_960_720.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));