import { makeStyles } from '@material-ui/core/styles';

export const style = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        fontSize: '17px',
    },
    mainContainer: {
        paddingTop: '0.5em',
        maxWidth: "lg",
    },
    welcomeText: {
        boxShadow: 'none',
        fontWeight: 'bold',
        fontSize: '20px',
    },
    subtextWelcome: {
        fontSize: '16px',
        fontWeight: '500',
    },
    areaContainer: {
        height: '140px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'center no-repeat',
        backgroundSize: 'cover',
        fontWeight: 'bold',
        color: "white",
        textShadow: '2px 2px 8px black',
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