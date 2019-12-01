import {
    combineReducers
} from "redux"
import theater from "./theater";
import showtype from "./showtype";
import home from "./home";
import citychose from "./citychose";
import search from "./search"
import calendar from "./calendar"
export default combineReducers({
    home,
    theater,
    citychose,
    search,
    calendar,
    showtype,
})