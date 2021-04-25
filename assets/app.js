import React from "react";
import './styles/app.css';
import ReactDOM from "react-dom";
import SimpleMenu from "./js/menuBar.js";
import Test2 from "./js/listGame";
import TestContextProvider from "./contexts/TestContext";
import ProfileContextProvider from "./contexts/ProfileContext";
import Footer from "./js/Footer";

ReactDOM.render(
    <div>
        <ProfileContextProvider>
            <SimpleMenu/>
        </ProfileContextProvider>
        <TestContextProvider>
            <Test2/>
        </TestContextProvider>
        <Footer />
    </div>,
    document.getElementById('root')
);
