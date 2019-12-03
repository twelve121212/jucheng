import React from "react";
import "../assets/css/reset.css"
import "../assets/css/Calendar.css"
import {connect} from "react-redux"
import {bindActionCreators} from "redux";
import calendarCreator from "../store/actionCreator/calendar"
import {Link} from "react-router-dom"
class Calendar extends React.Component{
    render(){
        return(
            <div className="show-calendar">
                <div className="calendar-header">
                    <Link to={"/"}><i  className="iconfont icon-dayuhao1"></i></Link>
                    <span>演出日历</span>
                    <i className="iconfont icon-sandian"></i>
                </div>
                {/* 导航条 */}
                <div className="nav">
                    <div id="wrapper">
                        <ul>
                            <li key={0} className={this.props.active_id===0?'active':''}  onClick={
                                this.props.getShowList.bind(this,0,"2019%2F12%2F1")
                            }>全部</li>
                            {
                                this.props.show_category_list.map(v=>(
                                    <li key={v.category_id} className={(this.props.active_id===v.category_id)?'active':''} onClick={
                                        this.props.getShowList.bind(this,v.category_id,"2019%2F12%2F1")
                                    }>{v.name}</li>
                                ))
                            }
                        </ul>
                    </div> |
                    <div className="position">
                            <b>全国</b>
                        <i className="iconfont icon-dingwei"></i>
                    </div>
                </div>
                {/* 日历 */}
                <div className="calendar">
                    <div className="calendar-month">
                        <i className="iconfont icon-dayuhao1" onClick={
                            this.props.getDay.bind(this,this.props.year,this.props.month-1)
                        }></i>
                        <span className="month">{this.props.year}年{this.props.month}月</span>
                        <i className="iconfont icon-dayuhao" onClick={
                            this.props.getDay.bind(this,this.props.year,this.props.month+1)
                        }></i>
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
                        this.props.calendar.map((v,i)=>(
                            <span key={i} className={(this.props.active_day===v.date)?'active':''} onClick={
                                this.props.getShowList.bind(this,0,v.date)
                            }>{v.day}</span>
                        ))
                    }
                    {
                        console.log(this.props.calendar)
                    }
                    </div>
                </div>   
                {/* 演出列表 */}
                <div className='context'>
                    {
                        this.props.list.map((v,i)=>{
                        return <div key={i}>
                            < img src={v.pic} alt='' />
                            <div>
                            {
                                v.show_time_bottom?<h3>
                                {v.start_show_time}
                                <span>{v.show_time_bottom}</span>
                                </h3>:<h3>2019.{v.show_time_top}</h3>
                            }
                            <h2>{v.name}</h2>
                            <h5>
                            <span>{v.city_name}</span> | <span>{v.venue_name}</span>
                            </h5>
                            <h4>￥{v.min_price}<span>起</span></h4>
                            </div>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getDay.call(this);
        this.props.getCategory.call(this);
        this.props.getShowList.call(this);
    }
}
function mapStateToProps({calendar}){
    return{
        year:calendar.year,
        month:calendar.month,
        calendar:calendar.calendar,
        show_category_list:calendar.show_category_list,
        list:calendar.list,
        category:calendar.category,
        active_id:calendar.active_id,
        active_day:calendar.active_day,
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(calendarCreator,dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Calendar);