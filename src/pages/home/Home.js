import React,{Component} from "react";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';
import '../../css/home.scss';
import { Carousel } from 'antd';

import { HashRouter,Link ,Route } from 'react-router-dom';
import Detail from './Detail'
import { createBrowserHistory, createHashHistory } from 'history';
import backUrl from '../../images/bj.png';
const history = createBrowserHistory() // history模式
// history.push('/')
var sectionStyle = {
    width: "100%",
    height: "560px",
// makesure here is String确保这里是一个字符串，以下是es6写法
    backgroundImage: `url(${backUrl})`
};
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
            ],
            num:[1,2,3]
        }
        this.handleRegister = this.handleRegister.bind(this);
    }
    handleRegister(){
        // let { history } = this.props
        // debugger
        // history.push({pathname: '/Detail'})
        // console.log(this);
        // debugger
        // history.push('Detail')
        // window.location.href="/Detail";
        this.refs.welcome.next();
    }
    getNext(){
        this.refs.welcome.next();
    }
    getPrev(){
        this.refs.welcome.prev();
    }
    todoList(){
       return this.state.num.map(key=>{
            return (
                <div className="box" key={key}>
                    <div className="radius">
                        <img src={require('../../images/icon.png')} alt=""/>
                    </div>
                    <div className="list">
                        <p className="name">一体化</p>
                        <p>· 涵盖科室的全面管理=</p>
                        <p>· 跨部门级全面应用</p>
                        <p>· 前后胎数据一体化</p>
                    </div>
                </div>
            )
        })
    }
    render() {
        let str ;
        str = this.state.tabList.map((item,index)=>{
            return <li key={index}>{item.name}</li>
        })
        return (
            <div className="wrap">
                <HashRouter>
                    <div>
                        <ul>
                            <li>
                                <Link to="/Detail">Detail</Link>
                            </li>
                        </ul>
                        <hr/>
                        <Route path="/Detail" component={Detail}></Route>
                    </div>
                </HashRouter>
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
                        <Carousel ref="welcome">
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
                    <div className="tips">
                        <p>最新动态 <span>【2019-07-19】北京安定医院临床心理中心成立暨临床心理病房正式开区</span> </p>
                        <p>更多</p>
                    </div>
                    <div className="content">
                        <div className="box_wrap">
                            <div className="title max">医院运营管理整体解决方案</div>
                            <div className="title min">随时随地利用碎片化时间，轻松办公</div>
                            <div className="cont_wrap">
                                <div className={'left item'}>
                                    {
                                        this.todoList()
                                    }

                                </div>
                                <div className={'cen item'}>
                                    <div className="img_box">
                                        <img src={require('../../images/photo.png')} alt=""/>
                                    </div>
                                </div>
                                <div className={'left item'}>
                                    {
                                        this.todoList()
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="box_wrap module_wrap">
                            <div className="title max">医院运营管理整体解决方案</div>
                            <div className="title min">随时随地利用碎片化时间，轻松办公</div>
                            <div className="module">
                                <div className="box">
                                    <div>
                                        <div className="boxRadius">
                                            <img src={require('../../images/d.png')} alt=""/>
                                        </div>
                                        <p className="name">组织架构</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div>
                                        <div className="boxRadius">
                                            <img src={require('../../images/d.png')} alt=""/>
                                        </div>
                                        <p className="name">组织架构</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div>
                                        <div className="boxRadius">
                                            <img src={require('../../images/d.png')} alt=""/>
                                        </div>
                                        <p className="name">组织架构</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div>
                                        <div className="boxRadius">
                                            <img src={require('../../images/d.png')} alt=""/>
                                        </div>
                                        <p className="name">组织架构</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div>
                                        <div className="boxRadius">
                                            <img src={require('../../images/d.png')} alt=""/>
                                        </div>
                                        <p className="name">组织架构</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div>
                                        <div className="boxRadius">
                                            <img src={require('../../images/d.png')} alt=""/>
                                        </div>
                                        <p className="name">组织架构</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box_wrap back_wrap" style={sectionStyle}>
                            <div className="title max">提供更全面的专家级服务支持</div>
                            <div className="title min">从运营理念到实操技能，为客户提供包括远程协助、智能客服、现场服务等多元立体化的一对一学习运营和顾问服务，全面解决平台运营难题</div>
                            <div className="contBox">
                                <ul>
                                    <li className="lis">
                                        <div className="imgTop">
                                            <img src={require('../../images/r.png')} alt=""/>
                                        </div>
                                    </li>
                                    <li className="lis"></li>
                                    <li className="lis"></li>
                                    <li className="lis"></li>
                                </ul>
                            </div>
                        </div>
                        <div className="box_wrap ban_wrap">
                            <div className="title max">客户案例</div>
                            <div className="title min">凤凰办公的产品，全方位为您提供服务</div>
                            <div className="banner_box">
                                <div className="icon_left" onClick={this.getNext.bind(this)}>

                                </div>
                                <div className="banner">
                                    <Carousel ref="welcome" dots={true}>
                                        <div style={contentStyle}>
                                            <div className="cont">
                                                <div className="box"></div>
                                                <div className="box"></div>
                                                <div className="box"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 style={contentStyle}>2</h3>
                                        </div>
                                        <div>
                                            <h3 style={contentStyle}>3</h3>
                                        </div>
                                    </Carousel>
                                </div>
                                <div className="icon_right" onClick={this.getPrev.bind(this)}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;