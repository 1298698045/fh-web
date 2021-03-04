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
    backgroundImage: `url(${require('../../images/1_banner_3_1.jpg')})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
const ElectronSystem = () => {
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
                            <p className={styles.title}>电子票据管理平台</p>
                            <p className={styles.desc}>衔接财政和医疗单位，实现信息互联互通，

                            </p>
                            <p className={styles.desc} style={{marginTop:'20px'}}>支持按全国统一式样和规范开具医疗门诊、住院收费电子票据</p>
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

export default ElectronSystem;