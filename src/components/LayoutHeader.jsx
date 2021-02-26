import React,{useState,useEffect,useRef} from "react";
// import { HashRouter,Link ,Route } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import { Menu, Dropdown, Button } from 'antd';
import '../css/header.scss'
import {IconStyle} from "../static/iconfont/iconfont";
import FormModal from '../components/FormModal';
const LayoutHeader = () => {
    const [idx,setIdx] = useState(0);
    const [isShow,setIsShow] = useState(false);
    const history = useHistory();
    const location = useLocation();
    // console.log(location,'location')
    let list =[
        {
            name:"首页",
            path:'/Home',
            arr:[]
        },
        {
            name:"产品中心",
            path:'/Product',
            arr:[
                {
                    name:'人力资源系统',
                    path:'/HrSystem'
                }
            ]
        },
        // {
        //     name:"解决方案",
        //     path:'/Solution',
        //     arr:[]
        // },
        {
            name:"新闻中心",
            path:"/Xinwen"
        },
        {
            name:"客户案例",
            path:'/CustomerCase',
            arr:[]
        },
        // {
        //     name:"服务中心",
        //     path:'/Home1',
        //     arr:[]
        // },
        // {
        //     name:"下载APP",
        //     path:'/Download',
        //     arr:[]
        // },
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
    const childRef = useRef();
    const updateChildState = () => {
        // changeVal就是子组件暴露给父组件的方法
        console.log(childRef,'---')
        childRef.current.getApply(true);
    }
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
    const getRouter = (str,idx) =>{
        console.log(str,idx)
        history.push(str);
        setIdx(idx);
    }
    const getRouterFour = (str,idx) => {
        history.push(str)
        setIdx(4)
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
        if(pathname=='/HrSystem'||pathname=='/WorkOA'||pathname=='/ElectronSystem'||pathname=='/MoveSystem'||pathname=='/Intelligence'||'/ContractAdmin'){
            setIdx(1)
        }
        if(pathname=='/Technology'||pathname=='/Contact'||pathname=='/Talent'){
            console.log(pathname,'----')
            setIdx(4)
        }
        if(pathname=='/Detail'){
            setIdx(2)
        }
        if(pathname=='/'){
            setIdx(0)
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
                <span className={'spans'} onClick={()=>{getRouter('/ElectronSystem',1)}}>
                    电子票据管理平台
                </span>
            </Menu.Item>
            <Menu.Item>
                <span className={'spans'} onClick={()=>{getRouter('/MoveSystem',1)}}>
                    移动 (OA)
                </span>
            </Menu.Item>
            <Menu.Item>
                <span className={'spans'} onClick={()=>{getRouter('Intelligence',1)}}>
                    智能报销管理系统
                </span>
            </Menu.Item>
            <Menu.Item>
                <span className={'spans'} onClick={()=>{getRouter('ContractAdmin',1)}}>合同管理系统</span>
            </Menu.Item>
        </Menu>
    );
    const menuFour = (
        <Menu>
            <Menu.Item>
                <span className={'spans'} onClick={()=>{getRouterFour('/Technology',4)}}>
                    技术资质
                </span>
            </Menu.Item>
            <Menu.Item>
                <span className={'spans'} onClick={()=>{getRouterFour('/Contact',4)}}>
                    联系我们
                </span>
            </Menu.Item>
            <Menu.Item>
                <span className={'spans'} onClick={()=>{getRouterFour('/Talent',4)}}>
                    人才招聘
                </span>
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
                        {/*{icon}*/}
                    </li>
                </Dropdown>
                }
                {index==4&&
                <Dropdown overlay={menuFour} placement="bottomLeft" arrow>
                    <li className={idx==index?'active':''} key={index} onMouseEnter={()=>handleMouse(index)} onClick={()=>handleRouter(item,index)}>
                        {item.name}
                        {/*{icon}*/}
                    </li>
                </Dropdown>
                }
                {
                    index!=1&&index!=4&&
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
                                <img style={{width:'15px',height:'15px'}} src={require('../images/Hotline.png')} alt=""/>
                            </div>
                            <div className={'textBox'}>
                                <p className={'phone'}>010-87897479</p>
                            </div>
                            <div className="btn" onClick={updateChildState}>
                                申请试用
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {popup}
            <FormModal ref={childRef} cRef={childRef} />
        </>

    )
}
export default LayoutHeader;