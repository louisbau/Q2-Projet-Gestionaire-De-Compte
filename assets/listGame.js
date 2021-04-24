import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Collapse, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    Fab, Slider,
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
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';


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
        width: '0px',
        padding: '0',
        border: '0',

    },
    table: {
        display: "inline",
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
    mic: {
        width: 200,
    },

}));


export default function Test2() {
    const context = useContext(TestContext);
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState('');
    const [selectedGame, setSelectedGame] = React.useState('')
    const [addUser, setAddUser] = React.useState('');
    const [addPass, setAddPass] = React.useState('');
    const [addDes, setAddDes] = React.useState('');
    const [addGame, setAddGame] = React.useState('');
    const [visible, setVisible] = React.useState('0');
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleListItemClick = (event, index, game) => {
        setSelectedIndex(index);
        setSelectedGame(game);
    };
    const handleChangeUser = (e) => {
        setAddUser(e.target.value)
    }
    const handleChangePass = (e) => {
        setAddPass(e.target.value)
    }
    const handleChangeDes = (e) => {
        setAddDes(e.target.value)
    }
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeGame = (e) => {
        setAddGame(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        context.createListe(
            {
                name_app: selectedGame,
                username_account: addUser,
                password_account: addPass,
                description: addDes,
                idApp: selectedIndex,
            },
        );
    }
    const handleSubmitJeux = (e) => {
        e.preventDefault();
        setOpen(false);
        context.createListeJeux(
            {
                name_app: addGame,
                username_account: addUser,
                password_account: addPass,
                description: addDes,
            },
        );
    }
    const handleEdit = (e) => {
        if (visible === "1") {
            setVisible("0")
        } else {
            setVisible("1")
        }

    };
    const handleDelete = (e) => {
        context.deleteListe(e)

    };
    const listApp = [];
    const listIdApp = [];
    for (let a of context.test) {
        if (listApp[listApp.length - 1] !== a.name_app) {
            listApp.push(a.name_app);
            listIdApp.push(a.idApp)
        }
    }

    const list = listApp.map((number, index) =>
        <TableRow hover
                  key={index}
                  selected={selectedIndex === listIdApp[index]}
                  onClick={(event) => handleListItemClick(event, listIdApp[index], listApp[index])}>
            <TableCell align={"center"}>
                {number}
            </TableCell>
        </TableRow>
    )
    const dialo = <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
            <DialogContentText>
                To subscribe to this website, please enter your email address here. We will send updates
                occasionally.
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="Addjeux"
                label="ajouter un jeux : "
                fullWidth
                onChange={(e) => handleChangeGame(e)}

            />
            <TextField
                autoFocus
                margin="dense"
                id="Addusername"
                label="ajouter un username: "
                fullWidth
                onChange={(e) => handleChangeUser(e)}
            />
            <TextField
                autoFocus
                margin="dense"
                id="Addpassword"
                label="ajouter un mot de passe : "
                fullWidth
                onChange={(e) => handleChangePass(e)}
            />
            <TextField
                autoFocus
                margin="dense"
                id="Adddescription"
                label="ajouter une description"
                fullWidth
                onChange={(e) => handleChangeDes(e)}
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={(e) => handleSubmitJeux(e)} color="primary">
                Submit
            </Button>
        </DialogActions>
    </Dialog>




    return (
        <div>
            <Grid>
                <Grid>
                    <TableContainer className={classes.compte}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Liste de Jeux</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {list}
                                {visible === '1' ?
                                    <TableRow><TableCell align={'center'}><Fab size="small" color="primary" aria-label="add"
                                                                               className={classes.margin}
                                                                               onClick={handleClickOpen}><AddIcon/></Fab>{dialo}
                                    </TableCell></TableRow> : ""}
                            </TableBody>
                        </Table>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell align={"center"}>
                                        Liste de Compte
                                    </TableCell>
                                    <TableCell>
                                        <Fab color="primary" aria-label="edit" size={"small"} onClick={(e) => handleEdit(e)}>
                                            <EditIcon/>
                                        </Fab>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {context.test.map((jeu, index) => (
                                        (selectedIndex) === jeu.idApp &&
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
                                            <TableCell value={jeu.id}>
                                                {visible === '1' ?
                                                    <Fab size="small" color="secondary" aria-label="delete" className={classes.margin} onClick={()=>handleDelete(jeu.id)}>
                                                        <DeleteIcon />
                                                    </Fab> : ""}
                                            </TableCell>

                                        </TableRow>
                                    )
                                )}
                                {visible === '1' ?
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
                                                        <TextField id="addUsernamefff" label="Add username"
                                                                   onChange={(e) => handleChangeUser(e)}/>
                                                        <TextField id="addPassword" label="Add password"
                                                                   onChange={(e) => handleChangePass(e)}/>
                                                        <TextField id="addDescription" label="Add description"
                                                                   onChange={(e) => handleChangeDes(e)}/>
                                                        <Button color="primary" type="submit" onClick={(e) => handleSubmit(e)}>
                                                            ADD
                                                        </Button>
                                                    </form>
                                                </AccordionDetails>
                                            </Accordion>
                                        </TableCell>
                                    </TableRow> : ""}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid>
                    <iframe src="https://discord.com/widget?id=677883046359334930&theme=dark" width="350" height="500"
                            allowTransparency="true" frameBorder="0"
                            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />
                    <iframe src="https://open.spotify.com/embed/playlist/6wj5KOqIvQl2fOSIT9UMyE" width="300" id="level"
                            height="380" frameBorder="0" allowTransparency="true" allow="encrypted-media" />
                    <div className={classes.mic}>
                        <Typography id="continuous-slider" gutterBottom>
                            Volume
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item>
                                <VolumeDown />
                            </Grid>
                            <Grid item xs>
                                <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                            </Grid>
                            <Grid item>
                                <VolumeUp />
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
