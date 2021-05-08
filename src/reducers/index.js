import { combineReducers } from "redux";
import productReducer from "./product-reducer";
import userReducer from "./user-reducer";

const rootReducer = combineReducers({
    userList:userReducer,
    productReduce:productReducer
})

export default rootReducer;