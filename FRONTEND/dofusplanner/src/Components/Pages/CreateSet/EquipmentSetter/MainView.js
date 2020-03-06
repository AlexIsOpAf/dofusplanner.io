import React, {Component} from "react";
import EquipmentHeader from "./EquipmentHeader";
import ItemInterface from "./ItemInterface";


class MainView extends Component {

    state = {
        handleParent: null,
        showStandardPage: null,
        buttonIdClicked: null
    };

    static getDerivedStateFromProps = (nextProps, prevState) => {
        return {
            handleParent: nextProps.handleState,
            showStandardPage: nextProps.showStandardPage,
            buttonIdClicked: prevState.buttonIdClicked
        };
    };

    handleStateInChild = (value) => {
        this.setState({
            ...this.state,
            buttonIdClicked: value
        });
    };

    getStyles = () => {
        return {
            width: '100%',
            textAlign: 'center',
            height: '100%'
        }
    };

    render() {
        return (
            <div style={{width: '100%'}}>
                <EquipmentHeader/>
                <div style={{display: "flex"}}>
                    <div style={{paddingTop: '10px', height: '80vh', flexGrow: 1}}>
                        <div style={this.getStyles()}>
                            <ItemInterface
                                handleState={this.state.handleParent}
                                buttonIdClicked={this.handleStateInChild}
                                showIDClicked={this.state.buttonIdClicked}
                                showStandardPage={this.state.showStandardPage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default MainView;