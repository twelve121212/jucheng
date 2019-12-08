import React from "react";
import {Link} from "react-router-dom";
import "../assets/css/Map/Map.css"
export default class Venue extends React.Component{
    render(){
        return (
            <div id="map">
                <header>
                    <span>场馆地址</span>
                    <i className="iconfont icon-dayuhao1" onClick={goback.bind(this)}></i>
                    <i className="iconfont icon-sandian"></i>
                </header>
                <section>
                    <div className="map_context">
                        <div id = "allmap"></div>
                    </div>
                    <div className="p_info">
                        <div className="p_context">
                            <img src=""></img>
                            <div className="p_name">
                                <h3>{this.props.location.state.venue_name}</h3>
                                <p className="call">联系电话：暂无</p>
                                <p>近期演出：<i>10场</i></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
    componentDidMount(){
        const {city_name,venue_name,venue_address}=this.props.location.state
        console.log(window.BMap)
        const BMap = window.BMap
        var map = new BMap.Map("allmap");
        // var opts1 = {offset: new BMap.Size(300, 500)}
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); 
        //根据坐标初始化地图
        map.enableScrollWheelZoom(true);
        map.addControl(new BMap.NavigationControl());   //平移缩放控件
        // map.addControl(new BMap.GeolocationControl());  
        // map.addControl(new BMap.Control()); 
        map.addControl(new BMap.ScaleControl());        //比例尺
        map.addControl(new BMap.OverviewMapControl());  //缩略地图
        map.addControl(new BMap.MapTypeControl());      //地图类型
        map.setCurrentCity(city_name); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用
    
        //添加标注
        // var marker = new BMap.Marker(new BMap.Point(120.378386,30.309756));        // 创建标注
        // map.addOverlay(marker);     
        

        
        /////////////////////////////////////////////           
        // 创建地址解析器实例     
        var myGeo = new BMap.Geocoder();      
        // 将地址解析结果显示在地图上，并调整地图视野   
             
        // 创建地址解析器实例    
        myGeo.getPoint(venue_address, function(point){      
            if (point) {      
                map.centerAndZoom(point, 16);      
                map.addOverlay(new BMap.Marker(point));      
            }  
            var opts2 = {    
                width : 50,     // 信息窗口宽度    
                height: 50,     // 信息窗口高度    
                title : venue_name  // 信息窗口标题   
            }    
            var infoWindow = new BMap.InfoWindow(venue_address, opts2);  // 创建信息窗口对象    
            map.openInfoWindow(infoWindow, map.getCenter(point));      // 打开信息窗口    
        }, 
        city_name+"市");
        ////////////////////////////////////////
        
    }
}
function goback(){
    this.props.history.go(-1)
}