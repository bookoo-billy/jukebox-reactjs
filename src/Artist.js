import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

const Artist = (props) => {

    const classes = useStyles();

    return (<p className={classes}>TODO</p>);
};

export default Artist;