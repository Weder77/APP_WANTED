import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ContactsIcon from '@material-ui/icons/Contacts';
import SettingsIcon from '@material-ui/icons/Settings';
import ReceiptIcon from '@material-ui/icons/Receipt';
import CreateIcon from '@material-ui/icons/Create';
import TextField from '@material-ui/core/TextField';
import { style } from './style';

const Menu = ({ main }) => {
    const classes = style();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Dofus - Avis de recherche
                    </Typography>
                </Toolbar>
                <Toolbar>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Rechercher" variant="outlined" />
                    </form>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <Link className={classes.link} to='/account'>
                        <ListItem button key='comptes'>
                            <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
                            <ListItemText primary='Comptes' />
                        </ListItem>
                    </Link>
                    <Link className={classes.link} to='/transactions'>
                        <ListItem button key='transactions'>
                            <ListItemIcon><ReceiptIcon /></ListItemIcon>
                            <ListItemText primary='Transactions' />
                        </ListItem>
                    </Link>
                    <Link className={classes.link} to='/contacts'>
                        <ListItem button key='contacts'>
                            <ListItemIcon><ContactsIcon /></ListItemIcon>
                            <ListItemText primary='Contacts' />
                        </ListItem>
                    </Link>
                    <Link className={classes.link} to='/contracts'>
                        <ListItem button key='contracts'>
                            <ListItemIcon><CreateIcon /></ListItemIcon>
                            <ListItemText primary='Smart Contrats' />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <Link className={classes.link} to='/settings'>
                        <ListItem button key='settings'>
                            <ListItemIcon><SettingsIcon /></ListItemIcon>
                            <ListItemText primary='Paramètres' />
                        </ListItem>
                    </Link>
                    <Link className={classes.link} to='/logout'>
                        <ListItem button key='logout'>
                            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                            <ListItemText primary='Déconnexion' />
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar}>
                    {main}
                </div>
            </main>
        </div>
    );
}

export default Menu;
