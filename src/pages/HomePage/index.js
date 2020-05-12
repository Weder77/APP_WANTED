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
                    <Paper className={[ classes.paper, classes.welcomeText ]}>Bienvenue sur DofusWanted !</Paper>
                </Grid>
                <Grid item xs={6} className={classes.test}>
                    <Link href="#" underline="none">
                        <Paper className={[classes.paper, classes.areaContainer, classes.astrub]}>
                            Astrub
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link href="#" underline="none">
                        <Paper className={[classes.paper, classes.areaContainer, classes.amakna]}>
                            Amakna
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link href="#" underline="none">
                        <Paper className={[classes.paper, classes.areaContainer, , classes.bonta]}>
                            Bonta
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link href="#" underline="none">
                        <Paper className={[classes.paper, classes.areaContainer, classes.brakmar]}>
                            Brâkmar
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
                            Sufokia
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link href="#" underline="none">
                        <Paper className={[classes.paper, classes.areaContainer, classes.frigost]}>
                            Frigost
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link href="#" underline="none">
                        <Paper className={[classes.paper, classes.areaContainer, classes.saharach]}>
                            Saharach
                        </Paper>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
}

export default HomePage;