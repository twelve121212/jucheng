// import usercount from "../../state/user/userCount"
import userinfo from "../../state/user/userInfo"
// export function userCount(state=usercount,{type,payload}) {
//     state = JSON.parse(JSON.stringify(state));
//     if(type === "UP_USERCOUNT"){
//         state = payload
//     }
//     return state;
// }
export function userInfo(state=userinfo,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type === "UP_USERINFO"){
        state = payload
    }
    return state;
}
