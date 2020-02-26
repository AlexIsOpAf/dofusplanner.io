import React, {Component} from "react";
import {Card} from "@material-ui/core";
import EquipmentHeader from "./EquipmentSetter/EquipmentHeader";
import EquipmentBody from "./EquipmentSetter/EquipmentBody";
import Paper from "@material-ui/core/Paper";


class MainView extends Component {
    render() {
        return (
            <div style={{width: '100%'}}>
                <EquipmentHeader/>
                <div style={{display: "flex"}}>
                    <EquipmentBody/>
                </div>
            </div>
        )
    }

}


export default MainView;
// 333435
// <div style={{flexGrow: '1'}}>
//     <Grid container spacing={3}>
//         <Grid item xs={3}>
//             <Paper style={{textAlign: 'center', }} ></Paper>
//         </Grid>
//     </Grid>
// </div>