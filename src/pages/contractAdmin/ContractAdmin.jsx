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
    backgroundImage: `url(${require('../../images/1_banner_6_1.jpg')})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
const ContractAdmin = () => {
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
                            <p className={styles.title}>合同管理系统</p>
                            <p className={styles.desc}>提供从合同起草、审批、签订、执行、归档、统计等全生命周期的服务，


                            </p>
                            <p className={styles.desc} style={{marginTop:'20px'}}>帮助企业打造内外一体、可信、可靠、可用、便捷、安全、合规的新型合同管理模式。</p>
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

export default ContractAdmin;