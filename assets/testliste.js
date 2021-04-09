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

import {ListeContext} from "./contexts/ListeContext";




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
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };


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
                {context.listeJeux.map(number => (
                    <ListItem button
                              selected={selectedIndex === number.id}
                              onClick={(event) => handleListItemClick(event, number.id)}
                    >
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText primary={number.name_game}/>
                    </ListItem>
                    )
                )}
            </List>
        </div>
    );
}
