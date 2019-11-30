import {
    combineReducers
} from "redux"
import theater from "./theater";
import showtype from "./showtype";
export default combineReducers({
    theater,
    showtype
})