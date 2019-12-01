import stateInit from "../../state/calendar";
export default(state=stateInit,{type,payload})=>{
    state=JSON.parse(JSON.stringify(state));
    if(type==="GET_DAY"){
        state.year=payload.year;
        state.month=payload.month;
        state.calendar=payload.calendar;
    }else if(type==="GET_CATEGORY"){
        state.show_category_list=payload.show_category_list;
    }else if(type==="GET_SHOWLIST"){
        state.list=payload.list
    }
    return state;
}