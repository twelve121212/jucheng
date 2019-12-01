export const hotSearch = payload=>(
    {
        type:"HOT_SEARCH",
        payload
    }
)
export const searchResult = payload=>(
    {
        type:"SEARCH_RESULT",
        payload
    }
)
export default{
    getHotSearchList(){
        return(dispatch)=>{
            this.$axios.get("/n/Show/Search/getHotWord",{
                params:{
                    version:"6.0.8",
                    referer:1,
                }
            }).then(({data})=>{
                // console.log(3333,data.data)
                const hot_search_list = data.data;
                // console.log(22222,hot_search_list)
                dispatch(hotSearch({hot_search_list}))
            })
        }
    }, 
    getShowList(keywords,venue_id){
        // console.log(keywords)
        return(dispatch)=>{
            this.$axios.get("/n/Show/Search/getShowList",{
                params:{
                    keywords,
                    venue_id
                }
            }).then(({data})=>{
                console.log(data)
                // console.log(3333,data.data)
                const search_list = data.data.list;
                // console.log(22222,search_list)
                dispatch(searchResult({search_list}))
            })
        }
    }, 
}