import React,{ useState , useEffect , useRef } from "react";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';
import {Carousel,Divider,Pagination  } from "antd";
import {IconStyle} from "../../static/iconfont1/iconfont";
import './index.scss';
import NewFooter from "../../components/NewFooter";
const Download = () => {
    return (
        <div className="wrap">
            <div className="banner">
                <img className='bagImg' src={require('../../images/389.png')} alt=""/>
                <div className="recommentImg">
                    <img src={require('../../images/393.png')} alt=""/>
                </div>
                <div className="textWrap">
                    <h1>凤凰办公APP</h1>
                    <h3>随时随地轻松办公</h3>
                    <div className="row">
                        <div className="box">
                            <IconStyle/>
                            <i className="iconfont">
                                &#xe622;
                            </i>
                            <div>
                                <p>Android 版</p>
                                <p>下载</p>
                            </div>
                        </div>
                        <div className="box">
                            <IconStyle/>
                            <i className="iconfont">
                                &#xe63d;
                            </i>
                            <div>
                                <p><a href="https://apps.apple.com/cn/app/%E5%87%A4%E5%87%B0%E5%8A%9E%E5%85%AC/id1148909193">APP Store</a></p>
                                <p><a href="https://apps.apple.com/cn/app/%E5%87%A4%E5%87%B0%E5%8A%9E%E5%85%AC/id1148909193">下载</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NewFooter/>
        </div>
    )
}
export default Download;