import React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { style } from './style';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const classes = style();

    return (
        <Container maxWidth="lg" className={classes.mainContainer}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={[classes.paper, classes.welcomeText]}>
                        <div>Bienvenue sur DofusWanted !</div>
                        <div className={classes.subtextWelcome}>Selectionnez la zone de l'avis souhaité</div>
                    </Paper>
                </Grid>
                <Grid item xs={6} className={classes.test}>
                    <Link to="/astrub" underline="none">
                        <Paper className={[classes.paper, classes.areaContainer, classes.astrub]}>
                            <div>Astrub</div>
                            <div>[5,-19]</div>
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link underline="none">
                        <Paper className={[classes.paper, classes.areaContainer, classes.amakna]}>
                            <div>Amakna</div>
                            <div><Link to="/amakna1" underline="none" style={{ 'color': 'white' }}>[4,4]</Link> ou <Link to="/amakna2" underline="none" style={{ 'color': 'white' }}>[5,-6]</Link></div>
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link to="/bonta" underline="none">
                        <Paper className={[classes.paper, classes.areaContainer, classes.bonta]}>
                            <div>Bonta</div>
                            <div>[-33, -56]</div>
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link to="/brakmar" underline="none">
                        <Paper className={[classes.paper, classes.areaContainer, classes.brakmar]}>
                            <div>Brâkmar</div>
                            <div>[-26, 36]</div>
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link to="/dimensions" underline="none">
                        <Paper className={[classes.paper, classes.areaContainer, classes.dim]}>
                            Dimensions divines
                            <div>
                                <Link to="/enutrosor" underline="none" style={{ 'color': 'white' }}>Enutrosor [-1,-1]</Link>
                                , 
                                <Link to="/srambad" underline="none" style={{ 'color': 'white' }}> Srambad [2,2]</Link>
                                , 
                                <Link to="/xelorium" underline="none" style={{ 'color': 'white' }}> Xelorium [1,6]</Link>
                            </div>
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link to="/sufokia" underline="none">
                        <Paper className={[classes.paper, classes.areaContainer, classes.sufokia]}>
                            <div>Sufokia</div>
                            <div>[23,24]</div>
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link to="/frigost" underline="none">
                        <Paper className={[classes.paper, classes.areaContainer, classes.frigost]}>
                            <div>Frigost</div>
                            <div><Link to="/frigost1" underline="none" style={{ 'color': 'white' }}>[-76,-42]</Link> ou <Link to="/frigost2" underline="none" style={{ 'color': 'white' }}>[-75,-74]</Link></div>
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link to="/saharach" underline="none">
                        <Paper className={[classes.paper, classes.areaContainer, classes.saharach]}>
                            <div>Saharach</div>
                            <div>[15,-57]</div>
                        </Paper>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
}

export default HomePage;