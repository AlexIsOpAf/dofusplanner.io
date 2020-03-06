import {
    ASYNC_START,
    GET_EQUIPMENT
} from "../Constants/ActionTypes";

const initial = {};

/* Default value being the initial state */
export default (state = initial, action) => {
    switch (action.type) {
        case GET_EQUIPMENT: {
            console.log(action.payload.data);
            return {
                ...state,
                equipment: action.payload.data
            };
        }


        case ASYNC_START:
            return {
                ...state
            };

        default:
            return state
    }
}