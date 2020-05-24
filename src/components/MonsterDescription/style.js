import { makeStyles } from '@material-ui/core/styles';

export const style = makeStyles(theme => ({

    description: {
        marginTop: 25,
    },
    PWidth: {
        textAlign: "justify",
    },
    descriptionBox: {
        padding: "0 40px",
        height: 'fit-content',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    title: {
        textAlign: 'center',
    }
}));