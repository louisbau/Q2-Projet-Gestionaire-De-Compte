import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import SelectedListItem from "./listGame";
import SimpleAccordion from "./listCompte";
import ListeContextProvider, {ListeContext} from "./contexts/ListeContext";
import TestListe from "./testliste";
import Alaide from "./testaccordion";
import ListeCompteContextProvider, {ListeCompteContext} from "./contexts/ListeCompteContext";
import TestContextProvider from "./contexts/TestContext";
import Test2 from "./listGame";

export default function SpacingGrid() {

    return (
        <TestContextProvider>
            <Test2 />
        </TestContextProvider>
    );
}