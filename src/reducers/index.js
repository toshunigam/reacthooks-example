import { combineReducers } from "redux";
import contactReducer from "./contact-reducer";
import productReducer from "./product-reducer";
import userReducer from "./user-reducer";

const rootReducer = combineReducers({
    userList:userReducer,
    productReduce:productReducer,
    contactReduce:contactReducer
})

export default rootReducer;