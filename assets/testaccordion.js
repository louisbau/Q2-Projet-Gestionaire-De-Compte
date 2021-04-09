import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Fab, Tooltip} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import {ListeCompteContext} from "./contexts/ListeCompteContext";
import {number} from "prop-types";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    details: {
        alignItems: "center",
    },
    fab: {
        margin: theme.spacing(2),
    },
}));

export default function Alaide() {
    const context = useContext(ListeCompteContext);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {context.listeCompte.map(jeu => (
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Compte : {jeu.username_account}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>Username : {jeu.username_account}</p>
                            <p>Password : {jeu.password_account}</p>
                            <p>Description : {jeu.description}</p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                )
            )}
        </div>
    );
}