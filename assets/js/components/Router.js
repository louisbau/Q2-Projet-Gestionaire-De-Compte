import {makeStyles} from '@material-ui/core';
import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import SimpleMenu from "./menuBar";
import Mail from "./mailCode";
import SignUp from "./signUp";
import Test2 from "./listGame";
import NotFound from "./Notfound";
import ButtonAppBar from "./AppBarMail";
import ProfileContextProvider from "../contexts/ProfileContext";
import TestContextProvider from "../contexts/TestContext";
import List from "../../app";

const Mail = () => (
    <div>
        <ButtonAppBar />
        <Mail />
    </div>
);

const SignUp = () => (
    <ProfileContextProvider><SignUp/></ProfileContextProvider>
);
const Test2 = () => (
    <div />
);

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
}));

function Router() {
    const classes = useStyles();
    return (
        <BrowserRouter>
            <div className={classes.offset}/>
            <Switch>
                <Redirect exact from="/" to="/index"/>
                <Route exact path="/contact" component={Mail}/>
                <Route exact path="/signUp" component={SignUp}/>
                <Route exact path="/index" component={Test2}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;