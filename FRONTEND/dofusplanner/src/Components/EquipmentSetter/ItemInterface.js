import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import StatMenuView from "../StatMenuView";
import MainView from "../MainView";
import InformationMenuView from "../InformationMenuView";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(6),
        textAlign: "center",
        color: '#1f1f1f',
        backgroundColor: '#444444'
    }
}));

export default function EquipmentBody() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid
                style={{paddingTop: '2%', justifyItems: 'center'}}
                container
                direction="row"
                justify="space-between"
                alignItems="stretch"
            >
                <Grid item>
                    <Paper className={classes.paper}>item</Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>middle</Paper>
                </Grid>
                <Grid item>
                    <Paper className={classes.paper}>item</Paper>
                </Grid>
            </Grid>
        </div>
    );
}