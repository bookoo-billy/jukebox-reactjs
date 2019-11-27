import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import gql from "graphql-tag";
import React from 'react';
import { Query } from "react-apollo";
import { withRouter } from "react-router-dom";
import Song from './Song';

class SongContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Container maxWidth="xl">
                <Box my={4}>
                    <Query query={gql`
                        query Song($id: ID) {
                            songById(id: $id) {
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
                        variables={{ id: this.props.match.params.songId }}
                        >
                        {({ loading, error, data }) => {
                            if (loading) return <p>Loading...</p>;
                            if (error) {
                                console.log(error);
                                return <p>Error :(</p>;
                            }

                            return (
                                <div>
                                    <Song song={data.songById} />
                                </div>
                            );
                        }}
                    </Query>
                </Box>
            </Container>
        );
    }
}

export default withRouter(SongContainer);