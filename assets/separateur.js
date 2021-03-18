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


export default function SpacingGrid() {


    return (
        <Grid container>
            <Grid item xs={6}>
                <SelectedListItem/>
            </Grid>
            <Grid item xs={6}>
                <SimpleAccordion/>
            </Grid>
        </Grid>
    );
}