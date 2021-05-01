import React, {useContext} from "react";
import './styles/app.css';
import ReactDOM from "react-dom";
import SimpleMenu from "./js/menuBar.js";
import Test2 from "./js/listGame";
import TestContextProvider, {TestContext} from "./contexts/TestContext";
import ProfileContextProvider from "./contexts/ProfileContext";
import Footer from "./js/Footer";
import AppContextProvider from "./contexts/AppContext";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    compte: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(15),
    },
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 60,
        width : '25%',
        padding: '0 30px',

    },
}));

export default function Test() {
    const us = useContext(TestContext);
    const classes = useStyles();
    if (us.test === 'ROLE_USER' || us.test === 'ROLE_USER') {
        return <AppContextProvider><Test2/></AppContextProvider>
    }
    else {
        return <div className={classes.compte} align="center"><Button className={classes.root} href={"/"}>Login</Button></div>
    }
}


ReactDOM.render(
    <div>
        <TestContextProvider>
            <ProfileContextProvider>
                <SimpleMenu/>
            </ProfileContextProvider>
            <Test />
        </TestContextProvider>
        <Footer />
    </div>,
    document.getElementById('root')
);
