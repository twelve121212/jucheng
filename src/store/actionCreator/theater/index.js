export const upTheater = payload=>(
    {
        type:"UP_THEATER",
        payload
    }
)
export default{
    getTheatreList(){
        return(dispatch)=>{
            this.$axios.get("./theatre/index/getTheatreList",{
                params:{
                    page:1,
                    version:"6.0.8",
                    referer:2,
                }
            }).then(({data})=>{
                // console.log(data)
                // console.log(3333,data.data.theatre_list)
                const {theatre_list,page,version,referer} = data.data;
                // console.log(22222,theatre_list)
                dispatch(upTheater({theatre_list,page,version,referer}))
            })
        }
    }
}