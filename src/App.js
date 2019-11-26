import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import React from 'react';
import { ApolloProvider, Query } from "react-apollo";
import Album from './Album';
import './App.css';
import Artist from './Artist';
import Search from './Search';
import Songs from './Songs';

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql/"
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      search: {
        value: ""
      }
    };
  }

  handleOnChange(event) {
    this.setState({
      search: {
        value: event.target.value
      }
    });
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Search handleOnChange={this.handleOnChange} />
          <Query query={gql`
          query Songs($search: String) {
            searchSongs(search: $search) {
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
        variables={{search: this.state.search.value}}
          >
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) {
                console.log(error);
                return <p>Error :(</p>;
              }

              return (
                <div>
                  <Artist />
                  <Album />
                  <Songs songs={data.searchSongs} />
                </div>
              );
            }}
          </Query>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
