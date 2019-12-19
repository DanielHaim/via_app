import { combineReducers } from 'redux';
import * as reducers from "./common"

export const rootReducers = (state, action) => {
    if(action.type === "RESET"){
        return undefined
    }
    return combineReducers({...reducers})(state, action);
}