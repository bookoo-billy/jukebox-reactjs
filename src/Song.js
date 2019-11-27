import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { withRouter } from "react-router-dom";

class Song extends React.Component {

    render() {
        const song = this.props.song;

        return (
            <Paper>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Artist</TableCell>
                            <TableCell align="left">Album</TableCell>
                            <TableCell align="left">Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key={song.id}>
                            <TableCell component="th" scope="row">
                                <Button color="primary" onClick={() => this.props.history.push(`/artists/${song.artist.id}`)}>
                                    {song.artist.name}
                                </Button>
                            </TableCell>
                            <TableCell align="left">
                                <Button onClick={() => this.props.history.push(`/albums/${song.album.id}`)}>
                                    {song.album.name}
                                </Button>
                            </TableCell>
                            <TableCell align="left">
                                <Button onClick={() => this.props.history.push(`/songs/${song.id}`)}>
                                    {song.name}
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        );
    }
};

export default withRouter(Song);