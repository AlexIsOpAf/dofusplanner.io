import React, {Component} from 'react';
import './App.css';
import Header from "./Components/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import CreateSet from "./Components/Pages/CreateSet/EquipmentSetter";
import {Provider} from 'react-redux';
import store from "./store";


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <div>
                            <Route path="/" component={Header}/>
                        </div>
                        <Route exact path="/equipment" component={CreateSet}/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
