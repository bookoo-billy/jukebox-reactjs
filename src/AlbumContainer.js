import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import gql from "graphql-tag";
import React from 'react';
import { Query } from "react-apollo";
import Album from './Album';

class AlbumContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container maxWidth="xl">
                <Box my={4}>
                    <Query query={gql`
                    query Album($id: ID) {
                        albumById(id: $id) {
                            id
                            name
                            artist {
                                id
                                name
                            }
                            songs {
                                id
                                name
                                track
                            }
                        }
                    }
                    `}
                        variables={{ id: this.props.match.params.albumId }}
                    >
                        {({ loading, error, data }) => {
                            if (loading) return <p>Loading...</p>;
                            if (error) {
                                console.log(error);
                                return <p>Error :(</p>;
                            }

                            return (
                                <div>
                                    <Album album={data.albumById} />
                                </div>
                            );
                        }}
                    </Query>
                </Box>
            </Container>
        );
    }
}

export default AlbumContainer;