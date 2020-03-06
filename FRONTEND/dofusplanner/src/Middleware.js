import {ASYNC_END, ASYNC_START} from "./Constants/ActionTypes";


const promiseMiddleware = store => next => action => {
    if (isPromise(action.payload)) {
        store.dispatch({
            type: ASYNC_START, subtype: action.type
        });

        action.payload.then(
            response => {
                const currentState = store.getState();
                action.payload = response;

                store.dispatch({
                    type: ASYNC_END, promise: action.payload
                });
                store.dispatch(action)
            },
            error => {
                console.log('Error:   ', error)
            }
        );
        return
    }
    next(action);
};


function isPromise(v) {
    return v && typeof v.then === 'function';
}

export {promiseMiddleware}