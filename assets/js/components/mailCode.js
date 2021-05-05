import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, {useContext} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";
import Image from '../../images/contact_us.jpg';
import Link from "@material-ui/core/Link";
import {lightBlue} from "@material-ui/core/colors";
import {TestContext} from "../contexts/TestContext";
import Footer from "./Footer";

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
        height:'90vh',
        display: 'flex',
        color: 'lightBlue',
        flexDirection: 'column',
        alignItems: 'center',
        justify: 'center',
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    avatar: {
        margin: theme.spacing(7),
        backgroundColor: 'lightBlue',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(6),
    },

    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    contact: {
        color: 'lightBlue',
    }
}));


export default function Mail() {
    const classes = useStyles();
    const [addnom, setAddnom] = React.useState('');
    const [addmessage, setAddmessage] = React.useState('');

    const handleChangeNom = (e) => {
        setAddnom(e.target.value);
    }
    const handleChangeMessage = (e) => {
        setAddmessage(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(addnom, addmessage)
    }

    return (
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography className={classes.contact} component="h1" variant="h5">
                        Contact Us
            </Typography>
            <form>
                <TextField className={classes.form}
                    variant="outlined"
                    id="email"
                    type="email"
                    label="Email"
                    placeholder="Email"
                    margin="normal"
                    required
                    fullWidth
                    onChange={(e) => handleChangeNom(e)}
                />
                <TextField className={classes.form}
                    id="textarea"
                    label="Comments"
                    placeholder="Your message"
                    multiline
                    required
                    fullWidth
                    onChange={(e) => handleChangeMessage(e)}
                    margin="normal"

                />
                <Button
                    variant="contained"
                    background-color="lightblue"
                    // className={classes.button}
                    onClick={(e) => handleSubmit(e)}
                    className={classes.submit}
                >
                    Submit
                </Button>
            </form>
            <Footer />
        </div>
    )
}
