import React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { style } from './style';

const HomePage = () => {
    const classes = style();

    return (
        <Container maxWidth="lg" className={classes.mainContainer}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={[ classes.paper, classes.welcomeText ]}>
                        <div>Bienvenue sur DofusWanted !</div>
                        <div className={classes.subtextWelcome}>Selectionnez la zone de l'avis souhaité</div>
                    </Paper>
                </Grid>
                <Grid item xs={6} className={classes.test}>
                    <Link href="#" underline="none">
                        <Paper className={[classes.paper, classes.areaContainer, classes.astrub]}>
                                <div>Astrub</div> 
                                <div>[5,-19]</div>
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link href="#" underline="none">
                        <Paper className={[classes.paper, classes.areaContainer, classes.amakna]}>
                            <div>Amakna</div>
                            <div>[5,-6] ou [4,4]</div>
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link href="#" underline="none">
                        <Paper className={[classes.paper, classes.areaContainer, classes.bonta]}>
                            <div>Bonta</div>
                            <div>[-33, -56]</div>
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link href="#" underline="none">
                        <Paper className={[classes.paper, classes.areaContainer, classes.brakmar]}>
                            <div>Brâkmar</div>
                            <div>[-26, 36]</div>
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link href="#" underline="none">
                        <Paper className={[classes.paper, classes.areaContainer, classes.dim]}>
                            Dimensions divines
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link href="#" underline="none">
                        <Paper className={[classes.paper, classes.areaContainer, classes.sufokia]}>
                            <div>Sufokia</div>
                            <div>[23,24]</div>
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link href="#" underline="none">
                        <Paper className={[classes.paper, classes.areaContainer, classes.frigost]}>
                            <div>Frigost</div>
                            <div>[-76,-42],  [-75,-74], [-68,-76]</div>
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link href="#" underline="none">
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