import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';

const JukeboxAppBar = (props) => (
    <AppBar position="static">
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6">
                Jukebox
          </Typography>
            <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>
);

export default JukeboxAppBar;