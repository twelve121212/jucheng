export const upHotCity = payload=>(
    {
        type:"UP_HOTCITY",
        payload
    }
)
export const upCity = payload=>(
    {
        type:"UP_CITY",
        payload
    }
)
export default{
    getHotCityList(){
        return(dispatch)=>{
            this.$axios.get("/n/city/city/getHotCityList",{
                params:{
                    version:"6.0.8",
                    referer:1,
                }
            }).then(({data})=>{
                // console.log(data)
                const {hot_city_List} = data.data;
                console.log(11111111111111,hot_city_List)
                dispatch(upHotCity({hot_city_List}))
            })
        }
    },
    getCityList(){
        return(dispatch)=>{
            this.$axios.get("/n/city/city/getSortedCityList",{
                params:{
                    version:"6.0.8",
                    referer:1,
                }
            }).then(({data})=>{
                // console.log(data)
                const hot_List = data.data;
                console.log(2222222222222222,hot_List)
                dispatch(upCity({hot_List}))
            })
        }
    }
}