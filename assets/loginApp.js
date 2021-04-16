import React from "react";
import ReactDOM from "react-dom";
import './styles/app.css';

import SignIn from "./loginCode";
import ProfileContextProvider from "./contexts/ProfileContext";
ReactDOM.render(
    <div>
        <ProfileContextProvider><SignIn /></ProfileContextProvider>
    </div>,
    document.getElementById('tes')
);