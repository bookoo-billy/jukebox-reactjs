import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

const Songs = (props) => {

    const classes = useStyles();

    return (<Paper>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Artist</TableCell>
                            <TableCell align="right">Album</TableCell>
                            <TableCell align="right">Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.songs.map(song => (
                                <TableRow key={song.id}>
                                    <TableCell component="th" scope="row">
                                        {song.artist.name}
                                    </TableCell>
                                    <TableCell align="right">{song.album.name}</TableCell>
                                    <TableCell align="right">{song.name}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </Paper>);
};
export default Songs;