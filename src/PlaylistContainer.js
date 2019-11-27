import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import gql from "graphql-tag";
import React from 'react';
import { Query } from "react-apollo";
import Playlist from './Playlist';

class PlaylistContainer extends React.Component {

    render() {
        return (
            <Container maxWidth="xl">
                <Box my={4}>
                    <Query query={gql`
                    query Playlist($id: ID) {
                        playlistById(id: $id) {
                            id
                            name
                            items {
                                timestamp
                                song {
                                    id
                                    name
                                    artist {
                                        id
                                        name
                                    }
                                    album {
                                        id
                                        name
                                    }
                                }
                            }
                        }
                    }
                    `}
                        variables={{ id: this.props.match.params.playlistId }}
                    >
                        {({ loading, error, data }) => {
                            if (loading) return <CircularProgress color="secondary" />;
                            if (error) {
                                console.log(error);
                                return <p>Error :(</p>;
                            }

                            return (
                                <div>
                                    <Playlist playlist={data.playlistById} />
                                </div>
                            );
                        }}
                    </Query>
                </Box>
            </Container>
        );
    }
}

export default PlaylistContainer;