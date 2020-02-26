import React, {Component} from "react";
import {Card} from "@material-ui/core";
import ItemInterface from "./ItemInterface";


class EquipmentBody extends Component {

    getStyles = () => {
        return {
            backgroundColor: '#1f1f1f',
            width: '100%',
            textAlign: 'center',
            height: '100%'
        }
    };

    render() {
        return (
            <div style={{paddingTop: '10px', height: '80vh', flexGrow: 1}}>
                <Card color="primary" style={this.getStyles()} elevation={1}>
                    <div style={{borderBottom: '0.05vh #2e2e2e double', paddingTop: '3%'}}>

                    </div>
                    <div style={{flexBasis: '1'}}>
                        <ItemInterface/>
                    </div>
                </Card>
            </div>
        )
    }

}


export default EquipmentBody;