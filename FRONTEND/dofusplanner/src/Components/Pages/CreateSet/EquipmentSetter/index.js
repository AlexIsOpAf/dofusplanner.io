import React from "react";
import StatMenuView from "../../../StatMenuView";
import MainView from "./MainView";
import InformationMenuView from "../../../InformationMenuView";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
import ItemPoolMain from "../../../ItemPool/ItemPoolMain";


class CreateSet extends React.Component {

    state = {
        loadedIn: null,
        buttonIdClicked: null
    };

    static getDerivedStateFromProps = (nextProps, prevState) => {
        if (prevState.loadedIn === null) {
            return {
                loadedIn: true,
            }
        } else {
            return {
                loadedIn: prevState.loadedIn,
                buttonIdClicked: prevState.buttonIdClicked
            };
        }
    };

    handleStateInChild = (value, Idnumber) => {
        console.log(Idnumber);
        this.setState({
            loadedIn: value,
            buttonIdClicked: Idnumber
        });
    };

    standardItemPage = () => {
        if (this.state.loadedIn === false) {
            return (
                <ItemPoolMain ID={this.state.buttonIdClicked}/>
            )
        }

        return null;
    };

    render() {
        return (
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
                        <Fade in={this.state.loadedIn}>
                            <MainView handleState={this.handleStateInChild} showStandardPage={this.state.loadedIn}/>
                        </Fade>

                        <Fade in={this.state.loadedIn === false}>
                            {this.standardItemPage()}
                        </Fade>

                    </div>
                </Grid>
                <Grid item>
                    <InformationMenuView/>
                </Grid>
            </Grid>
        )
    }
}


export default CreateSet;
