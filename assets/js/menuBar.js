import React, {useContext} from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {AppBar, Fab, fade, IconButton, InputBase, TableCell, TableRow, Toolbar} from "@material-ui/core";
import CustomizedDialogs from "./Dialogue";
import ProfileContextProvider, {ProfileContext} from "../contexts/ProfileContext";
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import {TestContext} from "../contexts/TestContext";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 0.5,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    RightButtonLogout: {
        flexGrow: 0.5,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
}));


function SimpleMenu() {
    const cont = useContext(TestContext);
    const lol = () => {
        if (cont.test === 'ROLE_USER' || cont.test === 'ROLE_USER') {
            return true;
        }
        else {
            return false
        }
    }

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const context = useContext(ProfileContext);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (e) => {
        setAnchorEl(null);
        if (e.target.id === "logout") {
            window.location = '/logout';
        }
        if (e.target.id === "contact") {
            window.location = '/contact';
        }
    };

    return (
        <AppBar position="static">
            <Toolbar>
                {lol === 1 ?
                    <div>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                                    aria-controls="simple-menu"
                                    aria-haspopup="true"
                                    onClick={handleClick}>
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={(e)=>handleClose(e)}
                        >
                            <ProfileContextProvider><CustomizedDialogs/></ProfileContextProvider>
                            <MenuItem onClick={(e)=>handleClose(e)} id={"logout"} align={"center"}>Logout</MenuItem>
                            <MenuItem onClick={(e)=>handleClose(e)} id={"contact"} align={"center"}>Contact</MenuItem>
                        </Menu>
                    </div> : ""
                }
                <Typography className={classes.title} variant="h6">
                    Unlocky
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon/>
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{'aria-label': 'search'}}
                    />
                </div>
                {lol === 1 ?
                    <Button className={classes.RightButtonLogout} color={"inherit"} href={"/logout"}>
                        Logout
                    </Button> :
                    <Button className={classes.RightButtonLogout} color={"inherit"} href={"/"}>
                        Login
                    </Button>}
            </Toolbar>
        </AppBar>
    );
}

export default SimpleMenu;