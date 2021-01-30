import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";

// reducer list
import authentication from "./reducers/AuthReducer";
import alert from "./reducers/AlertReducer";

// epic list
import {
    RequestAuthMiddleware,
    RequestLogOutMiddleware
} from "./epic/EpicLogin";


export const rootReducers = combineReducers({
    authentication,
    alert
});


export const setupEpicCombines = combineEpics(
    RequestAuthMiddleware,
    RequestLogOutMiddleware
);
