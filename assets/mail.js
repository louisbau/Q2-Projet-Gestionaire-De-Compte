import React from "react";
import ReactDOM from "react-dom";
import './styles/app.css';
import Mail from "./js/mailCode";
import ButtonAppBar from "./js/AppBarMail";
import Footer from "./js/Footer";

ReactDOM.render(
    <div>
        <ButtonAppBar />
        <Mail />
    </div>,
    document.getElementById('mail')
);