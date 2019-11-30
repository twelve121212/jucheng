import {
    combineReducers
} from "redux"
import theater from "./theater";
import showtype from "./showtype";
import home from "./home";
import citychose from "./citychose"
import calendar from "./calendar"
export default combineReducers({
    home,
    theater,
    citychose,
    calendar,
    showtype,
})