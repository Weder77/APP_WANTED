import { makeStyles } from '@material-ui/core/styles';
import { APP_COLORS } from '../../colors';


export const style = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    mainContainer: {
        paddingTop: '0.5em',
        maxWidth: "lg",
    },
    welcomeText: {
        boxShadow: 'none',
        fontWeight: '500',
        fontSize: '18px',
    },
    areaContainer: {
        height: '140px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'center no-repeat',
        backgroundSize: 'cover',
        fontWeight: 'bold',
        color: APP_COLORS.dark,
        textShadow: '1px 0 0 #fff, -1px 0 0 #fff, 0 1px 0 #fff, 0 -1px 0 #fff',
    },
    astrub: {
        backgroundImage: "linear-gradient(to right bottom,rgba(255, 243, 224, 0.6),rgba(255, 204, 128, 0.4)), url('./astrub.jpg')",
    },
    amakna: {
        backgroundImage: "linear-gradient(to right bottom,rgba(255, 243, 224, 0.4),rgba(255, 204, 128, 0.4)), url('./amakna.jpg')",
    },
    sufokia: {
        backgroundImage: "linear-gradient(to right bottom,rgba(187, 222, 251, 0.6),rgba(255, 204, 128, 0.4)), url('./sufokia.jpg')",
    },
    bonta: {
        backgroundImage: "linear-gradient(to right bottom,rgba(255, 243, 224, 0.6),rgba(255, 204, 128, 0.4)), url('./bonta.png')",
    },
    brakmar: {
        backgroundImage: "linear-gradient(to right bottom,rgba(125, 54, 54, 0.6),rgba(255, 204, 128, 0.4)), url('./brakmar.jpg')",
    },
    frigost: {
        backgroundImage: "linear-gradient(to right bottom,rgba(144, 202, 249, 0.6),rgba(255, 204, 128, 0.4)), url('./frigost.jpg')",
    },
    dim: {
        backgroundImage: "linear-gradient(to right bottom,rgba(255, 235, 59, 0),rgba(255, 204, 128, 0.4)), url('./dim.jpg')",
    },
    saharach: {
        backgroundImage: "linear-gradient(to right bottom,rgba(40, 10, 10, 0.4),rgba(255, 204, 128, 0.4)), url('./saharach.jpg')",
    }
}));