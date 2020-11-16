import React,{useState,useEffect} from "react";
// import { HashRouter,Link ,Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import '../css/home.scss'
const LayoutHeader = () => {
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
            path:'/Home',
            arr:[]
        },
        {
            name:"联系我们",
            path:'/Home',
            arr:[]
        }
    ];
    const [tabList,setTabList] = useState(list)
    const handleRouter = (item) =>{
        // console.log(this.history,item,'history');
        console.log('history', item);
        history.push(item.path)
    }
    const handleRegister = () => {
        console.log('registry')
    }
    const str = tabList.map((item,index)=>{
        return(
            // <Link to={`${item.path}`}>
                <li key={index} onClick={()=>handleRouter(item)}>{item.name}</li>
            // </Link>
        )
    })
    return (
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
                    <p className={'login'}>登录</p>
                    <p className={'register'} onClick={handleRegister}>注册</p>
                </div>
            </div>
        </div>
    )
}
export default LayoutHeader;