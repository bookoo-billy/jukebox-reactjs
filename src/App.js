import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ApolloClient from "apollo-boost";
import React from 'react';
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from "react-router-dom";
import AlbumContainer from './AlbumContainer';
import './App.css';
import ArtistContainer from './ArtistContainer';
import JukeboxAppBar from './JukeboxAppBar';
import PlaylistContainer from './PlaylistContainer';
import PlaylistsContainer from './PlaylistsContainer';
import Profile from './Profile';
import SongContainer from './SongContainer';
import SongsContainer from './SongsContainer';
import { blue, orange } from '@material-ui/core/colors';
import { Auth0Provider } from './react-auth0-spa';
import config from "./auth_config.json";
import history from "./history";
import PrivateRoute from "./PrivateRoute";

const client = new ApolloClient({
  uri: `http://${window.location.hostname}:8080/graphql/`
});

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: blue
  }
});

class App extends React.Component {

  constructor(props) {
    super(props);

    this.onRedirectCallback = this.onRedirectCallback.bind(this);
  }

  // A function that routes the user to the right place
  // after login
  onRedirectCallback(appState) {
    history.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }

  render() {
    return (
      <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        redirect_uri={window.location.origin}
        onRedirectCallback={this.onRedirectCallback}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <ApolloProvider client={client}>
              <JukeboxAppBar>
                <PrivateRoute exact path="/songs" component={SongsContainer} />
                <PrivateRoute exact path="/songs/:songId" component={SongContainer} />
                <PrivateRoute exact path="/artists/:artistId" component={ArtistContainer} />
                <PrivateRoute exact path="/albums/:albumId" component={AlbumContainer} />
                <PrivateRoute exact path="/playlists" component={PlaylistsContainer} />
                <PrivateRoute exact path="/playlists/:playlistId" component={PlaylistContainer} />
                <PrivateRoute exact path="/profile" component={Profile} />
              </JukeboxAppBar>
            </ApolloProvider>
          </BrowserRouter>
        </ThemeProvider>
      </Auth0Provider>
    );
  }
}

export default App;
