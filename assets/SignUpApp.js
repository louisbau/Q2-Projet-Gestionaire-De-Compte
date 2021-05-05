import React from "react";
import ReactDOM from "react-dom";
import './styles/app.css';

import SignUp from "./js/components/signUp";
import ProfileContextProvider from "./js/contexts/ProfileContext";

ReactDOM.render(
    <div>
        <ProfileContextProvider><SignUp/></ProfileContextProvider>
    </div>,
    document.getElementById('signUp')
);