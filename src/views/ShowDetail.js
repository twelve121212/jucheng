import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import showdetailCreator from '../store/actionCreator/showdetail'
import '../assets/css/reset.css';
import '../assets/html/zhouyimin/z-css/ShowDetail.css';
import i_ticket_empty from '../assets/html/zhouyimin/z-images/ticket_empty.png';
class ShowType extends React.Component{
    render(){
        return (
            <div id="ShowDetail">
                    <div className='introduce'>
                        <header>
                            <span>演出详情</span>
                            <Link className="iconfont icon-dayuhao1" to={'/'}></Link>
                            <i className="iconfont icon-sandian"></i>
                        </header>
                        <img src={this.props.share_data.share_pic} alt='' />
                        <div>
                            <h2>{this.props.share_data.share_title}</h2>
                            <h4>￥{this.props.static_data.low_price} - {this.props.static_data.high_price}</h4>
                        </div>
                    </div>
                    <div className='address'>
                        {console.log(this.props.item_list,this.props.static_data,this.props.share_data)}
                        <h3>{this.props.item_list.project_time}</h3>
                        <h4>{this.props.static_data.city_name}|{this.props.static_data.venue_name}</h4>
                        <h5>{this.props.static_data.venue_address}</h5>
                        <div><i className="iconfont icon-dingwei"></i></div>
                    </div>
                    <div className='warn'>
                        <h2> <span>温馨提醒</span> <i className='iconfont icon-dayuhao'></i></h2>
                        <ul>
                            <li>配送说明</li>
                            <li>订票说明</li>
                            <li>确认订单</li>
                            <li>购票提醒</li>
                        </ul>
                    </div>
                    <div className="recommended">
                            <h2><span>温馨提醒</span> <i className='iconfont icon-dayuhao'></i></h2>
                            <div>
                                <img src={i_ticket_empty} alt='' />
                                <div>
                                    <h3>2019.09.12<span>周六</span></h3>
                                    <h2>相关推荐相关推荐相关推荐相关推荐相关推荐</h2>
                                    <h5>
                                        <span>城市</span> | <span>场馆啊场馆</span>
                                    </h5>
                                    <h4>￥300<span>起</span></h4>
                                </div>
                            </div>
                    </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getShowDetailList.call(this,this.props.location.query.schedular_id);
    }
}
function mapStateToProps({showdetail}){
    return {
        item_list:showdetail.item_list,
        share_data:showdetail.share_data,
        static_data:showdetail.static_data
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(showdetailCreator,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(ShowType);