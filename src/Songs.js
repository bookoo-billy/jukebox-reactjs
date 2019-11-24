import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Song from './Song';

const Songs = () => (
    <Query
        query={gql`
      {
        searchSongs(search: "nine") {
          id
          name
          album {
            id
            name
          }
          artist {
            id
            name
          }
        }
      }
    `}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) {
                console.log(error);
                return <p>Error :(</p>;
            }
            
            return data.searchSongs.map((currentSong) => (
                <Song song={currentSong} />
            ));
        }}
    </Query>
); export default Songs;