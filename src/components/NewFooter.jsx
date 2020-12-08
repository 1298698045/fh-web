import React,{useEffect,useState,useRef} from "react";
import {IconStyle} from "../static/iconfont/iconfont";
import '../css/newFooter.scss';
const NewFooter = () => {
    const [numbers,setNumbers] = useState(0);
    const getSwitch = (index) =>{
        setNumbers(index);
    }
    return (
        <>
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
                                        <img src={require('../images/574.png')} alt=""/>
                                    </p>
                                    <p className="imgs" onClick={()=>{getSwitch(1)}}>
                                        <img src={require('../images/574.png')} alt=""/>
                                    </p>
                                    <p className="imgs" onClick={()=>{getSwitch(2)}}>
                                        <img src={require('../images/574.png')} alt=""/>
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
        </>
    )
}
export default NewFooter;