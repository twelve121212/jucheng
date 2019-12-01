import {
    combineReducers
} from "redux"
<<<<<<< HEAD
import theater from "./theater"
import {userInfo} from "./user/index.js"
=======
import theater from "./theater";
import showtype from "./showtype";
import home from "./home";
import citychose from "./citychose";
>>>>>>> 7c325ba0de718de7b1fbddeb7ed865d1bd8a9684
export default combineReducers({
    home,
    theater,
<<<<<<< HEAD
    userInfo
=======
    showtype,
    citychose
>>>>>>> 7c325ba0de718de7b1fbddeb7ed865d1bd8a9684
})