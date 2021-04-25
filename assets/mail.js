import React from "react";
import ReactDOM from "react-dom";
import './styles/app.css';
import Mail from "./js/mailCode";
import ButtonAppBar from "./js/AppBarMail";
import Footer from "./js/Footer";
import unlocky from "./images/unlocky.png";

ReactDOM.render(
    <div>
        <ButtonAppBar />
        <Mail />
        <Footer />
        <img src={'unlocky'}/>
    </div>,
    document.getElementById('mail')
);