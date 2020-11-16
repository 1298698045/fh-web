import React,{useState,useEffect} from "react";
// import { HashRouter,Link ,Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import '../css/home.scss';

const LayoutFooter = () => {
    return (
        <div className="wrap">
            <div className="bottom_wrap">
                <div className="item">
                    <p className="title">联系我们</p>
                    <p className="text">010-87897479</p>
                    <p className="text">lzy@phxinfo.com.cn</p>
                    <p className="text">北京市海淀区花园路5号2F  北京凤凰世纪科技有限公司</p>
                </div>
                <div className="item">
                    <p className="title">快速通道</p>
                    <p className="text">首页</p>
                </div>
                <div className="item">
                    <p className="title">产品</p>
                    <p className="text">人力资源系统</p>
                    <p className="text">医院绩效管理系统</p>
                    <p className="text">档案管理系统</p>
                    <p className="text">合同管理系统</p>
                </div>
                <div className="item">
                    <p className="title">关于我们</p>
                    <p className="text">公司简介</p>
                    <p className="text">新闻动态</p>
                    <p className="text">人才招聘</p>
                    <p className="text">联系我们</p>
                </div>
                <div className="item">
                    <p className="title">相关链接</p>
                    <p className="text">体验凤凰办公</p>
                </div>
                <div className="item qrCode">
                    <div className="imgs">
                        二维码
                    </div>
                    <p className="text">下载：凤凰办公</p>
                </div>
            </div>
            <div className="footer">
                © 2019 北京凤凰世纪科技有限公司  |  京ICP备16024828号
            </div>
        </div>
    )
}
export default LayoutFooter;