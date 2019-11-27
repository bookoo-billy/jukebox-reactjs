import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import React from 'react';
import { withRouter } from "react-router-dom";

class Playlists extends React.Component {

    constructor(props) {
        super(props);
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);

        this.rowsPerPageOptions =  (props.rowsPerPageOptions && props.rowsPerPageOptions.length > 0) ? props.rowsPerPageOptions : [10, 25, 50];

        this.state = {
            rowsPerPage: this.rowsPerPageOptions[0],
            page: 0
        }
    }

    handleChangePage(event, page) {
        this.setState({
            page
        });
    }

    handleChangeRowsPerPage(event) {
        this.setState({
            rowsPerPage: event.target.value
        });
    }

    render() {
        const pageStart = this.state.page * this.state.rowsPerPage;
        const pageEnd = pageStart + this.state.rowsPerPage;

        return (
            <Paper>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">ID</TableCell>
                            <TableCell align="left">Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.props.playlists.slice(pageStart, pageEnd).map(playlist => (
                                <TableRow key={playlist.id}>
                                    <TableCell component="th" scope="row">
                                        <Button color="primary" onClick={() => this.props.history.push(`/playlists/${playlist.id}`)}>
                                            {playlist.id}
                                        </Button>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button onClick={() => this.props.history.push(`/playlists/${playlist.id}`)}>
                                            {playlist.name}
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={this.rowsPerPageOptions}
                    component="div"
                    count={this.props.playlists.length}
                    rowsPerPage={this.state.rowsPerPage}
                    page={this.state.page}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
            </Paper>
        );
    }
};

export default withRouter(Playlists);