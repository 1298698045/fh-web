import React,{useState,useEffect} from "react";
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import './homePage.scss';
import {IconStyle} from "../../static/iconfont/iconfont";
import "animate.css";
const contentStyle = {
    height: '100%',
    color: '#fff',
    textAlign: 'center',
    background: '#fff',
    autoplay:false

};
const HomePage = () => {
    const height = window.innerHeight;
    const [isBook,setIsBook] = useState(false)
    useEffect(() => {
        var mySwiper = new Swiper('.swiper-container', {
            direction : 'vertical',
            autoHeight:true,
            mousewheel: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            on:{
                slideChange: function(){
                    console.log('改变了，activeIndex为'+this.activeIndex);
                    if(this.activeIndex==1){
                        
                    }
                },
            }
        })
        var mySwiper = new Swiper('.swiper-container-child', {
            autoplay: false,
            diration: 1000,
            loop: true,
            pagination : {
                el: '.swiper-pagination1',
                clickable: true,
                clickableClass : 'my-pagination-clickable',
            }

        });
    });
    const bannerChildren = (
        <div className="swiper-container-child" style={contentStyle}>
            <div className="swiper-wrapper">
                <div className="swiper-slide swiper-slide-child">
                    <img src={require('../../images/813.png')} alt=""/>
                    <div className="boxCont">
                        <div className="cont">
                            <p className="title animate__animated animate__bounceInDown animate__delay-1s">医院协同办公平台解决方案</p>
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
    const banner = (
        <div className="swiper-container swiper-no-swiping">
            <div className="swiper-wrapper" style={{height:height+'px'}}>
                <div className="swiper-slide" style={{background:"red"}}>{bannerChildren}</div>
                <div className="swiper-slide" style={{background:"#3399ff"}}>
                    <p className={'animate__animated animate__lightSpeedInLeft'}>萨克利夫打死了发动机</p>
                </div>
                <div className="swiper-slide" style={{background:"#ccc"}}>slider3</div>
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