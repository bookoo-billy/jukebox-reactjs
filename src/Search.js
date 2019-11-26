import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { debounce } from 'lodash';
import React from 'react';



class Search extends React.Component {

    constructor(props) {
        super(props);
    }

    useStyles() {
        return makeStyles(theme => ({
            margin: {
                margin: theme.spacing(1),
            },
        }));
    }

    render() {
        const classes = this.useStyles();

        return (
            <FormControl className={classes.margin}>
                <InputLabel htmlFor="input-with-icon-adornment">Search</InputLabel>
                <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    }
                    onChange={this.props.handleOnChange}
                />
            </FormControl>
        );
    }
}

export default Search;