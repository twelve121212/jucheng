import stateInit from "../../state/search"
export default (state = stateInit,{type,payload})=>{
    // console.log(77777777777777,payload)
    state = JSON.parse(JSON.stringify(state));
    if(type === "HOT_SEARCH"){
        state.hot_search_list = payload.hot_search_list
        // console.log(666666666666,payload)
    }
    if(type === "SEARCH_RESULT"){
        state.search_list = payload.search_list
        // console.log(666666666666,payload)
    }
    return state;
}