import React from "react";
import StatMenuView from "../../../StatMenuView";
import MainView from "./MainView";
import InformationMenuView from "../../../InformationMenuView";
import Grid from "@material-ui/core/Grid";
import Fade from '@material-ui/core/Fade';


class CreateSet extends React.Component {

    state = {
        loadedIn: null
    };

    static getDerivedStateFromProps = (nextProps, prevState) => {
        if (prevState.loadedIn === null) {
            return {
                loadedIn: true
            }
        }  else {
            return {
                loadedIn: prevState.loadedIn
            };
        }
    };

    handleStateInChild = (value) => {
        this.setState({
            loadedIn: value
        });
    };

    render() {
        return (
            <Fade in={this.state.loadedIn}>
                <Grid
                    style={{paddingTop: '2%', justifyItems: 'center'}}
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="stretch"
                >

                    <Grid item>
                        <StatMenuView/>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="main-view-container">
                            <MainView handleState={this.handleStateInChild} showStandardPage={this.state.loadedIn}/>
                        </div>
                    </Grid>
                    <Grid item>
                        <InformationMenuView/>
                    </Grid>
                </Grid>
            </Fade>
        )
    }
}


export default CreateSet;
