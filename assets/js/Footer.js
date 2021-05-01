import Typography from "@material-ui/core/Typography";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import {makeStyles} from "@material-ui/core/styles";
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({

    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },

}));

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                Unlocky
            </Typography>

            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Bauchau Louis, Basnet Devashish, Beaufils Liam et Montalto Logan  <IconButton color="inherit" href="https://github.com/louisbau/Q2-Projet-Gestionaire-De-Compte"><GitHubIcon /></IconButton>
            </Typography>
            <Copyright/>
        </footer>
    );
}