import { combineReducers } from "redux";
import contactReducer from "./contact-reducer";
import countReduce from "./counter-reducer";
import productReducer from "./product-reducer";
import asyncReducer from "./thunkgithub-reducer";
import userReducer from "./user-reducer";

const rootReducer = combineReducers({
    userList:userReducer,
    productReduce:productReducer,
    contactReduce:contactReducer,
    githubData:asyncReducer,
    counterReducer:countReduce
})

export default rootReducer;