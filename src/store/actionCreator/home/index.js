export const getPriority=payload=>(
    {
        type:"GET_PRIORITY",
        payload,
    }
)
export const getHostShow=payload=>(
    {
        type:"GET_HOSTSHOW",
        payload,
    }
)
export const getTourList=payload=>(
    {
        type:"GTE_TOURLIST",
        payload,
    }
)
export const getVipDiscount=payload=>(
    {
        type:"GET_VIPDISCOUNT",
        payload
    }
)
export const getShowTypeList=payload=>(
    {
        type:"GET_SHOWTYPELIST",
        payload
    }
)
export const getPicNav=payload=>(
    {
        type:"GET_PICNAV",
        payload
    }
)
export const getShowList=payload=>({
    type:"GET_SHOWLIST",
    payload,
})
export default{
    getPriority(city_id=0){
        return(dispatch)=>{
            this.$axios.get("/n/vip/index/getVipHomeSchedular",{
                params:{
                    city_id,
                    version:"6.0.8",
                    referer:2,
                }
            }).then(({data})=>{
                const {priorList}=data.data;
                dispatch(getPriority({priorList}))
            })
        }
    },
    getHostShow(city_id=0){
        return(dispatch)=>{
            this.$axios.get("/n/home/index/getHotsRecommendList",{
                params:{
                    city_id,
                    version:"6.0.8",
                    referer:2,
                }
            }).then(({data})=>{
                const {hots_show_list}=data.data;
                dispatch(getHostShow({hots_show_list}))
            })
        }
    },
    getTourList(city_id=0){
        return(dispatch)=>{
            this.$axios.get("/n/home/index/getTourRecommendList",{
                params:{
                    city_id,
                    version:"6.0.8",
                    referer:2,
                }
            }).then(({data})=>{
                const {tour_show_list,version,referer}=data.data;
                dispatch(getTourList({tour_show_list,version,referer}))
            })
        }
    },
    getVipDiscount(city_id=0){
        return(dispatch)=>{
            this.$axios.get("/n/vip/index/getVipHomeSchedular",{
                params:{
                    city_id,
                    version:"6.0.8",
                    referer:2,
                }
            }).then(({data})=>{
                const{allList,discountList,version,referer}=data.data;
                dispatch(getVipDiscount({allList,discountList,version,referer}))
            })
        }
    },
    getShowTypeList(city_id=0){
        return(dispatch)=>{
            this.$axios.get("/n/home/index/getFloorShow",{
                params:{
                    city_id,
                    version:"6.0.8",
                    referer:2,
                }
            }).then(({data})=>{
                const showTypeList=data.data;
                dispatch(getShowTypeList({showTypeList}))
            })
        }
    },
    getPicNav(city_id=0){
        console.log(city_id)
        return(dispatch)=>{
            this.$axios.get("/n/home/index/getClassifyHome",{
                params:{
                    city_id,
                    abbreviation:null,
                    version:"6.0.8",
                    referer:2,
                }
            }).then(({data})=>{
                const {classify_list,slide_list}=data.data;
                dispatch(getPicNav({classify_list,slide_list}))
            })
        }
    },
    getShowList(){
        return(dispatch)=>{
            this.$axios.get("/n/Show/Search/getShowList",{
                params:{
                    city_id:0,
                    page:1,
                    version:"6.0.8",
                    referer:2
                }
            }).then(({data})=>{
                const {list}=data.data;
                console.log(66,list);
                dispatch(getShowList({list}));
            })
        }
    }
}