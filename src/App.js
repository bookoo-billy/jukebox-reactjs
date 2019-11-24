import React from 'react';
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Songs from './Songs';
import Search from './Search';

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql/"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Search />
        <Songs />
      </div>
    </ApolloProvider>
  );
}

export default App;
