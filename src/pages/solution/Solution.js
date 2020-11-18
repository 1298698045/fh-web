import React,{ useState , useEffect , useRef } from "react";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';
import {Carousel,Divider,Pagination  } from "antd";
import {IconStyle} from "../../static/iconfont/iconfont";
import './index.scss';
import backUrl from '../../images/532.svg';
var sectionStyle = {
    width: "100%",
    height: "auto",
// makesure here is String确保这里是一个字符串，以下是es6写法
    backgroundImage: `url(${backUrl})`
};
const contentStyle = {
    height: '470px',
    color: '#fff',
    lineHeight: '470px',
    textAlign: 'center',
    background: '#364d79',
    autoplay:false
};

const Solution = () =>{
    const welcome = useRef(null);
    const handlePhone = () => {

    }
    const [data,setData] = useState([1,2,3,4,5,6]);
    const todoList = data.map((item,index)=>{
        return (
            <div className={'box'}>
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
    return (
        <div className='wrap'>
            <div className="center">
                <div className="banner">
                    <Carousel ref={welcome}>
                        <div className={'rotation'}>
                            <h3 style={contentStyle}>
                                <img src={require('../../images/banner_1.png')} alt=""/>
                            </h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>2</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>3</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>4</h3>
                        </div>
                    </Carousel>
                    <div className="posBox">
                        <div className="row" onClick={handlePhone}>
                            <div className="icon">
                                <IconStyle/>
                                <i className="iconfont">&#xe627;</i>
                            </div>
                            <div className="phone">
                                010-87897479
                            </div>
                        </div>
                        <div className="qrCode">
                            <IconStyle/>
                            <i className="iconfont">&#xe600;</i>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="caseWrap">
                        <div className={'dividerWrap'}>
                            <div className="divider">
                                <div className={'l'}>
                                    <span className={'line'}></span>
                                    <span className={'dian'}></span>
                                </div>
                                <div className={'title'}>
                                    行业背景与痛点
                                </div>
                                <div className={'r'}>
                                    <span className={'dian'}></span>
                                    <span className={'line'}></span>
                                </div>
                            </div>
                        </div>
                        <div className="desrction">
                            协同管理平台在医院的应用中扮演着越来越重要的角色，承担着组织建设、知识管理、
                            沟通协作、数据分析、管理决策等重担。凤凰办公针对医院协同办公的发展趋势，在产品设计上遵循平台化、
                            易用性和整合性的理念，为用户提供的不仅是一个协同办公软件，更是一个易用的协同管理平台。
                            协同管理平台在医院的应用中扮演着越来越重要的角色，承担着组织建设、知识管理、沟通协作、数据分析、管理决策等重担。
                        </div>
                        <div className="rowWrap">
                            <div className="row">
                                <div className={'lText'}>痛点 01</div>
                                <div className={'rText'}>
                                    由于经销商、经销商数量众多，对于一系列销售政策指导及销售产品的知识培训，实施成本大。
                                </div>
                            </div>
                            <div className="row">
                                <div className={'lText'}>痛点 02</div>
                                <div className={'rText'}>
                                    由于经销商、经销商数量众多，对于一系列销售政策指导及销售产品的知识培训，实施成本大。
                                </div>
                            </div>
                            <div className="row">
                                <div className={'lText'}>痛点 03</div>
                                <div className={'rText'}>
                                    由于经销商、经销商数量众多，对于一系列销售政策指导及销售产品的知识培训，实施成本大。
                                </div>
                            </div>
                            <div className="row">
                                <div className={'lText'}>痛点 04</div>
                                <div className={'rText'}>
                                    由于经销商、经销商数量众多，对于一系列销售政策指导及销售产品的知识培训，实施成本大。
                                </div>
                            </div>
                            <div className="row">
                                <div className={'lText'}>痛点 05</div>
                                <div className={'rText'}>
                                    由于经销商、经销商数量众多，对于一系列销售政策指导及销售产品的知识培训，实施成本大。
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="svgWrap" style={sectionStyle}>
                        <div className={'dividerWrap'}>
                            <div className="divider">
                                <div className={'l'}>
                                    <span className={'line'}></span>
                                    <span className={'dian'}></span>
                                </div>
                                <div className={'title'}>
                                    方案特点
                                </div>
                                <div className={'r'}>
                                    <span className={'dian'}></span>
                                    <span className={'line'}></span>
                                </div>
                            </div>
                        </div>
                        <div className="cont_wrap">
                            {todoList}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Solution;