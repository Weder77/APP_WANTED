import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { style } from './style';
import Link from '@material-ui/core/Link'

const Menu = () => {
  const classes = style();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.Toolbar}>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link href="#">Dofus - Avis de recherche</Link>
          </Typography>
          <div className={classes.showAll}>
            <Link to="/allmonsters"><Button variant="contained" className={classes.showAllButton} >Tous les avis</Button></Link>
          </div>
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Rechercher"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Menu;
