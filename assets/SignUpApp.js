import React from "react";
import ReactDOM from "react-dom";
import './styles/app.css';

import SignUp from "./signUp";
import ProfileContextProvider from "./contexts/ProfileContext";

ReactDOM.render(
    <div>
        <ProfileContextProvider><SignUp/></ProfileContextProvider>
    </div>,
    document.getElementById('signUp')
);