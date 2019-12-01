import React from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import showtypeCreator from "../store/actionCreator/showtype";
import '../assets/css/reset.css';
import '../assets/html/zhouyimin/z-css/ShowType.css';
import i_ticket_empty from '../assets/html/zhouyimin/z-images/ticket_empty.png'; 
class ShowType extends React.Component{
    render(){
        return (
            <div id="ShowType">
                <section>
                    <header>
                        <span>演出</span>
                        <Link className="iconfont icon-dayuhao1" to={'/'}></Link>
                        <i className="iconfont icon-sandian"></i>
                    </header>
                    <div className='nav' >
                        <div id="wrapper">
                            <ul>
                                <li key={0} className={this.props.active_id===0?'active':''} onClick={this.props.getShowList.bind(this,this.props.location.query.cid,0)}>全部</li>
                                {
                                    this.props.show_category_list.map(v=>(
                                        <li key={v.category_id} className={(this.props.active_id===v.category_id)?'active':''} onClick={this.props.getShowList.bind(this,this.props.location.query.cid,v.category_id)}>{v.name}</li>
                                    ))
                                }
                            </ul>
                        </div> | 
                        <div className="position">
                            {
                                this.props.location.query.cid?this.props.city_list.map(v=>{
                                    if(v.city_id === this.props.location.query.cid){
                                        return <b>{v.name}</b>
                                    }
                                }):<b>全国</b>
                            }
                            
                            <i className="iconfont icon-dingwei"></i>
                        </div>
                    </div>

                    <div className='context'>
                        {
                            this.props.list.map(v=>{
                                return <div>
                                    <img src={v.pic} alt='' />
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
                </section>
            </div>
        )
    }
    componentDidMount(){
        this.props.getShowCateGory.call(this);
        this.props.getCity.call(this);
        this.props.getShowList.call(this,this.props.location.query.cid,this.props.location.query.caid);
    }
}
function mapStateToProps({showtype}){
    return {
        page:showtype.page,
        list:showtype.list,
        city_list:showtype.city_list,
        show_category_list:showtype.show_category_list,
        total:showtype.total,
        active_id:showtype.active_id
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(showtypeCreator,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(ShowType);