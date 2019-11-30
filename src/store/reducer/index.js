import {
    combineReducers
} from "redux"
import theater from "./theater"
import {userInfo} from "./user/index.js"
export default combineReducers({
    theater,
    userInfo
})