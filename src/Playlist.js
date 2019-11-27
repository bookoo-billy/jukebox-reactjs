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

class Playlist extends React.Component {

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
                    <Grid item xs zeroMinWidth>
                        <Typography noWrap variant="h3">{this.props.playlist.name}</Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid container justify="center" spacing={2}>
                        <Grid key={this.props.playlist.id} item>
                            <Card key={this.props.playlist.id}>
                                <CardContent>
                                    <List>
                                        {
                                            this.props.playlist.items.map((item) => (
                                                <ListItem key={item.timestamp}>
                                                    <Button onClick={() => this.props.history.push(`/songs/${item.song.id}`)}>
                                                        <ListItemText>{item.song.artist.name} - {item.song.name}</ListItemText>
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

export default withRouter(Playlist);