export const upShowCategory = payload =>(
    {
        type:"UP_SHOWCATEGORY",
        payload
    }
)
export const upShowList = payload =>(
    {
        type:"UP_SHOWLIST",
        payload
    }
)
export const upCity = payload =>(
    {
        type:"UP_CITY",
        payload
    }
)
export default {
    getShowCateGory(){
        return (dispatch)=>{
            this.$axios.get("/m/Search/getShowCategory",{
                params:{
                    version:"6.0.8",
                    referer:2
                }
            }).then(({data})=>{
                const {show_category_list} = data.data;
                dispatch(upShowCategory({show_category_list}));
            })
        }
    },
    getShowList(city_id,category){
        return (dispatch)=>{
            this.$axios.get("/n/Show/Search/getShowList",{
                params:{
                    category,
                    city_id,
                    page:1,
                    keywords:'',
                    version:'6.0.8',
                    refer:2
                    
                }
            }).then(({data})=>{
                const {list,page,total,result_type} = data.data;
                dispatch(upShowList({list,page,total,result_type,category}));
            })
        }
    },
    getCity(){
        return (dispatch)=>{
            this.$axios.get("/m/Search/getCity",{
                params:{
                    version:"6.0.8",
                    referer:2
                }
            }).then(({data})=>{
                const {city_list} = data.data;
                dispatch(upCity({city_list}));
            })
        }
    }
    // listMore(pageNo = 1){
    //     return (dispatch)=>{
    //         this.$axios.get("/listmore.json",{
    //             params:{
    //                 pageNo,
    //                 pageSize:10
    //             }
    //         }).then(({data})=>{
    //             const {pageNo,pageSize,result} = data.content.data.page;
    //             dispatch(upPostion({pageNo,pageSize,result}))
    //         })
    //     }
    // }
}