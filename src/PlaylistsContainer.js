import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import gql from "graphql-tag";
import React from 'react';
import { Query } from "react-apollo";
import Playlists from './Playlists';
import { withRouter } from "react-router-dom";

class PlaylistsContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const search = this.props.location.search;
        const params = new URLSearchParams(search);
        const query = params.get('query');

        return (
            <Container maxWidth="xl">
                <Box my={4}>
                    <Query query={gql`
                            query Playlists($search: String) {
                                searchPlaylists(search: $search) {
                                    id
                                    name
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
                                    <Playlists playlists={data.searchPlaylists} />
                                </div>
                            );
                        }}
                    </Query>
                </Box>
            </Container>
        );
    }
}

export default withRouter(PlaylistsContainer);