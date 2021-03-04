import React,{Component} from "react";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';
import '../../css/home.scss';
import { Carousel , BackTop} from 'antd';
import { HashRouter,Link ,Route } from 'react-router-dom';
import Detail from './Detail'
import NewFooter from "../../components/NewFooter";
import { createBrowserHistory, createHashHistory } from 'history';
import backUrl from '../../images/bj.png';
import fotUrl from '../../images/fot.png';
import http from '../../utils/request';
import {IconStyle} from '../../static/iconfont/iconfont';
import store from '../../store'
import CustomerCase from "../customerCase/CustomerCase";
import BannerList from "../../components/BannerList";

import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import MyServe from "../../components/MyServe";
import MyProduct from '../../components/MyProduct';

const history = createBrowserHistory() // history模式
// history.push('/')
var sectionStyle = {
    width: "100%",
    height: "auto",
// makesure here is String确保这里是一个字符串，以下是es6写法
    backgroundImage: `url(${backUrl})`
};
const fotStyle = {
    width: "100%",
    height:"205px",
    backgroundImage: `url(${fotUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
// const contentStyle = {
//     height: '470px',
//     color: '#fff',
//     lineHeight: '470px',
//     textAlign: 'center',
//     background: '#364d79',
//     autoplay:false
//
// };
const contentStyle = {
    height: '570px',
    color: '#fff',
    textAlign: 'center',
    background: '#fff',
    autoplay:false

};
const swiperStyle = {
    width:"80%",
    height:"315px",
    color: "#fff",
    lineHeight: "315px",
    background: "#fff",
    autoplay: false
}
const serviceBack = {
    height:496,
    backgroundImage: `url(${require('../../images/1529.jpg')})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
const myImgs = {
    height:560,
    backgroundImage: `url(${require('../../images/icon_bg.png')})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
let pubList = [];
class Home extends Component{
    constructor(props) {
        super(props);
        console.log(store.getState(),'------');
        document.title = '凤凰世纪'
        this.state = {
            tabList:[
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
                    path:'/Home',
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
            ],
            num:[{
                id:1,
                hover:false
            },
                {
                    id:2,
                    hover:false
                },
                {
                    id:3,
                    hover:false
                }],
            show:false,
            plateList:[],
            index:0,
            ItemId:'8CE6E996-1BF1-48BF-BF45-AB8DBA5559E7',
            listData:[],
            bannerList:[],
            myProductList:[
                {
                    img:require('../../images/yycp_1.png'),
                    name:'协同办公系统（OA）',
                    desc:'为强化医院院办事务日常管理，帮助医院实现现代医院管理制度，优化工作流程，规范工作行为，提高运行效率的管理系统。有效的控制和预防风险。'
                },
                {
                    img:require('../../images/yycp_2.png'),
                    name:'人力资源管理系统',
                    desc:'为强化医院院办事务日常管理，帮助医院实现现代医院管理制度，优化工作流程，规范工作行为，提高运行效率的管理系统。有效的控制和预防风险。'
                },
                {
                    img:require('../../images/yycp_3.png'),
                    name:'电子票据管理平台',
                    desc:'为强化医院院办事务日常管理，帮助医院实现现代医院管理制度，优化工作流程，规范工作行为，提高运行效率的管理系统。有效的控制和预防风险。'
                },
                {
                    img:require('../../images/yycp_4.png'),
                    name:'移动办公（0A）',
                    desc:'为强化医院院办事务日常管理，帮助医院实现现代医院管理制度，优化工作流程，规范工作行为，提高运行效率的管理系统。有效的控制和预防风险。'
                },
                {
                    img:require('../../images/yycp_5.png'),
                    name:'智能报销\b管理系统',
                    desc:'为强化医院院办事务日常管理，帮助医院实现现代医院管理制度，优化工作流程，规范工作行为，提高运行效率的管理系统。有效的控制和预防风险。'
                },
                {
                    img:require('../../images/yycp_6.png'),
                    name:'合同管理系统',
                    desc:'为强化医院院办事务日常管理，帮助医院实现现代医院管理制度，优化工作流程，规范工作行为，提高运行效率的管理系统。有效的控制和预防风险。'
                }
            ],
            advantage:[
                {
                    imgUrl:require('../../images/icon_1.svg'),
                    name:'产品优势',
                    desc:'功能专业具备医院行业特色，融入现代管理思想，满足内控需求。'
                },
                {
                    imgUrl:require('../../images/icon_2.svg'),
                    name:'团队优势',
                    desc:'技术团队人员的工作经验丰富，熟悉医院业务与流程。'
                },
                {
                    imgUrl:require('../../images/icon_3.svg'),
                    name:'经验优势',
                    desc:'实施超过1000家医院，积累丰富服务和研发的经验。'
                },
                {
                    imgUrl:require('../../images/icon_4.svg'),
                    name:'创新优势',
                    desc:'不断的创新，推出满足医院战略及发展的需求的功能和产品。'
                },
                {
                    imgUrl:require('../../images/icon_5.svg'),
                    name:'服务优势',
                    desc:'以用户为中心，用服务作为公司发展的基础。'
                }
            ]
        }
        this.handleRegister = this.handleRegister.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleTopping = this.handleTopping.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleRouter = this.handleRouter.bind(this);
        // this.handleTab = this.handleTab.bind(this);
        this.handleMouseTab = this.handleMouseTab.bind(this);
        this.handleOutTab = this.handleOutTab.bind(this);
    }
    handleRouter(){

        history.push('/CustomerCase')
    }
    // 置顶
    handleTopping(){
        window.scrollTo(0,0);
    }
    // 拨打电话
    handlePhone(){
        window.location.href = "tel://10086";
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
   async handleTab({idx,id}){
        const w = await
        this.setState({
            index:idx,
            ItemId:id
        })
        this.getQuery();
    }
    handleDetail(id){
        window.localStorage.setItem("id", id);
    }
    componentDidMount(){
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,
            diration: 1000,
            loop: true,
            pagination : {
                el: '.swiper-pagination',
                clickable: true,
                clickableClass : 'my-pagination-clickable',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        // return new Promise((resolve, reject) => {
        //     http("get",'/api/Contentbase/GetContentbases?ItemId=20A506E7-1CF9-418C-9EE8-0F632F8A8857&PageIndex=1&PageSize=10').then(res => {
        //         console.log (res);
        //     },error => {
        //         console.log("网络异常~",error);
        //         // reject(error)
        //     })
        // })
        this.getCustomerCase();
        this.getQuery();
        this.successCase();
    }
    async handleMouseTab(e,{idx,id}){
        const w = await
        this.setState({
            index:idx,
            ItemId:id
        })
        this.getQuery();
    }
    handleOutTab(e,{idx,id}){
        this.setState({
            index:idx
        })
    }
    getQuery(){
        let url = '/api/Contentbase/GetContentbases?ItemId='+this.state.ItemId+'&PageIndex=' + 1 + '&PageSize=' + 10;
        http("get",url).then(res => {
            console.log (res);
            this.setState({
                listData:res.rows
            })
        },error => {
            console.log("网络异常~",error);
            // reject(error)
        })
    }
    getCustomerCase(){
        let url = '/api/Contentbase/GetContentbases?ItemId='+'76B773D6-7DF3-445C-9F83-5D870A34FD81'+'&PageIndex=' + 1 + '&PageSize=' + 10;
        http("get",url).then(res => {
            this.setState({
                plateList:res.rows
            })
        },error => {
            console.log("网络异常~",error);
            // reject(error)
        })
    }
    successCase(){
        let url = '/api/Contentbase/GetContentbases?ItemId='+'76EE7EB1-0943-4182-87BC-87D3ADF8B9AB'+'&PageIndex=' + 1 + '&PageSize=' + 9;
        http("get",url).then(res => {
            var result = [];
            for(var i=0;i < res.rows.length;i+=3){
                result.push({list:res.rows.slice(i, i + 3)});
            }
            this.setState({
                bannerList:result
            })
        },error => {
            console.log("网络异常~",error);
            // reject(error)
        })
    }
    getNext(){
        this.refs.welcome.next();
    }
    getPrev(){
        this.refs.welcome.prev();
    }
    handleMouseOver=(e,id)=>{
        // console.log(e,key);
        const ToDoList1 = JSON.parse( JSON.stringify([...this.state.num]))
        this.setState({
            num:ToDoList1.map((item)=>{
                if(item.id==id){
                    item.hover = true;
                }
                return item;
            })
        })
    }
    handleMouseOut=(e,id)=>{
        const ToDoList1 = JSON.parse( JSON.stringify([...this.state.num]))
        this.setState({
            num:ToDoList1.map((item)=>{
                if(item.id==id){
                    item.hover = false;
                }
                return item;
            })
        })
    }
    todoList(){
       return this.state.num.map((key,index)=>{
            return (
                <div className={key.hover?'boxHover box':'box'} key={index} onMouseOver={(e)=>{this.handleMouseOver(e,key.id)}}
                     onMouseOut={(e)=>{this.handleMouseOut(e,key.id)}} >
                    <div className="radius">
                        <img src={require('../../images/icon.png')} alt=""/>
                    </div>
                    <div className="list">
                        <p className="name">一体化</p>
                        <p>· 涵盖科室的全面管理</p>
                        <p>· 跨部门级全面应用</p>
                        <p>· 前后胎数据一体化</p>
                    </div>
                </div>
            )
        })
    }
    bannerList(){
        // let arr = [{item:[1,2,3]},{item:[4,5,6]},{item:[7,8,9]}];
        let arr = this.state.bannerList;
        console.log(arr,'000')
        return arr.map((item,index)=>{
            return (
                <div style={swiperStyle} key={index}>
                    <div className="cont">
                        {
                            item.list.map((v,idx)=>{
                                if(v.Mediabases!=''){
                                    v.photo = 'http://192.168.1.200:9099/files/FileViewer.aspx?id='+v.Mediabases[0].ObjectId;
                                }else {
                                    v.photo = '';
                                }
                                return (
                                    <div className="box" key={idx}>
                                        <p className="img">
                                            <img src={v.photo} alt=""/>
                                        </p>
                                        <div className="caseCont">
                                            <div className="imgs">
                                                <img src={require('../../images/104.png')} alt=""/>
                                            </div>
                                            <p className={'text textRow'}>医药医疗：山西省长治市人民医院</p>
                                            <p className={'title_'}>{v.Title}</p>
                                            <div className="divs">
                                                <p className="text show">通过云和移动的技术助推医疗信息化改革，释放核心医疗资源，提升医生工作效率，解决患者看病难的问题。</p>
                                                <div className="signRed">
                                                    {/*<p>1000人以上</p><p>提升沟通效率、高效组织会议</p>*/}
                                                </div>
                                                {/*<p>{v}</p>*/}
                                            </div>

                                        </div>
                                    </div>
                                )

                            })
                        }
                    </div>
                </div>
            )
        })
    }
    plate(){
        return (
            this.state.plateList.map((item,index)=>{
                if(item.Mediabases!=''){
                    item.photo = 'http://192.168.1.200:9099/files/FileViewer.aspx?id='+item.Mediabases[0].ObjectId;
                }else {
                    item.photo = '';
                }
                return (
                    <div className="plate" key={index}>
                        <p>
                            <img src={item.photo} alt=""/>
                        </p>
                    </div>
                )
            })
        )
    }
    render() {
        let str ;
        str = this.state.tabList.map((item,index)=>{
            return(
                    <Link to={`${item.path}`}>
                        <li key={index} onClick={this.handleRouter}>{item.name}</li>
                    </Link>
                )
        })
        let plate;
        console.log(this.state.plateList,'----------')
        plate = this.state.plateList.map((item,index)=>{
            console.log(item.Mediabases)
            // if(item.Mediabases!=''){
            //     item.photo = 'http://192.168.1.200:9099/files/FileViewer.aspx?id='+item.Mediabases[0].ObjectId;
            // }else {
            //     item.photo = '';
            // }
            return (
                <div className="plate" key={index}>
                    <p>
                        {/* <img src={item.photo} alt=""/> */}
                    </p>
                </div>
            )
        })
        return (
            <div className="wrap">
                {/*<HashRouter>*/}
                {/*    <div>*/}
                {/*        <ul>*/}
                {/*            <li>*/}
                {/*                <Link to="/Detail">Detail</Link>*/}
                {/*                <IconStyle />*/}
                {/*                <i className="iconfont">&#xe627;</i>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*        <hr/>*/}
                {/*        <Route path="/Detail" component={Detail}></Route>*/}
                {/*    </div>*/}
                {/*</HashRouter>*/}
                {/*<div className="header_wrap">*/}
                {/*    <div className="header">*/}
                {/*        <div className={'l'}>*/}
                {/*            <p>*/}
                {/*                <img src={require('../../images/banner.png')} alt=""/>*/}
                {/*            </p>*/}
                {/*        </div>*/}
                {/*        <div className={'c'}>*/}
                {/*            <ul>*/}
                {/*                {str}*/}
                {/*            </ul>*/}
                {/*        </div>*/}
                {/*        <div className={'r'}>*/}
                {/*            <p className={'login'}>登录</p>*/}
                {/*            <p className={'register'} onClick={this.handleRegister}>注册</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="center">
                    <BannerList />
                    {/*<div className="banner">*/}
                    {/*    <div className="swiper-container" style={contentStyle}>*/}
                    {/*        <div className="swiper-wrapper">*/}
                    {/*            <div className="swiper-slide">*/}
                    {/*                <img style={{height: '100%'}} src={require('../../images/banner_1.jpg')} alt=""/>*!/*/}
                    {/*            </div>*/}
                    {/*            <div className="swiper-slide">*/}
                    {/*                <img style={{height: '100%'}} src={require('../../images/banner_2.jpg')} alt=""/>*!/*/}
                    {/*            </div>*/}
                    {/*            <div className="swiper-slide">*/}
                    {/*                <img style={{height: '100%'}} src={require('../../images/banner_3.jpg')} alt=""/>*!/*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className='swiper-pagination'>*/}

                    {/*        </div>*/}
                    {/*        <div className="bannerText">*/}
                    {/*            <p className="title">协同办公管理系统（OA）</p>*/}
                    {/*            <p className="desc">解决全周期、全领域办公需求*/}
                    {/*                </p>*/}
                    {/*            <p className="desc">基于平台化的产品架构，随需定制功能应用</p>*/}
                    {/*            <p className="btn">*/}
                    {/*                申请适用*/}
                    {/*            </p>*/}
                    {/*        </div>*/}
                            {/*<div className="swiper-button-prev">*/}
                            {/*    <IconStyle/>*/}
                            {/*    <i className="iconfont">&#xe629;</i>*/}
                            {/*</div>*/}
                            {/*左箭头。如果放置在swiper-container外面，需要自定义样式。*/}
                            {/*<div className="swiper-button-next">*/}
                            {/*    <IconStyle/>*/}
                            {/*    <i className="iconfont">&#xe62a;</i>*/}
                            {/*</div>*/}
                            {/*右箭头。如果放置在swiper-container外面，需要自定义样式。*/}
                        {/*</div>*/}

                        {/*<div className="copywriting">*/}
                        {/*    <h1>凤凰办公</h1>*/}
                        {/*    <h3>OA办公自动化平台</h3>*/}
                        {/*    <p className={'text'}>专注医院管理信息化，医院管理信息化解决方案，专注医院管理信息化，医院管理信息化解决方案。</p>*/}
                        {/*    <div className="btn-wrap">*/}
                        {/*        <p>试用申请</p>*/}
                        {/*        <p>下载APP</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="posBox">*/}
                        {/*    <div className="row" onClick={this.handlePhone}>*/}
                        {/*        <div className="icon">*/}
                        {/*            <IconStyle/>*/}
                        {/*            <i className="iconfont">&#xe627;</i>*/}
                        {/*        </div>*/}
                        {/*        <div className="phone">*/}
                        {/*            010-87897479*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className="qrCode">*/}
                        {/*        <IconStyle/>*/}
                        {/*        <i className="iconfont">&#xe600;</i>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    {/*</div>*/}

                    <div className="home_content">
                        <div className="tab_wrap">
                            <div className="tabs">
                                <p className={this.state.index==0?'tab active':'tab'} onMouseOver={(e)=>{this.handleMouseTab(e,{idx:0,
                                    id:'8CE6E996-1BF1-48BF-BF45-AB8DBA5559E7'})}}
                     onMouseOut={(e)=>{this.handleOutTab(e,{idx:0,
                        id:'8CE6E996-1BF1-48BF-BF45-AB8DBA5559E7'})}}>签约新闻</p>
                                <p className={this.state.index==1?'tab active':'tab'}  onMouseOver={(e)=>{this.handleMouseTab(e,{idx:1,
                                    id:'00BE0324-CDDA-457C-988C-9F564BCE041C'})}}
                     onMouseOut={(e)=>{this.handleOutTab(e,{idx:1,
                        id:'00BE0324-CDDA-457C-988C-9F564BCE041C'})}}>验收新闻</p>
                                <p className={this.state.index==2?'tab active':'tab'}   onMouseOver={(e)=>{this.handleMouseTab(e,{idx:2,
                                    id:'0DD1F56C-C329-41C6-BDB2-B021A36C4A7A'})}}
                     onMouseOut={(e)=>{this.handleOutTab(e,{idx:2,
                        id:'0DD1F56C-C329-41C6-BDB2-B021A36C4A7A'})}}>媒体报道</p>
                                <p className={this.state.index==3?'tab active':'tab'}  onMouseOver={(e)=>{this.handleMouseTab(e,{idx:3,
                                    id:'76EE7EB1-0943-4182-87BC-87D3ADF8B9AB'})}}
                     onMouseOut={(e)=>{this.handleOutTab(e,{idx:3,
                        id:'76EE7EB1-0943-4182-87BC-87D3ADF8B9AB'})}}>成功案例</p>
                            </div>
                            <ul className="uls">
                                {
                                    this.state.listData.map((item,index)=>{
                                        return (
                                            <Link to={`${'/Detail'}`} style={{width:"50%"}}>
                                                <li key={index} onClick={this.handleDetail.bind(this,item.ContentId)} >
                                                    <span className="dian"></span>
                                                    {item.Title}
                                                </li>
                                            </Link>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                        <Link to={`/Xinwen`} style={{display:"flex",color:'#4f98ff',marginTop:'40px',justifyContent:'center'}}>
                            <p>更多新闻动态</p>
                            <img src={require('../../images/1_more.png')} style={{
                                width:'20px',
                                height:'20px',
                                marginLeft:'10px'
                            }} alt=""/>
                        </Link>
                    </div>
                    {/*<div className="myService">*/}
                    {/*    <div className="leftCont">*/}
                    {/*        <h3 className="title">我们的服务</h3>*/}
                    {/*        <p className="service_desc">凤凰世纪 | 医院行业合作伙伴</p>*/}
                    {/*        <div className="service_content">*/}
                    {/*            <p className={'paragraph'}>为医院行业用户提供办公软件产品的部署、培训、实施服务；借助我们团队在医院行业多年经验和自主研发的产品，帮助医院行业用户全面提升管理效率。</p>*/}
                    {/*            <p>1. 软件产品免费的标准部署、培训、实施服务。</p>*/}
                    {/*            <p>2. 软件产品的VIP实施服务。</p>*/}
                    {/*            <p>3. 医院用户科室信息化的建设需求。</p>*/}
                    {/*            <p>4. 医院用户在内控管理方面及其它个性定制方面的需求。</p>*/}
                    {/*        </div>*/}
                    {/*        <div className="apply">*/}
                    {/*            申请试用*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="rightCont">*/}
                    {/*        <img src={require('../../images/1_dimg.jpg')} alt=""/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <MyServe/>
                    {/*<div className="service_wrap">*/}
                    {/*    <h3 className="service_title">*/}
                    {/*        我们的服务*/}
                    {/*    </h3>*/}
                    {/*    <p className="service_desc">凤凰世纪 | 医院行业合作伙伴</p>*/}
                    {/*    <div className="back" style={serviceBack}>*/}
                    {/*        <div className="cont_text">*/}
                    {/*            <div className="name">认证独立软件开发商</div>*/}
                    {/*            <div className="text_width">*/}
                    {/*                <div className="cont">*/}
                    {/*                    作为钉钉的服务商，为医院行业用户提供钉钉软件产品的部署、培训、实施服务；借助我们团队在医院行业21年经验和自主研发的产品，帮助医院行业用户全面提升管理效率。*/}
                    {/*                </div>*/}
                    {/*                <div className="cont">*/}
                    {/*                    <p>*/}
                    {/*                        1. 软件产品免费的标准部署、培训、实施服务。*/}
                    {/*                    </p>*/}
                    {/*                    <p>*/}
                    {/*                        2. 软件产品的VIP实施服务。*/}
                    {/*                    </p>*/}
                    {/*                    <p>*/}
                    {/*                        3. 医院用户科室信息化的建设需求。*/}
                    {/*                    </p>*/}
                    {/*                    <p>*/}
                    {/*                        4. 医院用户在内控管理方面及其它个性定制方面的需求。*/}
                    {/*                    </p>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="home_content">*/}
                    {/*    <div className="product_Wrap">*/}
                    {/*        <h3 className="row_title">*/}
                    {/*            我们的产品*/}
                    {/*        </h3>*/}
                    {/*        <p className="row_desc">基础OA + 专业业务管理系统</p>*/}
                    {/*        <div className="row_box_wrap">*/}
                    {/*            {*/}
                    {/*                this.state.myProductList.map((item,index)=>{*/}
                    {/*                    return (*/}
                    {/*                        <div className="child_box" key={index}>*/}
                    {/*                            <div className="radius">*/}
                    {/*                                <img src={item.img} alt=""/>*/}
                    {/*                            </div>*/}
                    {/*                            <div className="right_cont">*/}
                    {/*                                <p className="title">{item.name}</p>*/}
                    {/*                                <p className="text">*/}
                    {/*                                    {item.desc}*/}
                    {/*                                </p>*/}
                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                    )*/}
                    {/*                })*/}
                    {/*            }*/}

                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <MyProduct/>
                    <div className="service_wrap myAdvantage">
                        <div className="back" style={myImgs}>
                            <h3 className="service_title">
                                我们的优势
                            </h3>
                            <p className="service_desc">智能 <span></span> 互动 <span></span> 移动</p>
                            <div className="advantage">
                                {
                                    this.state.advantage.map((item,index)=>{
                                        return (
                                            <div className="boxs" key={index}>
                                                <div className="imgs">
                                                    <img src={item.imgUrl} alt=""/>
                                                </div>
                                                <div className="cont_copywriting">
                                                    <p className="title">{item.name}</p>
                                                    <p>{item.desc}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>

                    {/*<div className="tips">*/}
                    {/*    <p>最新动态 <span>【2019-07-19】北京安定医院临床心理中心成立暨临床心理病房正式开区</span> </p>*/}
                    {/*    <p>更多*/}
                    {/*        <IconStyle/>*/}
                    {/*        <i className="iconfont">&#xe62a;</i>*/}
                    {/*    </p>*/}
                    {/*</div>*/}
                    <div className="contents">
                        {/*<div className="box_wrap">*/}
                        {/*    <div className="title max">医院运营管理整体解决方案</div>*/}
                        {/*    <div className="title min">随时随地利用碎片化时间，轻松办公</div>*/}
                        {/*    <div className="cont_wrap">*/}
                        {/*        <div className={'left item'}>*/}
                        {/*            {*/}
                        {/*                this.todoList()*/}
                        {/*            }*/}

                        {/*        </div>*/}
                        {/*        <div className={'cen item'}>*/}
                        {/*            <div className="img_box">*/}
                        {/*                <img src={require('../../images/photo.png')} alt=""/>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className={'left item'}>*/}
                        {/*            {*/}
                        {/*                this.todoList()*/}
                        {/*            }*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="box_wrap module_wrap">*/}
                            {/*<div className="posBox">*/}
                            {/*    <div className="boxActive">*/}
                            {/*        <div className={'text'}>*/}
                            {/*            010-87897479*/}
                            {/*        </div>*/}
                            {/*        <div className="box" onClick={this.handlePhone}>*/}
                            {/*            <IconStyle/>*/}
                            {/*            <i className="iconfont">&#xe627;</i>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="boxActive">*/}
                            {/*        <div className="box">*/}
                            {/*            <IconStyle/>*/}
                            {/*            <i className="iconfont">&#xe600;</i>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="boxActive">*/}
                            {/*        <BackTop style={{position:'static',width:'50px',height:'50px'}}>*/}
                            {/*            /!*<div className="box" onClick={this.handleTopping}>*!/*/}
                            {/*            <div className="box">*/}
                            {/*                <IconStyle/>*/}
                            {/*                <i className="iconfont">&#xe63b;</i>*/}
                            {/*            </div>*/}
                            {/*        </BackTop>*/}
                            {/*    </div>*/}


                            {/*</div>*/}
                        {/*    <div className="title max">医院运营管理整体解决方案</div>*/}
                        {/*    <div className="title min">随时随地利用碎片化时间，轻松办公</div>*/}
                        {/*    <div className="module">*/}
                        {/*        <div className="box">*/}
                        {/*            <div>*/}
                        {/*                <div className="boxRadius">*/}
                        {/*                    <img src={require('../../images/d.png')} alt=""/>*/}
                        {/*                </div>*/}
                        {/*                <p className="name">组织架构</p>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="box">*/}
                        {/*            <div>*/}
                        {/*                <div className="boxRadius">*/}
                        {/*                    <img src={require('../../images/d.png')} alt=""/>*/}
                        {/*                </div>*/}
                        {/*                <p className="name">组织架构</p>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="box">*/}
                        {/*            <div>*/}
                        {/*                <div className="boxRadius">*/}
                        {/*                    <img src={require('../../images/d.png')} alt=""/>*/}
                        {/*                </div>*/}
                        {/*                <p className="name">组织架构</p>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="box">*/}
                        {/*            <div>*/}
                        {/*                <div className="boxRadius">*/}
                        {/*                    <img src={require('../../images/d.png')} alt=""/>*/}
                        {/*                </div>*/}
                        {/*                <p className="name">组织架构</p>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="box">*/}
                        {/*            <div>*/}
                        {/*                <div className="boxRadius">*/}
                        {/*                    <img src={require('../../images/d.png')} alt=""/>*/}
                        {/*                </div>*/}
                        {/*                <p className="name">组织架构</p>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="box">*/}
                        {/*            <div>*/}
                        {/*                <div className="boxRadius">*/}
                        {/*                    <img src={require('../../images/d.png')} alt=""/>*/}
                        {/*                </div>*/}
                        {/*                <p className="name">组织架构</p>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="box">*/}
                        {/*            <div>*/}
                        {/*                <div className="boxRadius">*/}
                        {/*                    <img src={require('../../images/d.png')} alt=""/>*/}
                        {/*                </div>*/}
                        {/*                <p className="name">组织架构</p>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="box">*/}
                        {/*            <div>*/}
                        {/*                <div className="boxRadius">*/}
                        {/*                    <img src={require('../../images/d.png')} alt=""/>*/}
                        {/*                </div>*/}
                        {/*                <p className="name">组织架构</p>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="box">*/}
                        {/*            <div>*/}
                        {/*                <div className="boxRadius">*/}
                        {/*                    <img src={require('../../images/d.png')} alt=""/>*/}
                        {/*                </div>*/}
                        {/*                <p className="name">组织架构</p>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="box">*/}
                        {/*            <div>*/}
                        {/*                <div className="boxRadius">*/}
                        {/*                    <img src={require('../../images/d.png')} alt=""/>*/}
                        {/*                </div>*/}
                        {/*                <p className="name">组织架构</p>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="box">*/}
                        {/*            <div>*/}
                        {/*                <div className="boxRadius">*/}
                        {/*                    <img src={require('../../images/d.png')} alt=""/>*/}
                        {/*                </div>*/}
                        {/*                <p className="name">组织架构</p>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="box">*/}
                        {/*            <div>*/}
                        {/*                <div className="boxRadius">*/}
                        {/*                    <img src={require('../../images/d.png')} alt=""/>*/}
                        {/*                </div>*/}
                        {/*                <p className="name">组织架构</p>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="box_wrap back_wrap" style={sectionStyle}>*/}
                        {/*    <div className="title max">提供更全面的专家级服务支持</div>*/}
                        {/*    <div className="title min">从运营理念到实操技能，为客户提供包括远程协助、智能客服、现场服务等多元立体化的一对一学习运营和顾问服务，全面解决平台运营难题</div>*/}
                        {/*    <div className="contBox">*/}
                        {/*        <ul>*/}
                        {/*            <li className="lis">*/}
                        {/*                <div className="imgTop">*/}
                        {/*                    <img src={require('../../images/r.png')} alt=""/>*/}
                        {/*                </div>*/}
                        {/*                <div className="cont_text">*/}
                        {/*                    <div className="title">360度服务体验</div>*/}
                        {/*                    <div className="text">*/}
                        {/*                        通过邮件、电话等方式监控设备运行状况，及时掌控设施缺陷及安全问题。*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </li>*/}
                        {/*            <li className="lis">*/}
                        {/*                <div className="imgTop">*/}
                        {/*                    <img src={require('../../images/82.png')} alt=""/>*/}
                        {/*                </div>*/}
                        {/*                <div className="cont_text">*/}
                        {/*                    <div className="title">专业的技术团队</div>*/}
                        {/*                    <div className="text">*/}
                        {/*                        由多位资深IT及移动化经验的技术人员组成的专业服务团队。*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </li>*/}
                        {/*            <li className="lis">*/}
                        {/*                <div className="imgTop">*/}
                        {/*                    <img src={require('../../images/83.png')} alt=""/>*/}
                        {/*                </div>*/}
                        {/*                <div className="cont_text">*/}
                        {/*                    <div className="title">完善的培训机制</div>*/}
                        {/*                    <div className="text">*/}
                        {/*                        我们免费给您提供解决方案，系统功能更新、技术专题的讲解与培训。*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </li>*/}
                        {/*            <li className="lis">*/}
                        {/*                <div className="imgTop">*/}
                        {/*                    <img src={require('../../images/84.png')} alt=""/>*/}
                        {/*                </div>*/}
                        {/*                <div className="cont_text">*/}
                        {/*                    <div className="title">定制化的解决方案</div>*/}
                        {/*                    <div className="text">*/}
                        {/*                        为企业提供移动化、平台化、云端化、定制化的生态系统整体解决方案。*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </li>*/}
                        {/*        </ul>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="box_wrap ban_wrap">
                            <div className="title max">成功案例</div>
                            <div className="title min">凤凰办公的产品，全方位为您提供服务</div>
                            <div className="banner_box">
                                <div className="icon_left" onClick={this.getPrev.bind(this)}>
                                    <IconStyle/>
                                    <i className="iconfont">&#xe629;</i>
                                </div>
                                <div className="banner">
                                    <Carousel ref="welcome" dots={false}>
                                        {this.bannerList()}
                                    </Carousel>
                                </div>
                                <div className="icon_right" onClick={this.getNext.bind(this)}>
                                    <IconStyle/>
                                    <i className="iconfont">&#xe62a;</i>
                                </div>
                            </div>
                            <div className="advertPlate">
                                {this.plate()}
                            </div>
                            <div className="more">

                                <Link to={`/CustomerCase`} style={{display:"flex",color:'#4f98ff',justifyContent:'center'}}>
                                    <p>更多客户案例</p>
                                    <img src={require('../../images/1_more.png')} style={{
                                        width:'20px',
                                        height:'20px',
                                        marginLeft:'10px'
                                    }} alt=""/>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="bottom_wrap">*/}
                {/*    <div className="item">*/}
                {/*        <p className="title">联系我们</p>*/}
                {/*        <p className="text">010-87897479</p>*/}
                {/*        <p className="text">lzy@phxinfo.com.cn</p>*/}
                {/*        <p className="text">北京市海淀区花园路5号2F  北京凤凰世纪科技有限公司</p>*/}
                {/*    </div>*/}
                {/*    <div className="item">*/}
                {/*        <p className="title">快速通道</p>*/}
                {/*        <p className="text">首页</p>*/}
                {/*    </div>*/}
                {/*    <div className="item">*/}
                {/*        <p className="title">产品</p>*/}
                {/*        <p className="text">人力资源系统</p>*/}
                {/*        <p className="text">医院绩效管理系统</p>*/}
                {/*        <p className="text">档案管理系统</p>*/}
                {/*        <p className="text">合同管理系统</p>*/}
                {/*    </div>*/}
                {/*    <div className="item">*/}
                {/*        <p className="title">关于我们</p>*/}
                {/*        <p className="text">公司简介</p>*/}
                {/*        <p className="text">新闻动态</p>*/}
                {/*        <p className="text">人才招聘</p>*/}
                {/*        <p className="text">联系我们</p>*/}
                {/*    </div>*/}
                {/*    <div className="item">*/}
                {/*        <p className="title">相关链接</p>*/}
                {/*        <p className="text">体验凤凰办公</p>*/}
                {/*    </div>*/}
                {/*    <div className="item qrCode">*/}
                {/*        <div className="imgs">*/}
                {/*            二维码*/}
                {/*        </div>*/}
                {/*        <p className="text">下载：凤凰办公</p>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="footer">*/}
                {/*    © 2019 北京凤凰世纪科技有限公司  |  京ICP备16024828号*/}
                {/*</div>*/}
                <NewFooter/>
            </div>
        )
    }
}
export default Home;