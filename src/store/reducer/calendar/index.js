import stateInit from "../../state/calendar";
export default(state=stateInit,{type,payload})=>{
    state=JSON.parse(JSON.stringify(state));
    if(type==="GET_DAY"){
        state.calendar=payload.calendar;
    }
    return state;
}