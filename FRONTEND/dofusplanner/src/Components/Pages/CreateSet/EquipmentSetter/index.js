import React from "react";
import StatMenuView from "../../../StatMenuView";
import MainView from "./MainView";
import InformationMenuView from "../../../InformationMenuView";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
import ItemPoolMain from "../../../ItemPool/ItemPoolMain";
import {Collapse} from "@material-ui/core";


class CreateSet extends React.Component {

    state = {
        loadedIn: false,
        buttonIdClicked: null,
        currentSelectedChar: null
    };

    static getDerivedStateFromProps = (nextProps, prevState) => {
        if (prevState.buttonIdClicked === null) {
            return {
                loadedIn: true,
                currentSelectedChar: nextProps.match.params['ID']
            }
        } else {
            return {
                loadedIn: prevState.loadedIn,
                buttonIdClicked: prevState.buttonIdClicked
            };
        }
    };

    handleStateInChild = (value, Idnumber) => {
        this.setState({
            loadedIn: value,
            buttonIdClicked: Idnumber,
        });
    };

    standardItemPage = () => {
        if (this.state.loadedIn) {
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

                        <Grid item>
                            <MainView handleState={this.handleStateInChild} showStandardPage={this.state.loadedIn}
                                      currentImageSource={this.state.currentSelectedChar}/>
                        </Grid>
                        <Grid item>
                            <InformationMenuView/>
                        </Grid>
                    </Grid>
                </Fade>
            )
        }

        return (
            <Collapse in={!this.state.loadedIn}>

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
                        <ItemPoolMain ID={this.state.buttonIdClicked} handleState={this.handleStateInChild}
                                      showStandardPage={this.state.loadedIn}/>
                    </Grid>
                    <Grid item>
                        <InformationMenuView/>
                    </Grid>
                </Grid>
            </Collapse>
        );
    };


    render() {
        return (
            <React.Fragment>
                {this.standardItemPage()}
            </React.Fragment>
        )
    }
}


export default CreateSet;
