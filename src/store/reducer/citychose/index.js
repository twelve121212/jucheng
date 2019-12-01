import stateInit from "../../state/citychose"
export default (state = stateInit,{type,payload})=>{
    // console.log(77777777777777,payload)
    state = JSON.parse(JSON.stringify(state));
    if(type === "UP_HOTCITY"){
        state.hot_city_List = payload.hot_city_List
        // console.log(666666666666,payload)
    }
    if(type === "UP_CITY"){
        state.hot_List = payload.hot_List
    }
    if(type === "GPS_CITY"){
        state.gpsCity = payload.gpsCity
    }
    return state;
}