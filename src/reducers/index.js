import { combineReducers } from "redux";
import userReducer from "./user-reducer";

const rootReducer = combineReducers({
    userList:userReducer
})

export default rootReducer;