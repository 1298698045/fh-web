import React,{useEffect,useState,useRef,useImperativeHandle} from "react";
import { Anchor } from 'antd';
import styles from './index.module.scss';
import { useScroll } from 'ahooks';
import {IconStyle} from "../../static/iconfont/iconfont";
import classnames from 'classnames';
import NewFooter from '../../components/NewFooter'
import FormModal from "../../components/FormModal";
console.log(styles,'style')
const { Link } = Anchor;
const newBack = {
    width: "100%",
    // height:"100%",
    backgroundImage: `url(${require('../../images/1_banner_5_1.jpg')})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
const Intelligence = () => {
    const childRef = useRef();
    const updateChildState = () => {
        // changeVal就是子组件暴露给父组件的方法
        console.log(childRef,'---')
        childRef.current.getApply(true);
    }
    return (
        <>
            <div className={styles.Work_wrap}>
                <div className={styles.new_banner} style={newBack}>
                    <div className={styles.bannerText}>
                        <div className={styles.bannerText_child}>
                            <p className={styles.title}>智能报销管理系统</p>
                            <p className={styles.desc}>建立涵盖“预算管理、事前申请、借还款管理、员工报销、付款管理、台账管理、



                            </p>
                            <p className={styles.desc} style={{marginTop:'20px'}}>凭证中心”等一体化的费用管控平台，为企业/机构提供线上化、智能化的费控服务</p>
                            <p className={styles.btn} onClick={updateChildState}>
                                申请试用
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.center}>
                    <div className={styles.content}>
                        网页更新中......
                    </div>
                </div>
            </div>
            <FormModal ref={childRef} cRef={childRef} />
            <NewFooter/>
        </>
    )
};

export default Intelligence;