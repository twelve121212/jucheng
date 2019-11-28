export const getPriority=payload=>(
    {
        type:"GET_PRIORITY",
        payload,
    }
)
export default{
    getPriority(version,referer){
        return(dispatch)=>{
            this.$axios.get("/vip/index/getVipHomeSchedular",{
                params:{
                    version:"6.0.8",
                    referer:2,
                }
            }).then(({data})=>{
                console.log(data)
                const {priorList,version,referer}=data.data;
                // const priorListOne=[];
                // priorListOne=priorList[1];
                // console.log(1111,typeof(priorListOne));
                dispatch(getPriority({priorList,version,referer}))
                
            })
        }
    }
}