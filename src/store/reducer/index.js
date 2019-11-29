import{
    combineReducers,
}from "redux";
import home from "./home";
import theater from "./theater"
import citychose from "./citychose"
export default combineReducers({
    home,
    theater,
    citychose,
})