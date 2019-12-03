import {
    combineReducers
} from "redux";
import theater from "./theater";
import {userInfo} from "./user/index.js";
import showtype from "./showtype";
import home from "./home";
import citychose from "./citychose";
import search from "./search";
import calendar from "./calendar";
import showdetail from "./showdetail";
export default combineReducers({
    home,
    theater,
    userInfo,
    showtype,
    citychose,
    search,
    calendar,
    showdetail
})