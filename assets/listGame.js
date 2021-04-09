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
import {TestContext} from "./contexts/TestContext";
import ListSubheader from "@material-ui/core/ListSubheader";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
    game: {
        width: '15%',

        backgroundColor: theme.palette.background.paper,
    },
    compte: {
        width: '30%',

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
        <ListItem key={index} button
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

    return (
        <div>
            <Grid item xs={6} className={classes.game}>
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
            <Grid item xs={6} className={classes.compte}>
                <List
                    component="nav"
                    aria-label="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Liste de Compte
                        </ListSubheader>
                    }
                >
                    {context.test.map((jeu, index) => (
                            (selectedIndex) === jeu.idGame && <Accordion key={index}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>Compte : {jeu.username_account}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Username : {jeu.username_account}<br></br>
                                        Password : {jeu.password_account}<br></br>
                                        Description : {jeu.description}<br></br>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        )
                    )}
                </List>
            </Grid>
        </div>
    );
}
