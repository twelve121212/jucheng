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
export const upGpsCity = payload=>(
    {
        type:"GPS_CITY",
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
                // console.log(11111111111111,hot_city_List)
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
                // console.log(2222222222222222,hot_List)
                dispatch(upCity({hot_List}))
            })
        }
    },
    getGpsCity(){
        return(dispatch)=>{
            const AMap = window.AMap
            AMap.plugin('AMap.Geolocation',function(){
                var geolocation = new AMap.Geolocation({
                    // 是否使用高精度定位，默认：true
                    enableHighAccuracy: true,
                    // 设置定位超时时间，默认：无穷大
                    timeout: 10000,
                })
                geolocation.getCurrentPosition()
                AMap.event.addListener(geolocation, 'complete', onComplete)
                AMap.event.addListener(geolocation, 'error', onError)
                function onComplete (data) {
                    // data是具体的定位信息
                    // console.log(1111,data);
                    let gpsCity = data.addressComponent.province || data.addressComponent.city
                    gpsCity = gpsCity.substr(0,gpsCity.length-1)
                    dispatch(upGpsCity({gpsCity}))
                }
                function onError (data) {
                    // 定位出错
                    console.log(2222,data);
                }
            })
        }
        
    }
}