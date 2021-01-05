import React,{useState,useEffect,useRef} from "react";
import NewFooter from "../../components/NewFooter";
import styles from './index.module.scss';
import imgOne from "../../images/1538.png";
const back = {
    width:'100%',
    height: '434px',
    backgroundImage: `url(${imgOne})`,
    backgroundRepeat:'no-repeat',
    backgroundSize: 'cover'
};
const Product = () => {
    return (
        <>
            <div className={styles.product_wrap}>
                <div className={styles.banners} style={back}>
                    <h3 className={styles.title}>智慧医院管理软件系统</h3>
                    <p className={styles.text}>面向未来医院，提供专业的内部控制管理软件 </p>
                </div>
                <div className={styles.content}>
                    <div className={styles.product}>
                        <h3 className={styles.title}>应用产品及平台</h3>
                        <div className={styles.box_wrap}>
                            {
                                ['协同办公系统（OA）','人力资源管理系统','电子票据管理平台','智能报销管理系统','合同管理系统','固定资产管理系统'].map((item,index)=>{
                                    return (
                                        <div className={styles.box} key={index}>
                                            <div className={styles.imgs}>
                                                <img src={require('../../images/1547.png')} alt=""/>
                                            </div>
                                            <div className={styles.name}>{item}</div>
                                            <div className={styles.cont_text}>为强化医院院办事务日常管理，帮助医院实现现代医院管理制度，优化工作流程，规范工作行为，提高运行效率的管理系统。有效的控制和预防风险。</div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
            <NewFooter/>
        </>
    )
}
export default Product;