import React from "react";
import "../assets/css/reset.css"
import "../assets/css/Calendar.css"
import {connect} from "react-redux"
import {bindActionCreators} from "redux";
import calendarCreator from "../store/actionCreator/calendar"
class Calendar extends React.Component{
    render(){
        return(
            <div>
                <div className="calendar">
                    <div className="calendar-month">
                        <i className="iconfont icon-dayuhao1"></i>
                        <span className="month">2019年10月</span>
                        <i className="iconfont icon-dayuhao"></i>
                    </div>
                    <div className="calendar-week">
                        <span>日</span>
                        <span>一</span>
                        <span>二</span>
                        <span>三</span>
                        <span>四</span>
                        <span>五</span>
                        <span>六</span>
                    </div>
                    <div className="calendar-day">{
                        this.props.calendar.map(v=>(
                            <span>{v.day}</span>
                        ))
                    }
                    </div>
                </div>    
            </div>
        )
    }
    componentDidMount(){
        this.props.getDay.call(this);
    }
}
function mapStateToProps({calendar}){
    return{
        calendar:calendar.calendar,
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(calendarCreator,dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Calendar);