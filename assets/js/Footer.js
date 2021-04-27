import Typography from "@material-ui/core/Typography";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import {makeStyles} from "@material-ui/core/styles";

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
            <nav role="navigation">
                <ul className="nav justify-content-center">
                    <li className="nav-item"><a className="nav-link" href="https://github.com/louisbau/Q2-Projet-Gestionaire-De-Compte"
                                                title="Github"><i className="fab fa-github"></i><span
                        className="menu-title sr-only">Github</span></a>
                    </li>
                </ul>
            </nav>
            <Typography variant="h6" align="center" gutterBottom>
                Unlocky
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Bauchau Louis, Basnet Devashish, Beaufils Liam et Montalto Logan
            </Typography>
            <Copyright/>
        </footer>
    );
}