import React, {Component} from "react";
import {Button} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";


class EquipmentHeader extends Component {

    getTitleStyles = () => {
        return (
            {
                position: 'relative',
            }
        )
    };


    render() {
        return (
            <div>
                <Button
                    label="Submit"
                    buttonstyle={{borderRadius: 50}}
                    style={{borderRadius: 100, backgroundColor: '#1f1f1f', width: '100%', height: '3vh'}}
                    variant="contained"
                    size="large"
                >
                    <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        style={this.getTitleStyles()}
                    >

                    </Typography>
                </Button>
            </div>
        )
    }

}


export default EquipmentHeader;