import React,{useState,useEffect} from "react";
// import { HashRouter,Link ,Route } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import { Menu, Dropdown, Button } from 'antd';
import '../css/header.scss'
import {IconStyle} from "../static/iconfont/iconfont";

const LayoutHeader = () => {
    const [idx,setIdx] = useState(0);
    const [isShow,setIsShow] = useState(false);
    const history = useHistory();
    const location = useLocation();
    console.log(location,'location')
    let list =[
        {
            name:"首页",
            path:'/HomePage',
            arr:[]
        },
        {
            name:"产品",
            path:'/Home',
            arr:[
                {
                    name:'人力资源系统',
                    path:'/HrSystem'
                }
            ]
        },
        {
            name:"解决方案",
            path:'/Solution',
            arr:[]
        },
        {
            name:"新闻",
            path:"/Xinwen"
        },
        {
            name:"客户案例",
            path:'/CustomerCase',
            arr:[]
        },
        {
            name:"服务中心",
            path:'/Home1',
            arr:[]
        },
        {
            name:"下载APP",
            path:'/Download',
            arr:[]
        },
        // {
        //     name:"联系我们",
        //     path:'/AboutWe',
        //     arr:[]
        // },
        {
            name:"关于我们",
            path:'/NewAboutWe'
        }
    ];
    const [tabList,setTabList] = useState(list)
    const handleRouter = (item,index) =>{
        console.log(item,index,'debugger')
        setIdx(index)
        // console.log(this.history,item,'history');
        setIsShow(false);
        console.log('history', item);
        history.push(item.path)
        window.scrollTo(0, 0)
    }
    const getClickHr = () => {
        history.push('/HrSystem')
        setIdx(1)
        console.log(idx,'idx')
    }
    const getClickOA = () =>{
        history.push('/WorkOA')
        setIdx(1)
    }
    const handleRegister = () => {
        console.log('registry')
        history.push('/Register')
    }
    const handleMouse = (index) =>{
        // console.log(index,'werer')
        if(index==1){
            // setIsShow(true);
        }
    };
    const handleMouseLeave = () => {
        setIsShow(false);
    }
    useEffect(()=>{
        const {pathname} = location;
        console.log(pathname,'---')
        if(pathname=='/HrSystem'||pathname=='/WorkOA'){
            setIdx(1)
        }
        tabList.find((item,index)=> {
            if(item.path === pathname) {
                setIdx(index);
            }
        })
    }, [])
    const menu = (
        <Menu>
            <Menu.Item>
                <span className={'spans'} onClick={getClickOA}>
                    协同办公（OA）
                </span>
            </Menu.Item>
            <Menu.Item>
                <span className={'spans'} onClick={getClickHr}>
                    人力资源管理系统
                </span>
            </Menu.Item>
            <Menu.Item>
                <span className={'spans'}>
                    电子票据管理平台
                </span>
            </Menu.Item>
            <Menu.Item>
                <span className={'spans'}>
                    移动 (OA)
                </span>
            </Menu.Item>
            <Menu.Item>
                <span className={'spans'}>
                    智能报销管理系统
                </span>
            </Menu.Item>
            <Menu.Item>
                <span className={'spans'}>合同管理系统</span>
            </Menu.Item>
        </Menu>
    );
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
            <>
                {index==1&&
                <Dropdown overlay={menu} placement="bottomLeft" arrow>
                    <li className={idx==index?'active':''} key={index} onMouseEnter={()=>handleMouse(index)} onClick={()=>handleRouter(item,index)}>
                        {item.name}
                        {icon}
                    </li>
                </Dropdown>
                }
                {
                    index!=1&&
                    <li className={idx==index?'active':''} key={index} onMouseEnter={()=>handleMouse(index)} onClick={()=>handleRouter(item,index)}>
                        {item.name}
                        {icon}
                    </li>
                }
            </>
            // <Link to={`${item.path}`}>

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
                            <p>通讯录</p>
                            <p onClick={getClickOA}>移动（OA）</p>
                            <p onClick={getClickHr}>人力资源</p>
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
                <div className={'container'}>
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
            </div>
            {popup}
        </>

    )
}
export default LayoutHeader;