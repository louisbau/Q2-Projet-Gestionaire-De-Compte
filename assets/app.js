import React from "react";
import './styles/app.css';
import ReactDOM from "react-dom";

import SimpleMenu from "./menuBar.js";
import Test2 from "./listGame";
import TestContextProvider from "./contexts/TestContext";
ReactDOM.render(
    <div>
        <SimpleMenu />
        <TestContextProvider>
            <Test2 />
        </TestContextProvider>
    </div>,
    document.getElementById('root')
);
