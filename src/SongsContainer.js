import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import gql from "graphql-tag";
import React from 'react';
import { Query } from "react-apollo";
import Search from './Search';
import Songs from './Songs';

class SongsContainer extends React.Component {

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
            <Container maxWidth="xl">
                <Box my={4}>
                    <Container><Box my={4}><Search handleOnChange={this.handleOnChange} /></Box></Container>
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
                        variables={{ search: this.state.search.value }}
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

export default SongsContainer;