import React from "react";
import state from "../store/state/location"
export default class My extends React.Component{
    render(){
        return (
           
                "全国"
            
        )
    }
    componentWillMount(){
    // console.log(3333,window.AMap)
        getlocation()
    }
}
function getlocation(){
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
            console.log(1111,data);
        }
        function onError (data) {
            // 定位出错
            console.log(2222,data);
        }
    })
}