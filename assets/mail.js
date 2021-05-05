import React from "react";
import ReactDOM from "react-dom";
import './styles/app.css';
import Mail from "./js/components/mailCode";
import ButtonAppBar from "./js/components/AppBarMail";
import Footer from "./js/components/Footer";

ReactDOM.render(
    <div>
        <ButtonAppBar />
        <Mail />
    </div>,
    document.getElementById('mail')
);