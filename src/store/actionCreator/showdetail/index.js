export const upShowDetail = payload=>(
    {
        type:"UP_SHOWDETAIL",
        payload
    }
)
export default{
    getShowDetailList(schedular_id){
        return(dispatch)=>{
            this.$axios.get("/n/Schedule/Schedule/getScheduleInfo",{
                params:{
                    schedular_id,
                    version:"6.0.8",
                    referer:2,
                }
            }).then(({data})=>{
                console.log(2222222,data)
                // console.log(3333,data.data.theatre_list)
                const {item_list,static_data,share_data} = data.data;
                const{show_time_data,city,venue} = data.data.static_data
                dispatch(upShowDetail({item_list,static_data,share_data,schedular_id,show_time_data,city,venue}))
            })
        }
    }
}