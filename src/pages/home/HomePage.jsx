import React,{useState,useEffect,useRef} from "react";
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
// import styles from  './homePage.module.scss';
// console.log('styles', styles);
import "./homePage.scss"
import {IconStyle} from "../../static/iconfont/iconfont";
import "animate.css";
import backUrl from "../../images/bj.png";
import { Carousel , BackTop} from 'antd';
// import styled from 'styled-components'
const windowWidth = window.innerWidth;
const contentStyle = {
    height: '100%',
    color: '#fff',
    textAlign: 'center',
    background: '#fff',
    autoplay:false
};
const backStyle = {
    width: "100%",
    height: "auto",
    backgroundImage: `url(${backUrl})`,
    backgroundRepeat:'no-repeat'
};
const swiperStyle = {
    width:"80%",
    height:"315px",
    color: "#fff",
    lineHeight: "315px",
    background: "#fff",
    autoplay: false
}
const HomePage = () => {
    const height = window.innerHeight-1;
    const [isBook,setIsBook] = useState(false);
    const [index,setIndex] = useState(0);
    const [list,setList] = useState([1,2,3,4,5,6,7,8,9])
    const bannerRef = useRef();
    const [numbers,setNumbers] = useState(0);
    console.log(bannerRef,'bannerRef')
    useEffect(() => {
        var mySwiper = new Swiper('.swiper-container', {
            direction : 'vertical',
            autoplay: true,
            duration: 1000,
            autoHeight:true,
            // mousewheel: true,
            mousewheel: {
                releaseOnEdges: true,//PC端释放滑动
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            on:{
                touchStart:function(swiper,event){
                    console.log(event)
                },
                slideChange: function(){
                    console.log('改变了，activeIndex为'+this.activeIndex);
                    setIndex(this.activeIndex)
                    // setTimeout(()=>{
                        // setIndex(this.activeIndex)
                    // }, 200)
                    // if(this.activeIndex==1){
                    //     setIsBook(true)
                    // }else{
                    //     setIsBook(false)
                    // }
                },
            }
        })
        var mySwiper = new Swiper('.swiper-container-child', {
            autoplay: false,
            duration: 1000,
            loop: true,
            pagination : {
                el: '.swiper-pagination1',
                clickable: true,
                clickableClass : 'my-pagination-clickable',
            }

        });
    }, []);
    const bannerChildren = (
        <div className="swiper-container-child" style={contentStyle}>
            <div className="swiper-wrapper">
                <div className="swiper-slide swiper-slide-child">
                    <img src={require('../../images/813.png')} alt=""/>
                    <div className="boxCont">
                        <div className="cont">
                            {/*<p className="title animate__animated animate__bounceInDown animate__delay-1s">医院协同办公平台解决方案</p>*/}
                            {index==0&&<p className={'title animate__animated animate__bounceInDown animate__delay-0s'}>医院协同办公平台解决方案</p>}
                            {index==1&&<p className={'title'}>医院协同办公平台解决方案</p>}
                            {/*<p className={index==1?'title animate__animated animate__bounceInDown animate__delay-1s':'title'}>医院协同办公平台解决方案</p>*/}

                            <div className={'box animate__animated animate__lightSpeedInLeft'}>
                                <p>专做医院协同办公系统的提供商</p>
                                <p>北京中关村的国家级高新技术企业、双软认证企业“三专团队”</p>
                                <p>专业医院解决方案、专注于医院管理、专家级资询团</p>
                            </div>
                            <p className="btn animate__animated animate__backInUp">试用申请</p>
                        </div>
                        <div className="imgs">
                            <img src={require('../../images/814.png')} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <img src={require('../../images/813.png')} alt=""/>
                </div>
                <div className="swiper-slide">
                    <img src={require('../../images/813.png')} alt=""/>
                </div>
            </div>
            <div className='swiper-pagination1'>

            </div>
        </div>
    )
    const contTwo = (
        <div className="boxContent">
            <div className="boxFlex">
                <div className="leftBox">
                    <div className="box">
                        <h1 className="name">智能化</h1>
                        <p>OA通过智能语音来交互，消除软件界面；</p>
                        <p>让组织每位成员拥有一位7*24小时的智能办公助理!</p>
                    </div>
                    <div className="box">
                        <h1 className="name">平台化</h1>
                        <p>OA平台与其他异构系统集成构建统一工作平台，</p>
                        <p>7大引擎满足组织灵活变化需求，实现按需应变！</p>
                    </div>
                    <div className="box">
                        <h1 className="name">全程电子化</h1>
                        <p>电子印章、电子签名、电子合同、电子存证，</p>
                        <p>彻底告别纸张办公，让组织的整个运营流程完全电子化！</p>
                    </div>
                </div>
                <div className="rightBox">
                    {/*<img src={require('../../images/815.png')} alt=""/>*/}
                </div>
            </div>
        </div>
    );
    const contThree = (
        <div className="boxContent">
                <div className="head_title">
                <h1 className='title'>满足更多的办公场景</h1>
                <p className='text'>基础OA + 专业业务管理系统</p>
            </div>
            <div className="box_block">
                {
                    list.map((item,index)=>{
                        return (
                            <div className="box" key={index}>
                                <div className="icon">
                                    <img src={require('../../images/16.png')} alt=""/>
                                </div>
                                <div className="info_text">
                                    <p className="name_title">门户管理</p>
                                    <p className="desc">整合信息  集中展现  方便查看</p>
                                </div>
                            </div>
                            )
                    })
                }
            </div>
        </div>
    );
    const contFour = (
        <div className="boxContent">
            <div className="head_title head_title_color">
                <h1 className='title'>提供更全面的专家级服务支持</h1>
                <p className='text'>从运营理念到实操技能，为客户提供包括远程协助、智能客服、现场服务等多元立体化的一对一学习运营和顾问服务，全面解决平台运营难题</p>
            </div>
            <div className="cont_Box">
                <ul>
                    <li className="lis">
                        <div className="imgTop">
                            <img src={require('../../images/r.png')} alt=""/>
                        </div>
                        <div className="cont_text">
                            <div className="title">360度服务体验</div>
                            <div className="text">
                                通过邮件、电话等方式监控设备运行状况，及时掌控设施缺陷及安全问题。
                            </div>
                        </div>
                    </li>
                    <li className="lis">
                        <div className="imgTop">
                            <img src={require('../../images/82.png')} alt=""/>
                        </div>
                        <div className="cont_text">
                            <div className="title">专业的技术团队</div>
                            <div className="text">
                                由多位资深IT及移动化经验的技术人员组成的专业服务团队。
                            </div>
                        </div>
                    </li>
                    <li className="lis">
                        <div className="imgTop">
                            <img src={require('../../images/83.png')} alt=""/>
                        </div>
                        <div className="cont_text">
                            <div className="title">完善的培训机制</div>
                            <div className="text">
                                我们免费给您提供解决方案，系统功能更新、技术专题的讲解与培训。
                            </div>
                        </div>
                    </li>
                    <li className="lis">
                        <div className="imgTop">
                            <img src={require('../../images/84.png')} alt=""/>
                        </div>
                        <div className="cont_text">
                            <div className="title">定制化的解决方案</div>
                            <div className="text">
                                为企业提供移动化、平台化、云端化、定制化的生态系统整体解决方案。
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
    const getNext = () =>{
        bannerRef.current.slick.slickNext();
    };
    const getPrev = () =>{
        bannerRef.current.slick.slickPrev();
    };

    let arr;
    console.log(windowWidth,'windowWidth')
    if(windowWidth<1920){
        arr = [1,2,3,4,5]
    }else {
        arr = [0,1,2,3,4,5,6,7,8,9]
    }
    const bannerList = ()=> {
        let arr = [{item:[1,2,3]},{item:[4,5,6]},{item:[7,8,9]}];
        return  arr.map((item,index)=>{
            return (
                <div style={swiperStyle} key={index}>
                    <div className="cont">
                        {
                            item.item.map((v,idx)=>{
                                return (
                                    <div className="box" key={idx}>
                                        <p className="img">
                                            <img src={require('../../images/103.png')} alt=""/>
                                        </p>
                                        <div className="caseCont">
                                            <div className="imgs">
                                                <img src={require('../../images/104.png')} alt=""/>
                                            </div>
                                            <p className={'text textRow'}>医药医疗：山西省长治市人民医院</p>
                                            <p className={'title_'}>移动办公快速解决农户燃眉之需</p>
                                            <div className="divs">
                                                <p className="text show">通过云和移动的技术助推医疗信息化改革，释放核心医疗资源，提升医生工作效率，解决患者看病难的问题。</p>
                                                <div className="signRed">
                                                    <p>1000人以上</p><p>提升沟通效率、高效组织会议{v}</p>
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
    const plate = arr.map((item,index)=>{
        return (
            <div className="plate" key={index}>
                <p>
                    <img src={require('../../images/113.png')} alt=""/>
                </p>
            </div>
        )
    })
    const contFive = (
        <div className="boxContent">
            <div className="head_title" style={{paddingBottom:'2%',marginTop:'2%'}}>
                <h1 className='title'>客户案例</h1>
                <p className='text'>凤凰办公的产品，全方位为您提供服务</p>
            </div>
            <div className="banner_box">
                <div className="leftIcon" onClick={getPrev}>
                    <img src={require('../../images/759.png')} alt=""/>
                </div>
                <Carousel dots={false} ref={bannerRef}>
                    {bannerList()}
                </Carousel>

                <div className="rightIcon" onClick={getNext}>
                    <img src={require('../../images/759.png')} alt=""/>
                </div>
            </div>
            <div className="advertPlate">
                {plate}
            </div>
            <div style={{textAlign:'center',marginTop:'30px',color:'#b31e23',cursor:'pointer'}}>
                更多客户案例
                <IconStyle/>
                <i className="iconfont">&#xe62a;</i>
            </div>
        </div>
    );
    const getSwitch = (index) =>{
        setNumbers(index);
    }
    const contSix = (
        <div className={'contSix'}>
            <div className="apply">
                专业咨询顾问，为您提供1对1专属服务
                <p className={'btn'}>试用申请</p>
            </div>
            <div className="footerBar">
                <div className="box-wrap">
                    <div className="lBox">
                        <div className="column">
                            <p className="title">快速入口</p>
                            <p className="text">首页</p>
                            <p className="text">试用申请</p>
                            <p className="text">新闻中心</p>
                            <p className="text">客户案例</p>
                        </div>
                        <div className="column">
                            <p className="title">产品中心</p>
                            <p className="text">协同办公系统（OA）</p>
                            <p className="text">人力资源管理系统</p>
                            <p className="text">电子票据管理平台</p>
                            <p className="text">智能报销管理系统</p>
                            <p className="text">合同管理系统</p>
                            <p className="text">固定资产管理系统</p>
                        </div>
                        <div className="column">
                            <p className="title">移动（OA）</p>
                            <p className="text">需求分析</p>
                            <p className="text">产品价值</p>
                            <p className="text">应用优势</p>
                            <p className="text">产品功能</p>
                            <p className="text">下载关注</p>
                        </div>
                        <div className="column">
                            <p className="title">关于我们</p>
                            <p className="text">公司介绍</p>
                            <p className="text">技术资质</p>
                            <p className="text">加入我们</p>
                            <p className="text">联系我们</p>
                        </div>
                    </div>
                    <div className="rBox">
                        <div className="column">
                            <p className="title">售前咨询</p>
                            <p className="text"><IconStyle/>
                                <i className="iconfont" style={{marginRight:'10px'}}>&#xe61b;</i>010-87897479</p>
                            <p className="text"><IconStyle/>
                                <i className="iconfont" style={{marginRight:'10px'}}>&#xe62e;</i>lzy@phxinfo.com.cn</p>
                            <p className="text"><IconStyle/>
                                <i className="iconfont" style={{marginRight:'10px'}}>&#xe61f;</i>北京市海淀区花园路5号5幢(天博中润）2层221室</p>
                        </div>
                        <div className="qrCode_wrap">
                            <div className="row">
                                <p className="imgs" onClick={()=>{getSwitch(0)}}>
                                    <img src={require('../../images/574.png')} alt=""/>
                                </p>
                                <p className="imgs" onClick={()=>{getSwitch(1)}}>
                                    <img src={require('../../images/574.png')} alt=""/>
                                </p>
                                <p className="imgs" onClick={()=>{getSwitch(2)}}>
                                    <img src={require('../../images/574.png')} alt=""/>
                                </p>
                            </div>
                            <div className="qrCode">
                                <div className={numbers==0?'qr-img':numbers==1?'qr-img-one':'qr-img-two'}></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="textUrl">
                <p>Copyright © 2020 北京凤凰世纪科技有限公司版权所有  |  京ICP备16024828号</p>
                <p>京公网安备11030102010604</p>
            </div>
        </div>
    );
    const banner = (
        <div className="swiper-container swiper-no-swiping">
            <div className="swiper-wrapper" style={{height:height+'px'}}>
                <div className="swiper-slide" style={{background:"red"}}>{bannerChildren}</div>
                <div className="swiper-slide" style={{background:"#f6f6f9"}}>
                    {contTwo}
                </div>
                {/*<div className="swiper-slide" style={{background:"#3399ff"}}>*/}
                {/*    {index==1&&<p className={'animate__animated animate__lightSpeedInLeft'} style={{marginTop:'100px'}}>sdjkfsdfasdfasfdsaa</p>}*/}
                {/*    /!*<p className={index==1?'animate__animated animate__lightSpeedInLeft animate__delay-2s':''} style={{marginTop:'100px'}}>sdjkfsdfasdfasfdsaa</p>*!/*/}
                {/*</div>*/}
                <div className="swiper-slide" style={{background:"#ffffff"}}>
                    {contThree}
                </div>
                <div className="swiper-slide" style={backStyle}>
                    {contFour}
                </div>
                <div className="swiper-slide" style={{background:"#fff"}}>
                    {contFive}
                </div>
                <div className="swiper-slide" style={{background:"#fff"}}>
                    {contSix}
                </div>
            </div>
            <div className='swiper-pagination'>

            </div>
        </div>
    )
    return  (
        <>
            <div className="homer_wrap">
                <div className="center">
                    {banner}
                </div>

            </div>
        </>
    )
}
export default HomePage;