import React,{useEffect,useState,useRef,useImperativeHandle} from "react";
import FormModal from "./FormModal";
import {IconStyle} from "../static/iconfont/iconfont";
import {BackTop} from "antd";
import '../css/aside.scss';
const Aside = () => {
    const handlePhone = ()=> {
        window.location.href = "tel://10086";
    }
    const handleTopping = ()=> {
        window.scrollTo(0,0);
    }
    const childRef = useRef();
    const updateChildState = () => {
        // changeVal就是子组件暴露给父组件的方法
        console.log(childRef,'---')
        childRef.current.getApply(true);
    }
    return (
        <div className="posBox">
            <div className="boxActive">
                <div className={'text'}>
                    010-87897479
                </div>
                <div className="box" onClick={handlePhone}>
                    {/*<IconStyle/>*/}
                    {/*<i className="iconfont">&#xe627;</i>*/}
                    <img className={'icon_img'} src={require('../images/1_c1_Phone.png')} alt=""/>
                    <p className="phone_text">电话咨询</p>
                </div>
            </div>
            <div className="boxActive">
                <div className="box" onClick={updateChildState}>
                    {/*<IconStyle/>*/}
                    {/*<i className="iconfont">&#xe627;</i>*/}
                    <img className={'icon_img'} src={require('../images/1_c3_Apply.png')} alt=""/>
                    <p className="phone_text">试用申请</p>
                </div>
            </div>
            <div className="boxActive">
                <div className="box">
                    {/*<IconStyle/>*/}
                    {/*<i className="iconfont">&#xe600;</i>*/}
                    <img className={'icon_img'} src={require('../images/1_c2_QRcode.png')} alt=""/>
                    <p className="phone_text">扫描下载</p>
                </div>
                <div className="qrCode">
                    <div className="box_position">
                        <img src={require('../images/apple_link.png')} alt=""/>
                    </div>
                    <div className="box_text">苹果客户端</div>
                    <div className="box_position">
                        <img src={require('../images/android.png')} alt=""/>
                    </div>
                    <div className="box_text">安卓客户端</div>
                </div>
            </div>
            <div className="boxActive">
                <BackTop style={{position:'static',width:'50px',height:'50px'}}>
                    {/*<div className="box" onClick={handleTopping}>*/}
                    <div className="box">
                        {/*<IconStyle/>*/}
                        {/*<i className="iconfont">&#xe63b;</i>*/}
                        <img className={'icon_img'} src={require('../images/1_c4_UP.png')} alt=""/>
                        <p className="phone_text">返回顶部</p>
                    </div>
                </BackTop>
            </div>
            <FormModal ref={childRef} cRef={childRef} />
        </div>
    )
}
export default Aside;