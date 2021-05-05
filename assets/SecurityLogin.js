import React from "react";
import './styles/app.css';
import ReactDOM from "react-dom";
import LoginSecurity from "./js/components/SecurityLoginCode";





ReactDOM.render(
    <div>
        <LoginSecurity />
    </div>,
    document.getElementById('login')
);
