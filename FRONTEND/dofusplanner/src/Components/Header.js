import React, {Component} from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import {Add, Home} from "@material-ui/icons";


class Header extends Component {
    getStyle = () => {
        return {
            borderTop: '0.05vh #2e2e2e double',
            background: '#1f1f1f',
            borderBottom: '0.05vh #2e2e2e double',
        }
    };

    getNavStyle = () => {
        return {
            backgroundColor: '#1f1f1f',
            color: '#ccc',
            minHeight: '100%',
            maxHeight: '100%',
        }
    };

    state = {
        activeTab: 0
    };

    toggleTabs = tab => () => {
        if (this.state.activeTab !== tab) {
            this.setState({activeTab: tab})
        }
    };


    render() {
        return (
            <div>
                <Paper style={this.getStyle()}>
                    <Tabs
                        value={this.state.activeTab}
                        onChange={this.handleChange}
                        indicatorColor={"primary"}
                        centered
                        variant="standard"
                        style={this.getNavStyle()}
                    >
                        <Tab icon={<Home/>} onClick={this.toggleTabs(0)}/>
                        <Tab icon={<Add/>} onClick={this.toggleTabs(1)}/>
                    </Tabs>
                </Paper>
            </div>
        );
    }
}

export default Header;