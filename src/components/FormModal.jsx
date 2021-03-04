import React,{useEffect,useState,useRef,useImperativeHandle} from "react";
import {IconStyle} from "../static/iconfont/iconfont";
import { Modal, Button ,Form, Input,Row, Col,message } from 'antd';
import http from "../utils/request";
import {useHistory, useLocation} from "react-router-dom";
import '../css/newFooter.scss';
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
const FormModal = ({cRef}) =>{
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
    useImperativeHandle(cRef, () => ({
        // changeVal 就是暴露给父组件的方法
        getApply: (newVal) => {
            setIsModalVisible(newVal);
        }
    }));
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
        <Modal width={440} zIndex={99999} closable={true} footer={null} visible={isModalVisible} onCancel={(e)=>{setIsModalVisible(false)}}>
            <div className="tabs">
                <p className={index==0?'active':''} onClick={()=>{setIndex(0)}}>试用申请咨询</p>
                {/*<p className={index==1?'active':''} onClick={()=>{setIndex(1)}}>在线咨询</p>*/}
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
                    {/*<Form.Item*/}
                    {/*    label="邮箱"*/}
                    {/*    labelAlign={'left'}*/}
                    {/*    name="EMailAddress1"*/}
                    {/*    rules={[{ required: true, message: '请输入邮箱!' }]}*/}
                    {/*>*/}
                    {/*    <Input />*/}
                    {/*</Form.Item>*/}
                    <Form.Item style={{
                        display:'flex',
                        marginTop:'50px'
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
            {showModal}
        </>
    )
}
export default FormModal;