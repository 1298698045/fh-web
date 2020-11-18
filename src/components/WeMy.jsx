import React,{useState,useEffect,useRef} from 'react';
import {Input,Form,Select,Button,Cascader } from 'antd';
const { TextArea } = Input;
const { Option } = Select;
// const { data, province, city, area, town } = require('province-city-china/data');
const WeMy = () => {
    function onChange(value) {
        console.log(`selected ${value}`);
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }
    function onChange(value) {
        console.log(value);
    }
    const options = [
        {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
                {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                    children: [
                        {
                            value: 'xihu',
                            label: 'West Lake',
                        },
                    ],
                },
            ],
        },
        {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
                {
                    value: 'nanjing',
                    label: 'Nanjing',
                    children: [
                        {
                            value: 'zhonghuamen',
                            label: 'Zhong Hua Men',
                        },
                    ],
                },
            ],
        },
    ];
    const handleFinish = (v) =>{
        console.log(v)
    };
    return (
        <>
            <div className="weWrap">
                <div className="box">
                    <div className="imgs">
                        <img src={require('../images/378 (2).png')} alt=""/>
                    </div>
                    <p className="name">公司地址</p>
                    <div className="text">北京市海淀区花园路5号2F  </div>
                </div>
                <div className="box">
                    <div className="imgs">
                        <img src={require('../images/378 (3).png')} alt=""/>
                    </div>
                    <p className="name">咨询电话</p>
                    <div className="text">010-87897479</div>
                </div>
                <div className="box">
                    <div className="imgs">
                        <img src={require('../images/378 (4).png')} alt=""/>
                    </div>
                    <p className="name">企业邮箱</p>
                    <div className="text">lzy@phxinfo.com.cn</div>
                </div>
                <div className="box">
                    <div className="imgs">
                        <img src={require('../images/378 (2).png')} alt=""/>
                    </div>
                    <p className="name">工作时间</p>
                    <div className="text">周一至周五（9:00-19:00）</div>
                </div>
            </div>
            <div className="location-wrap">
                <div className="l-img">
                    <div className="imgs">
                        <img src={require('../images/379.png')} alt=""/>
                    </div>
                </div>
                <div className="r">
                    <Form onFinish={handleFinish}>
                        <Form.Item name={'name'}>
                            <Input placeholder="姓名" />
                        </Form.Item>
                        <Form.Item name={'phone'}>
                            <Input placeholder="电话" />
                        </Form.Item>
                        <Form.Item name={'email'}>
                            <Input placeholder="邮件" />
                        </Form.Item>
                        <Form.Item name={''}>
                            <Select
                                showSearch
                                style={{ width: '100%' }}
                                placeholder="Select a person"
                                optionFilterProp="children"
                                onChange={onChange}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="jack">医院名称</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Cascader options={options} onChange={onChange} placeholder="Please select" />
                        </Form.Item>
                        <Form.Item name={''}>
                            <Select
                                showSearch
                                style={{ width: '100%' }}
                                placeholder="Select a person"
                                optionFilterProp="children"
                                onChange={onChange}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="jack">医院规模</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name={'content'}>
                            <TextArea rows={4} />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{background:'#b31e23',border:'none'}} block>
                                提交
                            </Button>
                        </Form.Item>

                    </Form>
                    {/*<Input placeholder="姓名" />*/}
                    {/*<Input placeholder="电话" />*/}
                    {/*<Input placeholder="邮件" />*/}
                </div>
            </div>
        </>
    )
}
export default WeMy;