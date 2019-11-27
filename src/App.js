import ApolloClient from "apollo-boost";
import React from 'react';
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route } from "react-router-dom";
import AlbumContainer from './AlbumContainer';
import './App.css';
import ArtistContainer from './ArtistContainer';
import JukeboxAppBar from './JukeboxAppBar';
import PlaylistsContainer from './PlaylistsContainer';
import SongContainer from './SongContainer';
import SongsContainer from './SongsContainer';

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql/"
});

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <JukeboxAppBar />
          <Route exact path="/songs" component={SongsContainer} />
          <Route exact path="/songs/:songId" component={SongContainer} />
          <Route exact path="/artists/:artistId" component={ArtistContainer} />
          <Route exact path="/albums/:albumId" component={AlbumContainer} />
          <Route exact path="/playlists" component={PlaylistsContainer} />
        </ApolloProvider>
      </BrowserRouter>
    );
  }
}

export default App;
