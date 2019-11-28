import stateInit from "../../state/theater"
export default (state = stateInit,{type,payload})=>{
    state = JSON.parse(JSON.stringify(state));
    if(type === "UP_THEATER"){
        state.theatre_list = payload.theatre_list
    }
    return state;
}