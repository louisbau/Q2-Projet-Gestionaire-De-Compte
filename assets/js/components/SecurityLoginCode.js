import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Checkbox, FormControlLabel, Paper, useMediaQuery} from "@material-ui/core";
import {palette} from "@material-ui/system";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    root: {
        height: '100vh',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/user/gestionairecompte/likes)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
}));

export default function LoginSecurity() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );

    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Grid container component="main" className={classes.root}>

                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign In
                        </Typography>
                        <form method="post" className={classes.form} noValidate>
                            <TextField variant="outlined"
                                       margin="normal" fullWidth type="email" name="email" label="Email Address" id="inputEmail"
                                       autoComplete={document.getElementById('last_username').value} placeholder="Email address"
                                       required autoFocus/>
                            <TextField
                                variant="outlined"
                                margin="normal" type="password" fullWidth label="Password" name="password" id="inputPassword" placeholder="Password" required/>
                            <input type="hidden" id='token' name="_csrf_token"
                                   value={document.getElementById('token').value}
                            />
                            <FormControlLabel
                                control={<input type="checkbox" name="_remember_me" color='primary'/>}
                                label="Remember me"
                            />
                            <Button type="submit" fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}>
                                Sign in
                            </Button>
                            <Link to='/signUp' href={"signUp"} variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </ThemeProvider>



    )
}
