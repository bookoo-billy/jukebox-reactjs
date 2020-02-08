import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

class JukeboxPlayerBar extends React.Component {

    constructor(props) {
        super(props);

        this.handlePlayPauseClick = this.handlePlayPauseClick.bind(this);

        this.state = {
            playing: false
        };
    }

    useStyles() {
        return makeStyles(theme => ({
            footer: {
              padding: theme.spacing(3, 2),
              marginTop: 'auto',
              backgroundColor: theme.palette.grey[800]
            },
          }));
    }

    handlePlayPauseClick(e) {
        const playing = this.state.playing;

        this.setState({
            playing: !playing
        });
    }

    render() {
        const { playing } = this.state;

        return (
            <Drawer anchor="bottom" variant="permanent" open={true}>
                <Grid container justify="center">
                    <IconButton onClick={this.handleSkipPrevious}>
                        <SkipPreviousIcon color="action" fontSize="large" />
                    </IconButton>
                    <IconButton onClick={this.handlePlayPauseClick}>
                        { (playing) ?
                            <PauseIcon color="action" fontSize="large" />
                            :
                            <PlayArrowIcon color="action" fontSize="large" />
                        }
                    </IconButton>
                    <IconButton onClick={this.handleSkipNext}>
                        <SkipNextIcon color="action" fontSize="large" />
                    </IconButton>
                </Grid>
            </Drawer>
        );
    }
}

export default JukeboxPlayerBar;