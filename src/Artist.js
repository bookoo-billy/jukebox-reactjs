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


class Artist extends React.Component {

    getAvatarShort() {
        this.props.artist.name.split(" ")
            .map((piece) => (piece[0].toUpperCase()))
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
                        <Avatar alt={this.props.artist.name}>{this.getAvatarShort()}</Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography noWrap variant="h3">{this.props.artist.name}</Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid container justify="center" spacing={2}>
                        {
                            this.props.artist.albums.map((album) => (
                                <Grid key={album.id} item>
                                    <Card key={album.id}>
                                        <CardContent>
                                            <Button color="primary" onClick={() => this.props.history.push(`/albums/${album.id}`)}>
                                                <Typography variant="h4">{album.name}</Typography>
                                            </Button>
                                            <List>
                                                {
                                                    album.songs.map((song) => (
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
                            ))
                        }
                    </Grid>
                </Grid>
            </Paper>
        );
    }
};

export default withRouter(Artist);