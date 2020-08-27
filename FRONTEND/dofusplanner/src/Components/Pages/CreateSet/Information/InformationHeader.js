import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
    root: {
        // display: 'flex',
        width: '100%'
    },
    headers: {
        fontWeight: 'bold',
        color: '#bbbbbb'
    },
    headerInformationInput: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    }
}));

const HeaderForInformation = props => {

    const classes = useStyles();

    return (
        <div style={{display: 'flex'}}>
            <form className={classes.headerInformationInput} noValidate autoComplete="off">
                <TextField style={{}} id="standard-basic" label="Name"/>
                <TextField id="standard-basic" type="number" label="Level"/>
            </form>
        </div>
    )
};


export const InformationHeader = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h6" className={classes.headers} color="inherit">Character ID</Typography>
            <HeaderForInformation/>
        </div>
    )
};