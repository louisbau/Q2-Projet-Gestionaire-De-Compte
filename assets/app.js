import React from "react";
import './styles/app.css';
import ReactDOM from "react-dom";

import SimpleMenu from "./menuBar.js";
import SpacingGrid from "./separateur";
ReactDOM.render(
    <div>
        <SimpleMenu />
        <SpacingGrid />
    </div>,
    document.getElementById('root')
);
