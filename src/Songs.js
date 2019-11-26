import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';

class Songs extends React.Component {

    constructor(props) {
        super(props);
        this.handleArtistClick = this.handleArtistClick.bind(this);
        this.handleAlbumClick = this.handleAlbumClick.bind(this);
        this.handleSongClick = this.handleSongClick.bind(this);
    }

    handleArtistClick(artistId) {
        alert("Artist " + artistId + " clicked");
    }

    handleAlbumClick(albumId) {
        alert("Album " + albumId + " clicked");
    }

    handleSongClick(songId) {
        alert("Song " + songId + " clicked");
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
                                        <Link href="#" onClick={() => this.handleArtistClick(song.artist.id)}>
                                            {song.artist.name}
                                        </Link>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Link href="#" onClick={() => this.handleAlbumClick(song.album.id)}>
                                            {song.album.name}
                                        </Link>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Link href="#" onClick={() => this.handleSongClick(song.id)}>
                                            {song.name}
                                        </Link>
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

export default Songs;