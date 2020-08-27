import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";


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


export const SpellsMenu = props => {

    const classes = useStyles();

    return (
        <div style={{paddingTop: '5%'}} >
            <Typography variant="h6" className={classes.headers} color="inherit">Spells</Typography>
        </div>
    )
};