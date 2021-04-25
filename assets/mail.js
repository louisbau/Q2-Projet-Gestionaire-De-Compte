import React from "react";
import ReactDOM from "react-dom";
import './styles/app.css';
import Mail from "./mailCode";
import ButtonAppBar from "./AppBarMail";
import Footer from "./Footer";

ReactDOM.render(
    <div>
        <ButtonAppBar />
        <Mail />
        <Footer />
    </div>,
    document.getElementById('mail')
);