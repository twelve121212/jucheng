import stateInit from "../../state/home";
export default(state=stateInit,{type,payload})=>{
    state=JSON.parse(JSON.stringify(state));
    if(type==="GET_PRIORITY"){
        state.priorList=payload.priorList;
    }
    return state;
}