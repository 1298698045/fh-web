import React,{useEffect,useState,useRef,useImperativeHandle} from "react";
import FormModal from "./FormModal";
import '../css/home.scss';
const MyServe = () =>{
    const childRef = useRef();
    const updateChildState = () => {
        // changeVal就是子组件暴露给父组件的方法
        console.log(childRef,'---')
        childRef.current.getApply(true);
    }
    return (
        <>
            <div className="myService">
                <div className="leftCont">
                    <h3 className="title">我们的服务</h3>
                    <p className="service_desc">凤凰世纪 | 医院行业合作伙伴</p>
                    <div className="service_content">
                        <p className={'paragraph'}>为医院行业用户提供办公软件产品的部署、培训、实施服务；借助我们团队在医院行业多年经验和自主研发的产品，帮助医院行业用户全面提升管理效率。</p>
                        <p>1. 软件产品免费的标准部署、培训、实施服务。</p>
                        <p>2. 软件产品的VIP实施服务。</p>
                        <p>3. 医院用户科室信息化的建设需求。</p>
                        <p>4. 医院用户在内控管理方面及其它个性定制方面的需求。</p>
                    </div>
                    <div className="apply" onClick={updateChildState}>
                        申请试用
                    </div>
                </div>
                <div className="rightCont">
                    <img src={require('../images/1_dimg.jpg')} alt=""/>
                </div>
            </div>
            <FormModal ref={childRef} cRef={childRef} />
        </>
    )
}
export default MyServe;