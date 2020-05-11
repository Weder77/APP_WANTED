
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';

import { style } from './style';
// icons
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AccountCircle from '@material-ui/icons/AccountCircle';


const RegisterPage = () => {
    const classes = style();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <div className={classes.boxTitle}>
                        <h1>PaymentApp</h1>
                    </div>
                    <Typography component="h1" variant="h5">
                        Inscription
          </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            type="mail"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            placeholder="yourmail@gmail.com"
                            id="email"
                            label="Adresse Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            type="password"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            placeholder="**********"
                            name="password"
                            label="Mot de passe"
                            id="password"
                            autoComplete="current-password"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockOutlinedIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            placeholder="**********"
                            name="confirm-password"
                            label="Répéter le mot de passe"
                            type="password"
                            id="confirm-password"
                            autoComplete="confirm-password"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockOutlinedIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />


                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            S'inscrire
            </Button>
                        <Grid container>

                            <Grid item>
                                <Link href="/login" variant="body2">
                                    {"Déjà inscrit ? Se connecter !"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}

export default RegisterPage;