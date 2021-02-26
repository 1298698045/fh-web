import React from 'react';
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
    return (
        <div className="posBox">
            <div className="boxActive">
                <div className={'text'}>
                    010-87897479
                </div>
                <div className="box" onClick={handlePhone}>
                    <IconStyle/>
                    <i className="iconfont">&#xe627;</i>
                    <p className="phone_text">电话咨询</p>
                </div>
            </div>
            <div className="boxActive">
                <div className="box">
                    <IconStyle/>
                    <i className="iconfont">&#xe600;</i>
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
                        <IconStyle/>
                        <i className="iconfont">&#xe63b;</i>
                        <p className="phone_text">返回顶部</p>
                    </div>
                </BackTop>
            </div>
        </div>
    )
}
export default Aside;