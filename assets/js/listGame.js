import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Collapse, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    Fab, Paper, Slider,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip, withStyles
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {TestContext} from "../contexts/TestContext";
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
import Link from "@material-ui/core/Link";
import Footer from "./Footer";
import {TableChartRounded} from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    compte: {
        backgroundColor: theme.palette.background.paper,
    },
    table: {
        backgroundColor: theme.palette.background.paper,
    },
    margin: {
        margin: theme.spacing(1),
    },
    fab: {
        margin: theme.spacing(1),
    },
    typo: {
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
    },
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
    mic: {
        width: 200,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },

}));

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


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
        event.target.color = 'primary';
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
        <TableRow key={index} variant="contained" color="primary" selected={selectedIndex === listIdApp[index]}
                  className={classes.margin}
                  onClick={(event) => handleListItemClick(event, listIdApp[index], listApp[index])}>
            <TableCell align={"center"} component="th" scope="row">
                {number}
            </TableCell>
        </TableRow>
    )
    const dialo = <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
            <DialogContentText>
                To subscribe to this website, please enter your email address here. We will send updates
                occasionally.llolollol
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
    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.info.light,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);

    return (
        <div>
            <Grid container className={classes.compte} >
                <Grid item sm={2} xs={12}>
                    <TableContainer className={classes.table} variant="outlined">
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align={"center"}>Liste de Jeux</StyledTableCell>
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
                    </TableContainer>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TableContainer className={classes.table} component={'paper'}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align={"center"}>
                                        Liste de Compte
                                    </StyledTableCell>
                                    <TableCell>
                                        <Fab color="primary" aria-label="edit" size={"small"}
                                             onClick={(e) => handleEdit(e)}>
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
                                                    <Fab size="small" color="secondary" aria-label="delete"
                                                         className={classes.margin} onClick={() => handleDelete(jeu.id)}>
                                                        <DeleteIcon/>
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
                                                        <Button color="primary" type="submit"
                                                                onClick={(e) => handleSubmit(e)}>
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
                <Grid item sm={4} xs={12}>
                    <Grid item xs={12}>
                        <iframe src="https://open.spotify.com/embed/playlist/6wj5KOqIvQl2fOSIT9UMyE" width="350"
                                id="level"
                                height="430" frameBorder="0" allowTransparency="true" allow="encrypted-media"/>
                    </Grid>
                    <Grid item xs={12}>
                        <iframe src="https://discord.com/widget?id=677883046359334930&theme=dark" width="350"
                                height="430"
                                allowTransparency="true" frameBorder="0"
                                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
