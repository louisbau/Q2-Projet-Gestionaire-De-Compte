import React from "react";
import './styles/app.css';
import ReactDOM from "react-dom";
import SimpleMenu from "./js/menuBar.js";
import Test2 from "./js/listGame";
import TestContextProvider from "./contexts/TestContext";
import ProfileContextProvider from "./contexts/ProfileContext";
import Footer from "./js/Footer";
import AppContextProvider from "./contexts/AppContext";

ReactDOM.render(
    <div>
        <ProfileContextProvider>
            <SimpleMenu/>
        </ProfileContextProvider>
        <AppContextProvider>
            <Test2/>
        </AppContextProvider>
        <Footer />
    </div>,
    document.getElementById('root')
);
