import {
    combineReducers
} from "redux"
import theater from "./theater";
import showtype from "./showtype";
import home from "./home";
import citychose from "./citychose";
export default combineReducers({
    home,
    theater,
    showtype,
    citychose
})