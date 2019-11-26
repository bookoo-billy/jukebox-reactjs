import React from 'react';

class Artist extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Name: {this.props.artist.name}</p>
                {
                    this.props.artist.albums.map((album) => {
                        return (
                            <div>
                                <p>Album: {album.name}</p>
                                {
                                    album.songs.map((song) => (
                                        <p>Song: {song.track} - {song.name}</p>
                                    ))
                                }
                            </div>
                        );
                    })
                }
            </div>
        );
    }
};

export default Artist;