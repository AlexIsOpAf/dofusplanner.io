import * as React from "react";
import {connect} from "react-redux";
import Axios from "../../Axios";
import {GET_EQUIPMENT} from "../../Constants/ActionTypes";
import Fade from "@material-ui/core/Fade";
import ItemPoolButtonGenerator from "../../Libs/ItemPoolGrids/ItemPoolGrids";
import {v4 as uuidv4} from 'uuid';


const mapStateToProps = state => ({
    ...state.equipment
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({type: GET_EQUIPMENT, payload})
});


class ItemPoolMain extends React.Component {

    componentDidMount() {
        console.log(uuidv4());
        const equipmentPromise = Axios.Equipment.getAllByType(this.props.ID);
        this.props.onLoad(equipmentPromise);
    }

    //Swap equipment header for an input box
    render() {
        return (
            <Fade in={!this.props.showStandardPage}>
                <ItemPoolButtonGenerator handleState={this.props.handleState}/>
            </Fade>
        )
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(ItemPoolMain);