import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import theaterCreator,{upTheater} from "../store/actionCreator/theater";
import "../assets/css/Theater/Theater.css"
class Theater extends React.Component{
    render(){
        return (
            <div>
                <div className="header">
                    <div className="head">剧院</div>
                </div>         
                <div className="section">
                    <ul className="wrap">
                        {
                            this.props.theatre_list.map(v=>( 
                                <li className="position" key={v.id}>
                                    <div className="position_name">
                                        <div className="position_left">
                                            <div className="position_img">
                                                <img src={v.pic} alt=""/>
                                            </div>
                                            <div className="position_describe">
                                                <h3>{v.name}</h3>
                                                <p>{v.count}场在售演出</p>
                                            </div>
                                        </div>         
                                        <div className="position_right">
                                            <i>...</i>
                                        </div>
                                    </div>
                                    <div className="position_detail">
                                        {
                                            v.showList.map(value=>(
                                                <div className="detail_one" key={value.id}>
                                                    <h4>{value.show_time}</h4>
                                                    <img src={value.pic} alt=""/>
                                                </div>
                                            ))
                                        }                                    
                                    </div>
                                </li>  
                            ))
                        }                     
                    </ul>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getTheatreList.call(this);
    }
}
function mapStateToProps({theater}){
    // console.log(11111,theater)
    return{
      page:theater.page,
      version:theater.version,
      referer:theater.referer,
      theatre_list:theater.theatre_list
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(theaterCreator,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Theater);