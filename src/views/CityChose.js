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
            <div>
                <div id="header">
                    <Link className="iconfont icon-dayuhao1 back" to={'/'}></Link>
                    <div className="head">城市选择</div>
                </div>         
                <div id="section">
                    <div className="wrap">
                        <div className="city_one">
                            <div className="now_city">
                                <p>当前城市</p>
                                <div className="citys_name">
                                    <div className="city_name">全国</div>
                                </div>
                            </div>
                        </div>
                        <div className="city_one">
                            <div className="now_city">
                                <p>定位城市</p>
                                <div className="citys_name">
                                    <div className="city_name">北京</div>
                                </div>
                            </div>
                        </div>
                        <div className="city_one">
                            <div className="now_city">
                                <p>热门城市</p>
                                <div className="citys_name">
                                    {
                                        this.props.hot_city_List.map(v=>(   
                                            <div className="city_name" key={v.id}>{v.name}</div>
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
                                                <li>{value.name}</li>
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
    }
}
function mapStateToProps({citychose}){
    // console.log(11111222222,citychose)
    return{
      version:citychose.version,
      referer:citychose.referer,
      hot_city_List:citychose.hot_city_List,
      hot_List:Object.values(citychose.hot_List)
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(cityChoseCreator,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(CityChose);