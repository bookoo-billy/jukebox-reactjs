import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { withRouter } from "react-router-dom";

class Songs extends React.Component {

    constructor(props) {
        super(props);
        this.handleArtistClick = this.handleArtistClick.bind(this);
        this.handleAlbumClick = this.handleAlbumClick.bind(this);
        this.handleSongClick = this.handleSongClick.bind(this);
    }

    handleArtistClick(artistId) {
        this.props.history.push(`/artists/${artistId}`);
    }

    handleAlbumClick(albumId) {
        this.props.history.push(`/albums/${albumId}`);
    }

    handleSongClick(songId) {
        this.props.history.push(`/songs/${songId}`);
    }

    render() {
        return (
            <Paper>
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
                            this.props.songs.map(song => (
                                <TableRow key={song.id}>
                                    <TableCell component="th" scope="row">
                                        <Button color="primary" onClick={() => this.handleArtistClick(song.artist.id)}>
                                            {song.artist.name}
                                        </Button>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button href="#" onClick={() => this.handleAlbumClick(song.album.id)}>
                                            {song.album.name}
                                        </Button>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button href="#" onClick={() => this.handleSongClick(song.id)}>
                                            {song.name}
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </Paper>
        );
    }
};

export default withRouter(Songs);