import stateInit from "../../state/home";
export default(state=stateInit,{type,payload})=>{
    state=JSON.parse(JSON.stringify(state));
    if(type==="GET_PRIORITY"){
        state.priorList=payload.priorList;
    }else if(type==="GET_HOSTSHOW"){
        state.hots_show_list=payload.hots_show_list;
    }else if(type==="GTE_TOURLIST"){
        state.tour_show_list=payload.tour_show_list;
    }else if(type==="GET_VIPDISCOUNT"){
        state.allList=payload.allList;
        state.discountList=payload.discountList;
    }else if(type==="GET_SHOWTYPELIST"){
        state.showTypeList=payload.showTypeList;
    }else if(type==="GET_PICNAV"){
        state.classify_list=payload.classify_list;
    }else if(type==="GET_SHOWLIST"){
        state.list=payload.list
    }
    return state;
}