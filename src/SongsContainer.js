import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import gql from "graphql-tag";
import React from 'react';
import { Query } from "react-apollo";
import Search from './Search';
import Songs from './Songs';
import { withRouter } from "react-router-dom";

class SongsContainer extends React.Component {

    constructor(props) {
        super(props);

        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    handleSearchSubmit(event) {
        if (event.key === "Enter") {
            this.props.history.push(`/songs?query=${event.target.value}`);        
        }
    }

    render() {
        const search = this.props.location.search;
        const params = new URLSearchParams(search);
        const query = params.get('query');

        return (
            <Container maxWidth="xl">
                <Box my={4}>
                    <Container><Box my={4}><Search handleSearchSubmit={this.handleSearchSubmit} /></Box></Container>
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
                        variables={{ search: query }}
                    >
                        {({ loading, error, data }) => {
                            if (loading) return <p>Loading...</p>;
                            if (error) {
                                console.log(error);
                                return <p>Error :(</p>;
                            }

                            return (
                                <div>
                                    <Songs songs={data.searchSongs} />
                                </div>
                            );
                        }}
                    </Query>
                </Box>
            </Container>
        );
    }
}

export default withRouter(SongsContainer);