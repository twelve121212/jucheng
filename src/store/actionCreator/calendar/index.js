export const getDay=payload=>(
    {
        type:"GET_DAY",
        payload,
    }
)
export default{
    getDay(){
        return(dispatch)=>{
            this.$axios.get("/Search/getCalendar",{
                params:{
                    year:2019,
                    month:11,
                    city:0,
                    category:0,
                    version:"6.0.8",
                    referer:2
                }
            }).then(({data})=>{
                const {calendar}=data.data;
                dispatch(getDay({calendar}))
            })
        }
    }
}