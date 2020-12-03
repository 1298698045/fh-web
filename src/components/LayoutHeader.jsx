import React,{useState,useEffect} from "react";
// import { HashRouter,Link ,Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import '../css/header.scss'
import {IconStyle} from "../static/iconfont/iconfont";
const LayoutHeader = () => {
    const [idx,setIdx] = useState(0);
    const [isShow,setIsShow] = useState(false);
    const history = useHistory();
    let list =[
        {
            name:"首页",
            path:'/Home',
            arr:[]
        },
        {
            name:"产品",
            path:'/Home',
            arr:[]
        },
        {
            name:"解决方案",
            path:'/Solution',
            arr:[]
        },
        {
            name:"客户案例",
            path:'/CustomerCase',
            arr:[]
        },
        {
            name:"服务中心",
            path:'/Home',
            arr:[]
        },
        {
            name:"下载APP",
            path:'/Download',
            arr:[]
        },
        {
            name:"联系我们",
            path:'/AboutWe',
            arr:[]
        }
    ];
    const [tabList,setTabList] = useState(list)
    const handleRouter = (item,index) =>{
        setIdx(index)
        // console.log(this.history,item,'history');
        setIsShow(false);
        console.log('history', item);
        history.push(item.path)
        window.scrollTo(0, 0)
    }
    const handleRegister = () => {
        console.log('registry')
        history.push('/Register')
    }
    const handleMouse = (index) =>{
        // console.log(index,'werer')
        if(index==1){
            setIsShow(true);
        }
    };
    const handleMouseLeave = () => {
        setIsShow(false);
    }
    const str = tabList.map((item,index)=>{
        let icon;
        if(index==1){
            icon = (
                <span style={{marginLeft:'5px'}}>
                    <IconStyle/>
                    <i className="iconfont">&#xe60c;</i>
                </span>

            )
        }
        return(
            // <Link to={`${item.path}`}>
                <li className={idx==index?'active':''} key={index} onMouseEnter={()=>handleMouse(index)} onClick={()=>handleRouter(item,index)}>
                    {item.name}
                    {icon}
                </li>
            // </Link>
        )
    })
    let popup;
    if(isShow){
        popup = (
            <div className="popup" onMouseLeave={()=>handleMouseLeave()}>
                <div className="box-wrap">
                    <div className="column">
                        <h3>组织在线</h3>
                        <div className="block">
                            <p>通讯录</p><p>应用</p>
                        </div>
                    </div>
                    <div className="column">
                        <h3>协调在线</h3>
                        <div className="block">
                            <p>新闻与通知</p><p>考勤</p>
                            <p>审批</p>
                            <p>日程</p>
                            <p>日志</p>
                            <p>会议/会议室</p>
                            <p>优盘</p>
                        </div>
                    </div>
                    <div className="column">
                        <h3>业务在线</h3>
                        <div className="block">
                            <p>投票</p><p>问卷</p>
                            <p>
                                审批
                            </p>
                            <p>值班查询</p>
                            <p>报表</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <>
            <div className="header_wrap">
                <div className="header">
                    <div className={'l'}>
                        <p>
                            <img src={require('../images/banner.png')} alt=""/>
                        </p>
                    </div>
                    <div className={'c'}>
                        <ul>
                            {str}
                        </ul>
                    </div>
                    <div className={'r'}>
                        <div className={'imgs'}>
                            <img style={{width:'38px',height:'38px'}} src={require('../images/890.png')} alt=""/>
                        </div>
                        <div className={'textBox'}>
                            <p className={'text'}>热线电话</p>
                            <p className={'phone'}>010-87897479</p>
                        </div>
                    </div>
                </div>
            </div>
            {popup}
        </>

    )
}
export default LayoutHeader;