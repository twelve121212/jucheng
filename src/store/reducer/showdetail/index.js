import stateInit from '../../state/showdetail';
export default (state = stateInit,{type,payload})=>{
    state = JSON.parse(JSON.stringify(state));
    if(type === "UP_SHOWDETAIL"){
        state.item_list = payload.item_list;
        state.share_data = payload.share_data;
        state.static_data = payload.static_data;
        state.schedular_id = payload.schedular_id;
        state.show_time_data = payload.show_time_data
        state.city = payload.city;
        state.venue = payload.venue;
    }
    return state;
}