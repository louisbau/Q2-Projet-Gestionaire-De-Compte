import React from "react";
import ReactDOM from "react-dom";
import './styles/app.css';
import Mail from "./mailCode";
import ButtonAppBar from "./AppBarMail";

ReactDOM.render(
    <div>
        <ButtonAppBar />
        <Mail />
    </div>,
    document.getElementById('mail')
);