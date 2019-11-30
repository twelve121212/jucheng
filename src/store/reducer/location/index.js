import stateInit from "../../state/location"
export default (state = stateInit,{type,payload})=>{
    state = JSON.parse(JSON.stringify(state));
    if(type === "UP_LOCATION"){
        state.city = payload.city
    }
    return state;
}