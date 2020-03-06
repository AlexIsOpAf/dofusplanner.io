import * as React from "react";
import {connect} from "react-redux";
import Axios from "../../Axios";
import {GET_EQUIPMENT} from "../../Constants/ActionTypes";


const mapStateToProps = state => ({
    ...state.equipment
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({type: GET_EQUIPMENT, payload})
});


class ItemPoolMain extends React.Component {

    componentDidMount() {
        const equipmentPromise = Axios.Equipment.getAllByType(this.props.ID);
        this.props.onLoad(equipmentPromise);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props);
    }


    render() {
        return (
            <div>
                <p>Hello</p>
            </div>
        )
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(ItemPoolMain);