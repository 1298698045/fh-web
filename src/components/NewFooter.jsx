import React,{useEffect,useState,useRef} from "react";
import {IconStyle} from "../static/iconfont/iconfont";
import '../css/newFooter.scss';
import { Modal, Button ,Form, Input,Row, Col,message } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';
import http from "../utils/request";
const styleBtn = {
    background: '#f6f6f9',
    fontSize: '14px',
    color: '#626775'
}
const formStyle = {
    marginTop:'10px'
}
const SubmitBtn = {
    background: '#b31e23',
    border: 'none',
    width:'400px',
    height:'40px',
    borderRadius:'3px'
}
const NewFooter = () => {
    const [numbers,setNumbers] = useState(0);
    const [isModalVisible,setIsModalVisible] = useState(false);
    const [index,setIndex] = useState(0);
    const history = useHistory();
    const location = useLocation();
    const [form] = Form.useForm();
    const getRouter = (str) =>{
        history.push(str);
    }
    const getSwitch = (index) =>{
        setNumbers(index);
    }
    const getApply = () => {
          setIsModalVisible(true)
    };
    const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
    };
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    const onFinish = (values) => {
        console.log('Success:',values);
        let url = '/api/Contentbase/PostContactBase';
        http("post",url,{
            ...values
        }).then(res => {
            message.success(res.msg,2);
            form.resetFields();
            setIsModalVisible(false);
        },error => {
            console.log("网络异常~",error);
        })

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const showModal = (
        <Modal width={440} closable={false} footer={null} visible={isModalVisible} onCancel={(e)=>{setIsModalVisible(false)}}>
            <div className="tabs">
                <p className={index==0?'active':''} onClick={()=>{setIndex(0)}}>试用申请咨询</p>
                <p className={index==1?'active':''} onClick={()=>{setIndex(1)}}>在线咨询</p>
            </div>
            {index==0&&
            <div className="modalContent">
                <div className="desc">完善以下信息您可以免费体验我们的产品功能，我们的顾问会在 1个工作日内与您取得联系</div>
                <Form {...formItemLayout} form={form} style={formStyle} onFinish={onFinish}
                      onFinishFailed={onFinishFailed} >
                    <Form.Item
                        label="单位名称"
                        labelAlign={'left'}
                        name="Department"
                        rules={[{ required: true, message: '请输入单位名称!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="姓名"
                        labelAlign={'left'}
                        name="FullName"
                        rules={[{ required: true, message: '请输入姓名!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="手机号"
                        labelAlign={'left'}
                        name="MobilePhone"
                        rules={[{ required: true, message: '请输入手机号!' }]}
                    >
                        <Input />
                    </Form.Item>
                    {/*<Form.Item label="短信验证"*/}
                    {/*           name="captcha"*/}
                    {/*           rules={[{ required: true, message: 'Please input your username!' }]}*/}
                    {/*>*/}
                    {/*    <Row gutter={8}>*/}
                    {/*        <Col span={12}>*/}
                    {/*            <Input />*/}
                    {/*            /!*<Form.Item*!/*/}
                    {/*            /!*    name="captcha"*!/*/}
                    {/*            /!*    noStyle*!/*/}
                    {/*            /!*    rules={[{ required: true, message: 'Please input the captcha you got!' }]}*!/*/}
                    {/*            /!*>*!/*/}
                    {/*            /!*    <Input />*!/*/}
                    {/*            /!*</Form.Item>*!/*/}
                    {/*        </Col>*/}
                    {/*        <Col span={12}>*/}
                    {/*            <Button style={styleBtn}>获取验证码</Button>*/}
                    {/*        </Col>*/}
                    {/*    </Row>*/}
                    {/*</Form.Item>*/}
                    <Form.Item
                        label="邮箱"
                        labelAlign={'left'}
                        name="EMailAddress1"
                        rules={[{ required: true, message: '请输入邮箱!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item style={{
                        display:'flex'
                    }}>
                        <Button type="primary" style={SubmitBtn}  htmlType="submit" block>
                            提交申请
                        </Button>
                    </Form.Item>
                </Form>
                {/*<Button type="primary" style={SubmitBtn}  block onClick={()=>{setIsModalVisible(false)}}>*/}
                {/*    提交申请*/}
                {/*</Button>*/}
            </div>
            }
            {index==1&&
                <div className={'qrCode'}>
                    <div className="code">

                    </div>
                    <div className="text">用微信扫描二维码，即可获取您的专属顾问</div>
                </div>
            }
        </Modal>
    )
    return (
        <>
            <div className={'contSix'}>
                {/*<div className="apply">*/}
                {/*    专业咨询顾问，为您提供1对1专属服务*/}
                {/*    <p className={'btn'} onClick={getApply}>试用申请</p>*/}
                {/*</div>*/}
                <div className="footerBar">
                    <div className="box-wrap">
                        <div className="lBox">
                            <div className="column">
                                <p className="title">快速入口</p>
                                <p className="text" onClick={()=>{getRouter('/Home')}}>首页</p>
                                <p className="text" onClick={getApply}>试用申请</p>
                                <p className="text" onClick={()=>{getRouter('/Xinwen')}}>新闻中心</p>
                                <p className="text" onClick={()=>{getRouter('/CustomerCase')}}>客户案例</p>
                            </div>
                            <div className="column">
                                <p className="title">产品中心</p>
                                <p className="text" onClick={()=>{getRouter('/WorkOA')}}>协同办公系统（OA）</p>
                                <p className="text" onClick={()=>{getRouter('/HrSystem')}}>人力资源管理系统</p>
                                <p className="text" onClick={()=>{getRouter('/ElectronSystem')}}>电子票据管理平台</p>
                                <p className="text" onClick={()=>{getRouter('/Intelligence')}}>智能报销管理系统</p>
                                <p className="text" onClick={()=>{getRouter('/ContractAdmin')}}>合同管理系统</p>
                                <p className="text" onClick={()=>{getRouter('/WorkOA')}}>固定资产管理系统</p>
                            </div>
                            <div className="column">
                                <p className="title">移动（OA）</p>
                                <p className="text" onClick={()=>{getRouter('/ContractAdmin')}}>需求分析</p>
                                <p className="text" onClick={()=>{getRouter('/ContractAdmin')}}>产品价值</p>
                                <p className="text" onClick={()=>{getRouter('/ContractAdmin')}}>应用优势</p>
                                <p className="text" onClick={()=>{getRouter('/ContractAdmin')}}>产品功能</p>
                                <p className="text" onClick={()=>{getRouter('/ContractAdmin')}}>下载关注</p>
                            </div>
                            <div className="column">
                                <p className="title">关于我们</p>
                                <p className="text" onClick={()=>{getRouter('/NewAboutWe')}}>公司介绍</p>
                                <p className="text" onClick={()=>{getRouter('/Technology')}}>技术资质</p>
                                <p className="text" onClick={()=>{getRouter('/Talent')}}>人才招聘</p>
                                <p className="text" onClick={()=>{getRouter('/Contact')}}>联系我们</p>
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
                                        <img src={require('../images/icon_ios.png')} alt=""/>
                                    </p>
                                    <p className="imgs" onClick={()=>{getSwitch(1)}}>
                                        <img src={require('../images/icon_android.png')} alt=""/>
                                    </p>
                                    <p className="imgs" onClick={()=>{getSwitch(2)}}>
                                        <img src={require('../images/icon_weimob.png')} alt=""/>
                                    </p>
                                </div>
                                <div className="qrCode">
                                    <div className={numbers==0?'qr-img':numbers==1?'qr-img-one':'qr-img-two'}></div>
                                    <div className="imgs">
                                        {
                                            numbers==0&&
                                            <img src={require('../images/apple_link.png')} alt=""/>
                                        }
                                        {
                                            numbers==1&&
                                            <img src={require('../images/android.png')} alt=""/>
                                        }
                                        {
                                            numbers==2&&
                                            <img src={require('../images/wechat.jpg')} alt=""/>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="textUrl">
                    <a href="https://beian.miit.gov.cn">
                        <img src={require('../images/country.jpg')} alt=""/>
                        <span style={{marginLeft:'10px'}}>
                            Copyright © 2020 北京凤凰世纪科技有限公司版权所有  |  京ICP备16024828号
                        </span>
                    </a>
                    {/* <p>Copyright © 2020 北京凤凰世纪科技有限公司版权所有  |  京ICP备16024828号</p> */}
                    <p>京公网安备11030102010604</p>
                </div>
            </div>
            {showModal}
        </>
    )
}
export default NewFooter;