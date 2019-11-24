import React from 'react';

const Song = (props) => {

    const { id, name, artist, album } = props.song;

    return <div key={id}>
        <p>{`${name} by ${artist.name} on ${album.name}`}</p>
    </div>;
};

export default Song;