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
import {TestContext} from "./contexts/TestContext";
import ListSubheader from "@material-ui/core/ListSubheader";
import {indexOf} from "core-js";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    fab: {
        margin: theme.spacing(2),
    },
}));

export default function Test2() {
    const context = useContext(TestContext);
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    const lister =[];

    for (let a of context.test) {
        if (lister[lister.length-1] !== a.name_game){
            lister.push(a.name_game)
        }
    }
    const list = lister.map((number,index) =>
        <ListItem button
                  selected={selectedIndex === index}
                  onClick={(event) => handleListItemClick(event, index)}
        >
            <ListItemIcon>
                <InboxIcon/>
            </ListItemIcon>
            <ListItemText primary={number}/>
        </ListItem>

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
                {list}
            </List>
        </div>
    );
}
