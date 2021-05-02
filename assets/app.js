import React, {useContext} from "react";
import './styles/app.css';
import ReactDOM from "react-dom";
import SimpleMenu from "./js/menuBar.js";
import Test2 from "./js/listGame";
import TestContextProvider, {TestContext} from "./contexts/TestContext";
import ProfileContextProvider from "./contexts/ProfileContext";
import Footer from "./js/Footer";
import AppContextProvider from "./contexts/AppContext";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    login: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 60,
        width : '25%',
        padding: '0 30px',
    },
    login2: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(15),
    },
    foot : {
        backgroundColor: theme.palette.background.paper,
    }
}));


export default function List() {
    const classes = useStyles();
    return (
        <div className={classes.foot}>
            {
                document.getElementById("role").value ?

                        <AppContextProvider>
                            <Test2 />
                        </AppContextProvider>

                    : <div className={classes.login2} align="center"><Button className={classes.login} href={"/"} >Login</Button></div>
            }
            <Footer />
        </div>
    )

}

ReactDOM.render(
    <div>
        <ProfileContextProvider>
            <SimpleMenu/>
        </ProfileContextProvider>
        <TestContextProvider>
            <List />
        </TestContextProvider>
    </div>,
    document.getElementById('root')
);
