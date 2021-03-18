import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import {Fab, Tooltip} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

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

export default function SelectedListItem() {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem
                    button
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemIcon>
                        <InboxIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Fortnite"/>
                </ListItem>
                <ListItem
                    button
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemIcon>
                        <DraftsIcon/>
                    </ListItemIcon>
                    <ListItemText primary="League of Legend"/>
                </ListItem>
                <ListItem
                    button
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <ListItemIcon>
                        <DraftsIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Rocket League"/>
                </ListItem>
                <ListItem
                    button
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                >
                    <ListItemIcon>
                        <DraftsIcon/>
                    </ListItemIcon>
                    <ListItemText primary="add games"/>
                    <Tooltip title="Add" aria-label="add">
                        <Fab color="primary" className={classes.fab}>
                            <AddIcon/>
                        </Fab>
                    </Tooltip>
                </ListItem>
            </List>
        </div>
    );
}