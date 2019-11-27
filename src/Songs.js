import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';
import { withRouter } from "react-router-dom";

class Songs extends React.Component {

    constructor(props) {
        super(props);
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
        this.handleMoreMenuClick = this.handleMoreMenuClick.bind(this);
        this.handleMoreMenuClose = this.handleMoreMenuClose.bind(this);
        this.handleMoreMenuListKeyDown = this.handleMoreMenuListKeyDown.bind(this);

        this.rowsPerPageOptions = (props.rowsPerPageOptions && props.rowsPerPageOptions.length > 0) ? props.rowsPerPageOptions : [10, 25, 50];

        this.state = {
            rowsPerPage: this.rowsPerPageOptions[0],
            page: 0
        }
    }

    handleMoreMenuClick(e, songId) {
        this.setState({
            moreMenu: songId,
            anchorEl: e.currentTarget
        });
    }

    handleMoreMenuClose(e, songId) {
        this.setState({
            moreMenu: undefined,
            anchorEl: undefined
        });
    }

    handleMoreMenuListKeyDown(e, songId) {
        this.setState({
            moreMenu: songId,
            anchorEl: e.currentTarget
        })
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
                            <TableCell align="left">Artist</TableCell>
                            <TableCell align="left">Album</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.props.songs.slice(pageStart, pageEnd).map(song => (
                                <TableRow key={song.id}>
                                    <TableCell component="th" scope="row">
                                        <Button color="primary" onClick={() => this.props.history.push(`/artists/${song.artist.id}`)}>
                                            {song.artist.name}
                                        </Button>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button onClick={() => this.props.history.push(`/albums/${song.album.id}`)}>
                                            {song.album.name}
                                        </Button>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button onClick={() => this.props.history.push(`/songs/${song.id}`)}>
                                            {song.name}
                                        </Button>
                                    </TableCell>
                                    <TableCell align="left">
                                        <IconButton onClick={(e) => this.handleMoreMenuClick(e, song.id)}>
                                            <MoreVertIcon />
                                        </IconButton>
                                        <Popper open={this.state.moreMenu == song.id} role={undefined} anchorEl={this.state.anchorEl} transition>
                                            {({ TransitionProps, placement }) => (
                                                <Grow
                                                    {...TransitionProps}
                                                    style={{ transformOrigin: placement === 'bottom' ? 'right top' : 'right bottom' }}
                                                >
                                                    <Paper>
                                                        <ClickAwayListener onClickAway={(e) => this.handleMoreMenuClose(e, song.id)}>
                                                            <MenuList autoFocusItem={this.state.moreMenu == song.id} id="menu-list-grow" onKeyDown={(e) => this.handleMoreMenuListKeyDown(e, song.id)}>
                                                                <MenuItem onClick={(e) => this.handleMoreMenuClose(e, song.id)}>Add to Playlist</MenuItem>
                                                                <MenuItem onClick={(e) => this.handleMoreMenuClose(e, song.id)}>Play next</MenuItem>
                                                            </MenuList>
                                                        </ClickAwayListener>
                                                    </Paper>
                                                </Grow>
                                            )}
                                        </Popper>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={this.rowsPerPageOptions}
                    component="div"
                    count={this.props.songs.length}
                    rowsPerPage={this.state.rowsPerPage}
                    page={this.state.page}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
            </Paper>
        );
    }
};

export default withRouter(Songs);