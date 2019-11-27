import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import gql from "graphql-tag";
import React from 'react';
import { Query } from "react-apollo";
import { withRouter } from "react-router-dom";
import Playlists from './Playlists';

class PlaylistsContainer extends React.Component {

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
                            if (loading) return <CircularProgress color="secondary" />;
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