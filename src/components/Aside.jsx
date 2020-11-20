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
                </div>
            </div>
            <div className="boxActive">
                <div className="box">
                    <IconStyle/>
                    <i className="iconfont">&#xe600;</i>

                </div>
                <div className="qrCode">

                </div>
            </div>
            <div className="boxActive">
                <BackTop style={{position:'static',width:'50px',height:'50px'}}>
                    {/*<div className="box" onClick={handleTopping}>*/}
                    <div className="box">
                        <IconStyle/>
                        <i className="iconfont">&#xe63b;</i>
                    </div>
                </BackTop>
            </div>
        </div>
    )
}
export default Aside;