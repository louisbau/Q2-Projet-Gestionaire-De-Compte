import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import {Fab, Tooltip} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import TestContextProvider, {TestContext} from "./contexts/TestContext";
import ListSubheader from "@material-ui/core/ListSubheader";
import {indexOf} from "core-js";
import {func} from "prop-types";
import SimpleAccordion from "./listCompte";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '200%',
        backgroundColor: theme.palette.background.paper,
    },
    fab: {
        margin: theme.spacing(2),
    },
}));

export default function Test2() {
    const context = useContext(TestContext);
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        console.log(event)

    };
    const lister = [];
    const idjeux = [];
    for (let a of context.test) {
        if (lister[lister.length-1] !== a.name_game){
            lister.push(a.name_game);
            idjeux.push(a.idGame)
        }
    }

    const list = lister.map((number,index) =>
        <ListItem button
                  selected={selectedIndex === idjeux[index]}
                  onClick={(event) => handleListItemClick(event, idjeux[index])}
        >
            <ListItemIcon>
                <InboxIcon/>
            </ListItemIcon>
            <ListItemText primary={number}/>
        </ListItem>

    )
    console.log(selectedIndex)

    const listeCompte = context.test.map(number =>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.heading}>Compte : {number.username_account}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    <p>Username : {number.username_account}</p>
                    <p>Password : {number.password_account}</p>
                    <p>Description : {number.description}</p>
                </Typography>
            </AccordionDetails>
        </Accordion>

    )
    return (
        <div className={classes.root}>
            <Grid item xs={6}>
                <List
                    component="nav"
                    aria-label="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Liste de Jeux
                        </ListSubheader>
                    }
                >
                    {list}

                </List>
            </Grid>
            <Grid item xs={6}>
                {context.test.map(jeu => (
                    (selectedIndex) === jeu.idGame && <Accordion>
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
            </Grid>
        </div>
    );
}
