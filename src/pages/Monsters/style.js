import { makeStyles } from '@material-ui/core/styles';

export const style = makeStyles(theme => ({
    box: {
        height: 'calc( 100vh - 64px )',
    },
    boxMonsters: {
        width: '100%',
    },
    parent: {
        width: '100%',
        textAlign: 'center',
    },
    flex: {
        display: 'flex',
        flexDirection: 'column',
    },
    localisation: {
        marginBottom: '2%',
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 'calc( 100vh - 64px )',
    },
    description: {
        marginBottom: 50,
    },
    astuce: {

    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    bold: {
        fontWeight: 'bold'
    },
    level: {
        fontStyle: 'italic',
    },
    picto: {
        width: 22,
        marginRight: 5,
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
    },
    carac: {
        display: 'block',
    },
    sorts: {
        marginBottom: 30,
    },
    number: {
        marginRight: 10,
    },
    title: {
        textAlign: 'center',
    }
}));