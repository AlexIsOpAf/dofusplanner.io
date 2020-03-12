import React, {Component} from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import {Add, Home} from "@material-ui/icons";
import {Link} from "react-router-dom";


class Header extends Component {
    state = {
        activeTab: 0,
        navBarRouting: false
    };

    static getDerivedStateFromProps = (nextProps, prevState) => {
        if (nextProps.location.pathname === '/home') {
            return {
                activeTab: 0,
                navBarRouting: true
            }
        } else {
            return {
                activeTab: 1,
                navBarRouting: true
            }
        }
    };


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


    handleChange = (e, newValue) => {
        if (this.state.activeTab === newValue) {
            return;
        }
        this.setState({activeTab: newValue});
        this.setState({navBarRouting: true})
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
                        <Tab component={Link} to="/home" index={0} icon={<Home/>}/>
                        <Tab component={Link} to="/equipmentConfiguration" index={1} icon={<Add/>}/>
                    </Tabs>
                </Paper>
            </div>
        );
    }
}

export default Header;