import React,{useEffect,useState,useRef,useImperativeHandle} from "react";
import '../css/home.scss';
import {useHistory} from "react-router-dom";
const myProductList = [
    {
        img:require('../images/yycp_1.png'),
        name:'协同办公系统（OA）',
        desc:'为强化医院院办事务日常管理，帮助医院实现现代医院管理制度，优化工作流程，规范工作行为，提高运行效率的管理系统。有效的控制和预防风险。',
        path:"/WorkOA"
    },
    {
        img:require('../images/yycp_2.png'),
        name:'人力资源管理系统',
        desc:'为强化医院院办事务日常管理，帮助医院实现现代医院管理制度，优化工作流程，规范工作行为，提高运行效率的管理系统。有效的控制和预防风险。',
        path:"/HrSystem"
    },
    {
        img:require('../images/yycp_3.png'),
        name:'电子票据管理平台',
        desc:'为强化医院院办事务日常管理，帮助医院实现现代医院管理制度，优化工作流程，规范工作行为，提高运行效率的管理系统。有效的控制和预防风险。',
        path:"/ElectronSystem"
    },
    // {
    //     img:require('../images/yycp_4.png'),
    //     name:'移动办公（0A）',
    //     desc:'为强化医院院办事务日常管理，帮助医院实现现代医院管理制度，优化工作流程，规范工作行为，提高运行效率的管理系统。有效的控制和预防风险。',
    //     path:"/MoveSystem"
    // },
    {
        img:require('../images/yycp_5.png'),
        name:'智能报销管理系统',
        desc:'为强化医院院办事务日常管理，帮助医院实现现代医院管理制度，优化工作流程，规范工作行为，提高运行效率的管理系统。有效的控制和预防风险。',
        path:"/Intelligence"
    },
    {
        img:require('../images/yycp_6.png'),
        name:'合同管理系统',
        desc:'为强化医院院办事务日常管理，帮助医院实现现代医院管理制度，优化工作流程，规范工作行为，提高运行效率的管理系统。有效的控制和预防风险。',
        path:"/ContractAdmin"
    }
]
const MyProduct = () => {
    const history = useHistory();
    const getDetail = (item) =>{
        history.push(item.path);
    }
    return (
        <>
            <div className="home_content">
                <div className="product_Wrap">
                    <h3 className="row_title">
                        我们的产品
                    </h3>
                    <p className="row_desc">基础OA + 专业业务管理系统</p>
                    <div className="row_box_wrap">
                        {
                            myProductList.map((item,index)=>{
                                return (
                                    <div className="child_box" key={index}  onClick={()=>{getDetail(item)}}>
                                        <div className="radius">
                                            <img src={item.img} alt=""/>
                                        </div>
                                        <div className="right_cont">
                                            <p className="title">{item.name}</p>
                                            <p className="text">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}
export default MyProduct;