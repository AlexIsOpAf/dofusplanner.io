import React, {Component} from "react";
import {Button} from "@material-ui/core";


class EquipmentHeader extends Component {

    getStyles = () => {
        return {
            backgroundColor: '#1f1f1f',
            width: '100%',
            textAlign: 'center',
            height: '5vh'
            // height: '45vh'
        }
    };

    render() {
        return (
            <div>
                <Button
                    label="Submit"
                    buttonStyle={{borderRadius: 50}}
                    style={{borderRadius: 100, backgroundColor: '#1f1f1f', width: '100%', height: '3vh'}}
                    variant="contained"
                    size="large"
                >
                </Button>
            </div>
        )
    }

}


export default EquipmentHeader;