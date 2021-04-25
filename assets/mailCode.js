import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper,
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


export default function Mail() {
    const classes = useStyles();
    const [addnom, setAddnom] = React.useState('');
    const [addmessage, setAddmessage] = React.useState('');

    const handleChangeNom = (e) => {

        setAddnom(e.target.value)
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
            <Typography component="h1" variant="h5">
                Contact Us
            </Typography>
            <form>
                <TextField
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
                <TextField
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
                    color="primary"
                    // className={classes.button}
                    onClick={(e) => handleSubmit(e)}
                    className={classes.submit}
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}
