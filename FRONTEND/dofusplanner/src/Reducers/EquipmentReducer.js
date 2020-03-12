import {
    ASYNC_START,
    GET_EQUIPMENT, RETURN_ITEM, RETURN_PICTURE
} from "../Constants/ActionTypes";

const initial = {};

/* Default value being the initial state */
export default (state = initial, action) => {
    switch (action.type) {
        case GET_EQUIPMENT: {
            return {
                ...state,
                equipment: action.payload.data
            };
        }

        case RETURN_ITEM:
            return {
                ...state
            };

        case RETURN_PICTURE:
            return {
                ...state,
                picture: action.payload.data
            };


        case ASYNC_START:
            return {
                ...state
            };

        default:
            return state
    }
}