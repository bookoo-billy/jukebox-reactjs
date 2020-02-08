import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AlbumIcon from '@material-ui/icons/Album';
import MenuIcon from '@material-ui/icons/Menu';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PersonIcon from '@material-ui/icons/Person';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import SettingsIcon from '@material-ui/icons/Settings';
import PropTypes from 'prop-types';
import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    toolbarTitle: {
        flexGrow: 1
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function JukeboxAppBar(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <ListItem button key='Artists' onClick={() => props.history.push("/artists")}>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Artists"} />
                </ListItem>
                <ListItem button key='Albums' onClick={() => props.history.push("/albums")}>
                    <ListItemIcon>
                        <AlbumIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Albums"} />
                </ListItem>
                <ListItem button key='Songs' onClick={() => props.history.push("/songs")}>
                    <ListItemIcon>
                        <MusicNoteIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Songs"} />
                </ListItem>
                <ListItem button key='Playlists' onClick={() => props.history.push("/playlists")}>
                    <ListItemIcon>
                        <QueueMusicIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Playlists"} />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button key="Profile" onClick={() => props.history.push("/profile")}>
                    <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItem>
                <ListItem button key="Settings" onClick={() => props.history.push("/settings")}>
                    <ListItemIcon><SettingsIcon /></ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap className={classes.toolbarTitle}>
                        <Link to="/">Jukebox</Link>
                    </Typography>
                    {!isAuthenticated && (<Button href="#" variant="outlined" color="default" aligh="right" onClick={() => loginWithRedirect({})}>Log in</Button>)}
                    {isAuthenticated && <Button href="#" variant="outlined" color="secondary" aligh="right" onClick={() => logout()}>Log out</Button>}
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden mdUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <div className={classes.content}>
                <div className={classes.toolbar} />
                {props.children}
            </div>
        </div>
    );
}

JukeboxAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default withRouter(JukeboxAppBar);
