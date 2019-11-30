import stateInit from '../../state/showtype';
export default (state = stateInit,{type,payload})=>{
    state = JSON.parse(JSON.stringify(state));
    if(type === "UP_SHOWCATEGORY"){
        state.show_category_list = payload.show_category_list
    }
    if(type === "UP_SHOWLIST"){
        state.list = payload.list;
        state.page = payload.page;
        state.total = payload.total;
        state.active_id = payload.category;
    }
    if(type === "UP_CITY"){
        state.city_list = payload.city_list
    }
    return state;
}