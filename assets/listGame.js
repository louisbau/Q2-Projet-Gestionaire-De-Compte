import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import {
    Collapse,
    Fab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {TestContext} from "./contexts/TestContext";
import ListSubheader from "@material-ui/core/ListSubheader";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import EditIcon from '@material-ui/icons/Edit';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles((theme) => ({
    game: {
        width: '20%',

        backgroundColor: theme.palette.background.paper,
    },
    compte: {
        width: '75%',

        backgroundColor: theme.palette.background.paper,
    },
    ju: {
        width:'0px',
        padding:'0',
        border:'0',

    },
    table: {
        display:"inline",
        width: 'auto',

        backgroundColor: theme.palette.background.paper,
    },
    fab: {
        margin: theme.spacing(2),
    },
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },

}));

export default function Test2() {
    const context = useContext(TestContext);
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [selectedGame, setSelectedGame] = React.useState('')
    const [addUser, setAddUser] = React.useState('');
    const [addPass, setAddPass] = React.useState('');
    const [addDes, setAddDes] = React.useState('');

    const handleListItemClick = (event, index, game) => {
        setSelectedIndex(index);
        console.log(event);
        setSelectedGame(game);
    };
    console.log(selectedIndex);
    const handleChangeUser = (e) => {
        setAddUser(e.target.value)
    }
    const handleChangePass = (e) => {
        setAddPass(e.target.value)
    }
    const handleChangeDes = (e) => {
        setAddDes(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        context.createListe(
            {name_game: selectedGame, username_account: addUser, password_account: addPass, description: addDes, idGame: selectedIndex, idClient: idclient},
        );
    }


    const lister = [];
    const idjeux = [];
    let idclient = '';
    for (let a of context.test) {
        if (lister[lister.length-1] !== a.name_game){
            lister.push(a.name_game);
            idjeux.push(a.idGame)
            idclient = a.idClient
        }
    }

    const listz = lister.map((number, index) =>
        <TableRow hover
                  key={index}
                  selected={selectedIndex === idjeux[index]}
                  onClick={(event) => handleListItemClick(event, idjeux[index], lister[index])}>
            <TableCell align={"center"}>
                {number}
            </TableCell>
        </TableRow>

    )
    console.log(selectedIndex)
    return (
        <div>
            <TableContainer className={classes.compte}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Liste de Jeux</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listz}
                    </TableBody>
                </Table>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell align={"center"}>
                                Liste de Compte
                            </TableCell>
                            <Fab color="primary" aria-label="edit"  size={"small"}>
                                <EditIcon />
                            </Fab>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {context.test.map((jeu, index) => (
                                (selectedIndex) === jeu.idGame &&
                                    <TableRow key={index}>
                                        <TableCell>
                                            <Accordion>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon/>}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                >
                                                    <Typography>{jeu.username_account}</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        Username : {jeu.username_account}<br/>
                                                        Password : {jeu.password_account}<br/>
                                                        Description : {jeu.description}<br/>
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        </TableCell>
                                    </TableRow>
                            )
                        )}
                        <TableRow>
                            <TableCell>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<AddIcon/>}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className={classes.heading}>Ajouter un compte</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <form>
                                            <TextField id="addUsernamefff"  label="Add username" onChange={(e) =>handleChangeUser(e)}/>
                                            <TextField id="addPassword"   label="Add password" onChange={(e) =>handleChangePass(e)}/>
                                            <TextField id="addDescription"  label="Add description" onChange={(e) =>handleChangeDes(e)}/>
                                            <Button color="primary" type="submit" onClick={(e) =>handleSubmit(e)}>
                                                ADD
                                            </Button>
                                        </form>
                                    </AccordionDetails>
                                </Accordion>
                            </TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}