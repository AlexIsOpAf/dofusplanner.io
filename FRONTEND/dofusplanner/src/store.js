import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer'
import {promiseMiddleware} from "./Middleware";
import thunk from "redux-thunk";

const getMiddleware = () => {
    return applyMiddleware(promiseMiddleware, thunk);
};

const initialState = {};

const store = createStore(reducer, initialState, getMiddleware());

export default store;