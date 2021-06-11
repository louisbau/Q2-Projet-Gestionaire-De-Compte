import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Collapse,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, Divider,
    Fab,
    FormControl,
    InputLabel,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    MenuItem,
    Paper,
    Select,
    Slider,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    withStyles
} from "@material-ui/core";
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
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
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import {palette} from "@material-ui/system";
import {AppContext} from "../contexts/AppContext";

const useStyles = makeStyles((theme) => ({
    compte: {
        backgroundColor: theme.palette.background.paper,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    table: {
        backgroundColor: theme.palette.background.paper,

    },
    margin: {
        margin: theme.spacing(1),
    },
    fab: {
        margin: theme.spacing(1),
        position: 'absolute',
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
        backgroundColor: theme.palette.action.active,
        padding: theme.spacing(6),
    },
    list : {
        margin: theme.spacing(1),
        borderRadius: 6,
        color: theme.palette.text.secondary,
        padding: '0.5rem 1rem',
    },
    liste : {
        backgroundColor: theme.palette.action.disabled,
        padding: '0.5rem 1rem',
        borderRadius: 6,
        margin: theme.spacing(1),
    },
    listes : {
        backgroundColor: theme.palette.background.paper,
        padding: '0.5rem 1rem',
        borderRadius: 6,
        margin: theme.spacing(1),
    },
    subHeader : {
        backgroundColor: theme.palette.background.paper,
    },
    tab :{
        width :'100%'
    },
    paper: {
        width: '85%',
        margin: theme.spacing(2),
    },
    ext: {
        width: '100%',
        marginTop: theme.spacing(2),
    },
}));


export default function Test2() {
    const context = useContext(AppContext);
    const extension = useContext(TestContext);
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState('');
    const [selectedGame, setSelectedGame] = React.useState('')
    const [addUser, setAddUser] = React.useState('');
    const [addPass, setAddPass] = React.useState('');
    const [addDes, setAddDes] = React.useState('');
    const [addGame, setAddGame] = React.useState('');
    const [visible, setVisible] = React.useState('0');
    const [addUrl, setAddUrl] = React.useState('');
    const [addPlaylist, setAddPlaylist] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [opens, setOpens] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
        console.log("lol")
    };
    const handleClose = () => {
        setOpen(false);
        console.log(open)
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
    const handleChangePlaylist = (e)=> {
        setAddPlaylist(e.target.value)
    }
    const handleChangeUrl = (e)=> {
        setAddUrl(e.target.value)
    }

    const handleSubmitExtension = (e)=> {
        e.preventDefault();
        setOpen(false);
        //decouppage du lien a faire
        extension.AddExtension(addUrl, "spotify", addPlaylist)
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
    const liste = context.app.map((number, index) =>
        <ListItem
            button
            key={index}
            selected={selectedIndex === number.idApp}
            onClick={(event) => handleListItemClick(event, number.idApp, number.name_app)}
            className={classes.liste}
        >
            <ListItemText primary={number.name_app} align={'center'}/>
        </ListItem>
    );
    const exten = extension.test.map((number, index) =>
        <MenuItem value={number.url} key={index}>
            <em>{number.playlist_name}</em>
        </MenuItem>
    );

    const dialo = <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Ajouter un jeux avec un compte :
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
            width: '85%',
        },
    }))(TableCell);

    return (
        <div>
            <Grid container className={classes.compte}>
                <Grid item xs={12} sm={9}>
                    <Grid container>
                        <Grid item sm={3} xs={12}>
                            <List component="nav"
                                  className={classes.list}
                                  aria-labelledby="nested-list-subheader"
                                  subheader={
                                      <ListSubheader component="div" id="nested-list-subheader" className={classes.subHeader} align={'center'}>
                                          Liste d'application
                                      </ListSubheader>
                                  }
                            >
                                <Divider />
                                {liste}
                                {visible === '1' ?
                                    <ListItem
                                        button
                                        onClick={handleClickOpen}
                                        className={classes.listes}
                                    >
                                        <ListItemIcon>
                                            <AddIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary={'ajouter un jeux'}/>
                                    </ListItem> : ""}
                                {dialo}
                            </List>
                        </Grid>
                        <Grid item sm={9} xs={12}>
                            <div align={"center"}>
                                <Paper className={classes.paper}>
                                    <TableContainer className={classes.table} component={Paper}>
                                        <Table className={classes.tab}>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align={"center"} width={'85%'}>
                                                        Liste de Compte
                                                    </TableCell>

                                                    <TableCell width={'15%'}>
                                                        <Fab color="primary" aria-label="edit" size={"small"}
                                                             onClick={(e) => handleEdit(e)}>
                                                            <EditIcon/>
                                                        </Fab>
                                                    </TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {context.app_account.map((jeu, index) => (
                                                        (selectedIndex) === jeu.idApp &&
                                                        <TableRow key={index}>
                                                            <TableCell width={'85%'}>
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
                                                            {visible === '1' ?
                                                                <TableCell value={jeu.id} width={'15%'}>
                                                                    <Fab size="small" color="secondary" aria-label="delete"
                                                                         onClick={() => handleDelete(jeu.id)}>
                                                                        <DeleteIcon/>
                                                                    </Fab>
                                                                </TableCell>: ""}
                                                        </TableRow>
                                                    )
                                                )}
                                                {visible === '1' ?
                                                    <TableRow>
                                                        <TableCell width={'85%'}>
                                                            <Accordion>
                                                                <AccordionSummary
                                                                    expandIcon={<AddIcon/>}
                                                                    aria-controls="panel1a-content"
                                                                    id="panel1a-header"
                                                                >
                                                                    <Typography className={classes.heading}>Ajouter un
                                                                        compte</Typography>
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
                                                        <TableCell width={'15%'}/>
                                                    </TableRow> : <TableRow />}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Paper>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={4}lg={3}>
                    <Grid item xs={12}>
                        <div align={'center'} className={classes.ext}>
                            <iframe src="https://open.spotify.com/embed/playlist/6wj5KOqIvQl2fOSIT9UMyE" width="350"
                                    id="level"
                                    height="430" frameBorder="0" allowtransparency="true" allow="encrypted-media"/>
                        </div>
                    </Grid>
                    <Grid item xs={12} className={classes.ext}>
                        <div align={'center'}>
                        <iframe src="https://discord.com/widget?id=677883046359334930&theme=dark" width="350"
                                height="430"
                                allowtransparency="true" frameBorder="0"
                                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"/>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl variant="filled" className={classes.formControl} align={'center'}>
                            <InputLabel id="demo-simple-select-filled-label">playlist</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                onChange={handleChange}
                            >
                                {exten}
                            </Select>
                        </FormControl>
                        <Button onClick={handleClose} color="primary">Add</Button>
                        <Dialog open={opens} onClose={handleClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Ajouter un jeux avec un compte :
                                </DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="Addurl"
                                    label="ajouter l'url : "
                                    fullWidth
                                    onChange={(e) => handleChangeUrl(e)}
                                />
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="Addplaylist"
                                    label="ajouter un playlist : "
                                    fullWidth
                                    onChange={(e) => handleChangePlaylist(e)}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClickOpen} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={(e) => handleSubmitExtension(e)} color="primary">
                                    Submit
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
