import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SignUp from "./signUp";
import { useForm } from "react-hook-form";
import axios from "axios";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AddIcon from "@material-ui/icons/Add";


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
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
}));

export default function SignIn() {
    const classes = useStyles();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data => {
        console.log(data.password);
        console.log(data.email);
        let a = 'http://127.0.0.1:8000/email/'+data.email+'/password/'+data.password;
        console.log(a);
        axios.get(a).then(r => console.log(r))
    });


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("email")} placeholder="Adresse email" />
                    <input {...register("password")} placeholder="Password" />
                    <input type="submit" />
                </form>
            </div>
            <Box mt={8}>
                <Copyright/>
            </Box>
        </Container>

    );
}
/*
<Grid item xs={6} className={classes.game}>
    <List
        component="nav"
        aria-label="nested-list-subheader"
        subheader={
            <ListSubheader component="div" id="nested-list-subheader">
                Liste de Jeux
            </ListSubheader>
        }
    >
        {list}

    </List>
</Grid>
<Grid item xs={6} className={classes.compte}>
    <List
        component="nav"
        aria-label="nested-list-subheader"
        subheader={
            <ListSubheader component="div" id="nested-list-subheader">
                Liste de Compte
                <IconButton edge="end" aria-label="edit">
                    <EditIcon />
                </IconButton>
            </ListSubheader>
        }
    >
        {context.test.map((jeu, index) => (
                (selectedIndex) === jeu.idGame && <Accordion key={index}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>{jeu.username_account}</Typography>
                        <FormControlLabel
                            aria-label="Acknowledge"
                            onClick={(event) => event.stopPropagation()}
                            label={jeu.username_account}
                            control={<Checkbox />}
                        />
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Username : {jeu.username_account}<br/>
                            Password : {jeu.password_account}<br/>
                            Description : {jeu.description}<br/>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            )
        )}
        <Accordion>
            <AccordionSummary
                expandIcon={<AddIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.heading}>Ajouter un compte</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <form noValidate autoComplete="off">
                    <TextField id="addUsername" label="Add username" />
                    <TextField id="addPassword" label="Add password" />
                    <TextField id="addDescription" label="Add description" />
                    <Button type="submit" color="primary">ADD</Button>
                </form>
            </AccordionDetails>
        </Accordion>
    </List>
</Grid>*/