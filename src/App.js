import ApolloClient from "apollo-boost";
import React from 'react';
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import ArtistContainer from './ArtistContainer';
import JukeboxAppBar from './JukeboxAppBar';
import SongContainer from './SongsContainer';

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
          <Route path="/songs" component={SongContainer} />
          <Route path="/artists/:artistId" component={ArtistContainer} />
        </ApolloProvider>
      </BrowserRouter>
    );
  }
}

export default App;
