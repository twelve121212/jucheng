import React from "react";
import {bindActionCreators} from "redux";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import cityChoseCreator,{upHotCity,upCity} from "../store/actionCreator/citychose";
import "../assets/css/CityChose/CityChose.css"
import "../assets/iconfont/iconfont.css"
class CityChose extends React.Component{
    render(){
        return (
            <div id="city_chose">
                <div id="header">
                    <Link className="iconfont icon-dayuhao1 back" to={{pathname:"/",state:{city:this.props.location.state.city}}}></Link>
                    <div className="head">城市选择</div>
                </div>         
                <div id="section">
                    <div className="wrap">
                        <div className="city_one">
                            <div className="now_city">
                                <p>当前城市</p>
                                <div className="citys_name">
                                    <Link className="city_name" to={{pathname:"/",state:{city:"全国"}}}>全国</Link>
                                </div>
                            </div>
                        </div>
                        <div className="city_one">
                            <div className="now_city">
                                <p>定位城市</p>
                                <div className="citys_name">
                                    <Link className="city_name" style={{color:"orange"}} to={{pathname:"/",state:{city:this.props.gpsCity}}}>{this.props.gpsCity}</Link>
                                </div>
                            </div>
                        </div>
                        <div className="city_one">
                            <div className="now_city">
                                <p>热门城市</p>
                                <div className="citys_name">
                                    {
                                        this.props.hot_city_List.map(v=>(   
                                            <Link to={{pathname:"/",state:{city:v.name,city_id:v.id}}}className="city_name" key={v.id}>{v.name}</Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="city_list">
                        {
                           this.props.hot_List.map(v=>(
                                <div className="list_one" key={v.id}>
                                    <p>{v.id}</p>
                                    <ul>
                                        {
                                            v.list.map(value=>(
                                                <Link key={value.id} to={{pathname:"/",state:{city:value.name,city_id:value.id}}}>
                                                    <li>{value.name}</li>
                                                </Link> 
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }    
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getHotCityList.call(this);
        this.props.getCityList.call(this);
        this.props.getGpsCity.call(this)
    }
}
function mapStateToProps({citychose}){
    // console.log(11111222222,citychose)
    return{
        version:citychose.version,
        referer:citychose.referer,
        hot_city_List:citychose.hot_city_List,
        hot_List:Object.values(citychose.hot_List),
        gpsCity:citychose.gpsCity,

    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(cityChoseCreator,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(CityChose);