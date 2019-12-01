import React from "react";
import {bindActionCreators} from "redux";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import searchCreator from "../store/actionCreator/search";
import "../assets/css/Search/Search.css"
import "../assets/css/reset.css"
import "../assets/iconfont/iconfont.css"
class Search extends React.Component{
    render(){
        return (
            <div id="search">
                <div className="wrap">
                    <div id="header_search"> 
                        <div className="header_left">
                            <i className="iconfont icon-search-active"></i>
                            <input ref="val" type="text" placeholder="搜索热门演出" onChange={e=>{changeOrigin(this,e)}}></input>
                            <i className="delete_word iconfont ">×</i>
                        </div>
                        <p className="header_right"  onClick={fromHome.bind(this)}>取消</p>
                    </div>
                    {
                        //fromhome是true是，也就是在首页跳转来时，渲染历史搜索和热门搜索
                        (fromhome||this.props.search_list.length<=0 )?
                        <div id="section_search">
                            {
                            (localStorage.historySearch)?
                            <div className="history_search">
                                <div className="search_delete">
                                    <p>历史搜索</p>
                                    <i onClick={deleteHistorySearch.bind(this)}>×</i>
                                </div>
                                <div className="search_history">
                                    {
                                        JSON.parse(localStorage.historySearch).map((v,i)=>(
                                        <div className="search_one" key={i} onClick={e=>historySearch.call(this,e.target.innerText)}>{v}</div>
                                        ))
                                    }
                                    
                                </div>   
                            </div>:null
                            }
                            <div className="history_search">
                                <div className="search_delete">
                                    <p>热门搜索</p> 
                                </div>
                                <div className="search_history">
                                    {
                                        this.props.hot_search_list.map((v,i)=>(
                                            <div className="search_one" key={i} onClick={e=>historySearch.call(this,e.target.innerText)}>{v}</div>
                                        ))
                                    }
                                </div>
                            
                            </div>
                            
                        </div>:
                        <div id="search_result">
                            <div className='context'>
                                {
                                    this.props.search_list.map((v,i)=>{
                                    return <div key={i}>
                                        < img src={v.pic} alt='' />
                                        <div>
                                        {
                                            v.show_time_bottom?<h3>
                                            {v.start_show_time}
                                            <span>{v.show_time_bottom}</span>
                                            </h3>:<h3>2019.{v.show_time_top}</h3>
                                        }
                                        <h2 dangerouslySetInnerHTML={{__html:v.name}}></h2>
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
                    }  
                </div> 
            </div>
        )
    }
    componentDidMount(){
        this.props.getHotSearchList.call(this);
        // this.props.getShowList.call(this);
        if(this.props.location.state!==undefined){
            fromhome=this.props.location.state.fromhome
            this.props.getShowList.call(this,"",this.props.location.state.venue_id);
        }
    }
}
function mapStateToProps({search}){
    // console.log(11111222222,search)
    return{
        version:search.version,
        referer:search.referer,
        hot_search_list:search.hot_search_list,
        search_list:search.search_list,
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(searchCreator,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Search);
//定义一个判断条件
let fromhome = true
// 添加历史搜索记录
function historySearch(val){
    this.refs.val.value = val
    let arr = [];
    if(!localStorage.historySearch){
        arr.push(val)
    }     
    else{
        arr = JSON.parse(localStorage.historySearch)
        let b = true
        arr.forEach((v)=>{
            if(v === val )
                b = false         
        })
        if(b){arr.push(val)}
    }    
    localStorage.historySearch=JSON.stringify(arr);
    this.forceUpdate();
    fromhome = false
    if(this.refs.val.value)
    this.props.getShowList.call(this,val);
}
// 删除历史搜索记录
function deleteHistorySearch() {
    localStorage.removeItem("historySearch");
    this.forceUpdate()
}
// 改变fromhome
function fromHome(){
    fromhome = true;
    this.props.history.go(-1)
}
// 搜索框内容改变时改变fromhome
function changeOrigin(that,e) {
    that.props.getShowList.call(that,e.target.value);
    fromhome = false;
}

