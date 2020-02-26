import React from 'react';
import './App.css';
import Header from "./Components/Header";
import MainView from "./Components/MainView";
import StatMenuView from "./Components/StatMenuView";
import InformationMenuView from "./Components/InformationMenuView";
import Grid from "@material-ui/core/Grid";


// const navStyle = {
//     backgroundColor: '#1f1f1f',
//     color: '#fff',
// };

class App extends React.Component {
    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        return (

            <div className="App">
                <div>
                    <Header/>
                </div>

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
                    <Grid item xs={4}>
                        <div className="main-view-container">
                            <MainView/>
                        </div>
                    </Grid>
                    <Grid item>
                        <InformationMenuView/>
                    </Grid>
                </Grid>

            </div>
        );
    }
}

export default App;
