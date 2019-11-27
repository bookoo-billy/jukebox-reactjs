import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { withRouter } from "react-router-dom";

class Album extends React.Component {
    constructor(props) {
        super(props);
    }

    getAvatarShort() {
        this.props.album.name.split(" ")
            .map((piece) => (piece[0].toUpperCase()))
            .slice(0, 2)
            .join("")
    }

    useStyles() {
        return makeStyles(theme => ({
            root: {
                padding: theme.spacing(3, 2),
            },
        }));
    }

    render() {
        const classes = this.useStyles();

        return (
            <Paper className={classes.root}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar alt={this.props.album.name}>{this.getAvatarShort()}</Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography noWrap variant="h3">{this.props.album.name}</Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid container justify="center" spacing={2}>
                        <Grid key={this.props.album.id} item>
                            <Card key={this.props.album.id}>
                                <CardContent>
                                    <Button color="primary" onClick={() => this.props.history.push(`/albums/${this.props.album.id}`)}>
                                        <Typography variant="h4">{this.props.album.name}</Typography>
                                    </Button>
                                    <List>
                                        {
                                            this.props.album.songs.map((song) => (
                                                <ListItem key={song.id}>
                                                    <Button onClick={() => this.props.history.push(`/songs/${song.id}`)}>
                                                        <ListItemText>{song.track} - {song.name}</ListItemText>
                                                    </Button>
                                                </ListItem>
                                            ))
                                        }
                                    </List>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
};

export default withRouter(Album);