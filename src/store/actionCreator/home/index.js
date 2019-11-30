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
export default{
    getPriority(){
        return(dispatch)=>{
            this.$axios.get("/n/vip/index/getVipHomeSchedular",{
                params:{
                    version:"6.0.8",
                    referer:2,
                }
            }).then(({data})=>{
                const {priorList,version,referer}=data.data;
                dispatch(getPriority({priorList,version,referer}))
            })
        }
    },
    getHostShow(){
        return(dispatch)=>{
            this.$axios.get("/n/home/index/getHotsRecommendList",{
                params:{
                    city_id:0,
                    version:"6.0.8",
                    referer:2,
                }
            }).then(({data})=>{
                const {hots_show_list,version,referer}=data.data;
                dispatch(getHostShow({hots_show_list,version,referer}))
            })
        }
    },
    getTourList(){
        return(dispatch)=>{
            this.$axios.get("/n/home/index/getTourRecommendList",{
                params:{
                    city_id:0,
                    version:"6.0.8",
                    referer:2,
                }
            }).then(({data})=>{
                const {tour_show_list,version,referer}=data.data;
                dispatch(getTourList({tour_show_list,version,referer}))
            })
        }
    },
    getVipDiscount(){
        return(dispatch)=>{
            this.$axios.get("/n/vip/index/getVipHomeSchedular",{
                params:{
                    version:"6.0.8",
                    referer:2,
                }
            }).then(({data})=>{
                const{allList,discountList,version,referer}=data.data;
                dispatch(getVipDiscount({allList,discountList,version,referer}))
            })
        }
    },
    getShowTypeList(){
        return(dispatch)=>{
            this.$axios.get("/n/home/index/getFloorShow",{
                params:{
                    city_id:0,
                    version:"6.0.8",
                    referer:2,
                }
            }).then(({data})=>{
                const showTypeList=data.data;
                dispatch(getShowTypeList({showTypeList}))
            })
        }
    },
    getPicNav(){
        return(dispatch)=>{
            this.$axios.get("/n/home/index/getClassifyHome",{
                params:{
                    city_id:0,
                    abbreviation:null,
                    version:"6.0.8",
                    referer:2,
                }
            }).then(({data})=>{
                const {classify_list}=data.data;
                dispatch(getPicNav({classify_list}))
            })
        }
    }
}