import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import gql from "graphql-tag";
import React from 'react';
import { Query } from "react-apollo";
import Artist from './Artist';

class ArtistContainer extends React.Component {

    render() {
        return (
            <Container maxWidth="xl">
                <Box my={4}>
                    <Query query={gql`
                    query Artist($id: ID) {
                        artistById(id: $id) {
                            id
                            name
                            albums {
                                id
                                name
                                songs {
                                    id
                                    name
                                    track
                                }
                            }
                        }
                    }
                    `}
                        variables={{ id: this.props.match.params.artistId }}
                    >
                        {({ loading, error, data }) => {
                            if (loading) return <CircularProgress color="secondary" />;
                            if (error) {
                                console.log(error);
                                return <p>Error :(</p>;
                            }

                            return (
                                <div>
                                    <Artist artist={data.artistById} />
                                </div>
                            );
                        }}
                    </Query>
                </Box>
            </Container>
        );
    }
}

export default ArtistContainer;