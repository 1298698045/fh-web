import React,{useEffect,useState,useRef,useImperativeHandle} from "react";
import { Modal, Button ,Form, Input,Row, Col,message } from 'antd';
import FormModal from "./FormModal";
import '../css/home.scss';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
const contentStyle = {
    height: '570px',
    color: '#fff',
    textAlign: 'center',
    background: '#fff',
    autoplay:false

};
const BannerList = () => {
    const childRef = useRef();
    const updateChildState = () => {
        // changeVal就是子组件暴露给父组件的方法
        console.log(childRef,'---')
        childRef.current.getApply(true);
    }
    useEffect(()=>{
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
    },[])
    return (
        <div className={'center'}>
            <div className={'banner'}>
                <div className="swiper-container" style={contentStyle}>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img style={{height: '100%'}} src={require('../images/banner_1.jpg')} alt=""/>*/}
                        </div>
                        <div className="swiper-slide">
                            <img style={{height: '100%'}} src={require('../images/banner_2.jpg')} alt=""/>*/}
                        </div>
                        <div className="swiper-slide">
                            <img style={{height: '100%'}} src={require('../images/banner_3.jpg')} alt=""/>*/}
                        </div>
                    </div>
                    <div className='swiper-pagination'>

                    </div>
                    <div className="bannerText">
                        <div className="bannerText_child">
                            <p className="title">协同办公管理系统（OA）</p>
                            <p className="desc">解决全周期、全领域办公需求
                            </p>
                            <p className="desc">基于平台化的产品架构，随需定制功能应用</p>
                            <p className="btn" onClick={updateChildState}>
                                申请试用
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <FormModal ref={childRef} cRef={childRef} />
        </div>

    )
}
export default BannerList;