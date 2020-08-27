import React, {Component} from "react";
import EquipmentHeader from "./EquipmentHeader";
import ItemInterface, {thirdArrayRow} from "./ItemInterface";
import EquipmentButton from "../../../../Libs/Button/button";


class MainView extends Component {

    state = {
        handleParent: null,
        showStandardPage: null,
    };

    static getDerivedStateFromProps = (nextProps, prevState) => {
        return {
            handleParent: nextProps.handleState,
            showStandardPage: nextProps.showStandardPage,
        };
    };

    getStyles = () => {
        return {
            width: '100%',
            textAlign: 'center',
            height: '100%'
        }
    };

    RenderHeader = () => {
        if (!this.props.showStandardPage) {
            return null
        }

        return (
            <EquipmentHeader/>
        )
    };


    render() {
        return (
            <div style={{width: '100%'}}>
                {this.RenderHeader()}
                <ItemInterface
                    handleState={this.state.handleParent}
                    showIDClicked={this.state.buttonIdClicked}
                    showStandardPage={this.state.showStandardPage}
                    imageSource={this.props.currentImageSource}
                />
                <div>
                    <EquipmentButton
                        style={{flexWrap : 'inherit'}}
                        props={thirdArrayRow}
                        handleState={this.state.handleParent}
                        buttonIDChange={this.state.buttonIdClicked}
                    />
                </div>
            </div>
        )
    }

}


export default MainView;