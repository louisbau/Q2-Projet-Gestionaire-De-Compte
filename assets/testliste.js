import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import {Fab, Tooltip} from "@material-ui/core";
import ListSubheader from '@material-ui/core/ListSubheader'
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import {ListeContext} from "./contexts/ListeContext";
import {number, object} from "prop-types";
import {indexOf} from "core-js";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';



const useStyles = makeStyles((theme) => ({
    rootGame: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    rootCompte: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    details: {
        alignItems: "center",
    },
    fab: {
        margin: theme.spacing(2),
    },
}));

export default function TestListe() {
    const context = useContext(ListeContext);
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };
    const indexGame = Object.keys(context.listeJeux)
    const table = [];

    const displayGame = Object.keys(context.listeJeux).map((number) =>

        <ListItem button>
            <ListItemIcon>
                <InboxIcon/>
            </ListItemIcon>
            <ListItemText primary={number}/>
        </ListItem>,
        <div id={number}/>
    )

    return (
        <div className={classes.root}>
            <List
                component="nav"
                aria-label="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Liste de Jeux
                    </ListSubheader>
                }
            >
                {displayGame}
            </List>
        </div>
    );
}
