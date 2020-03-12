import React, {Component} from 'react';
import './App.css';
import Header from "./Components/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import CreateSet from "./Components/Pages/CreateSet/EquipmentSetter";
import {Provider} from 'react-redux';
import store from "./store";
import EquipmentConfiguration from "./Components/Pages/EquipmentConfiguration";


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <div>
                            <Route path="/" component={Header}/>
                        </div>
                        <Route exact path="/equipment/:ID" component={CreateSet}/>
                        <Route exact path="/equipmentConfiguration" component={EquipmentConfiguration}/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
