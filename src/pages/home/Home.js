import React,{Component} from "react";
import '../../css/home.scss'
import { Carousel } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';
import {HashRouter, Route, Switch} from 'react-router-dom';
const contentStyle = {
    height: '470px',
    color: '#fff',
    lineHeight: '470px',
    textAlign: 'center',
    background: '#364d79',
    autoplay:false
};
class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tabList:[
                {
                    name:"首页",
                    arr:[]
                },
                {
                    name:"产品",
                    arr:[]
                },
                {
                    name:"解决方案",
                    arr:[]
                },
                {
                    name:"客户案例",
                    arr:[]
                },
                {
                    name:"服务中心",
                    arr:[]
                },
                {
                    name:"下载APP",
                    arr:[]
                },
                {
                    name:"联系我们",
                    arr:[]
                }
            ]
        }
        this.handleRegister = this.handleRegister.bind(this);
    }
    handleRegister(){
    }
    render() {
        let str ;
        str = this.state.tabList.map((item,index)=>{
            return <li key={index}>{item.name}</li>
        })
        return (
            <div className="wrap">
                <div className="header">
                    <div className={'l'}>
                        <p>
                            <img src={require('../../images/banner.png')} alt=""/>
                        </p>
                    </div>
                    <div className={'c'}>
                        <ul>
                            {str}
                        </ul>
                    </div>
                    <div className={'r'}>
                        <p className={'login'}>登录</p>
                        <p className={'register'} onClick={this.handleRegister}>注册</p>
                    </div>
                </div>
                <div className="center">
                    <div className="banner">
                        <Carousel>
                            <div>
                                <h3 style={contentStyle}>1</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>2</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>3</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>4</h3>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;