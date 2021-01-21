import React,{useState,useEffect,useRef} from "react";
import styles from './index.module.scss';
import imgOne from '../../images/913.png';
import NewFooter from "../../components/NewFooter";
import {Anchor} from "antd";
import {useScroll} from "ahooks";
import {IconStyle} from "../../static/iconfont/iconfont";
import imgTwo from '../../images/1450.png'
const back = {
    width:'100%',
    height: '434px',
    backgroundImage: `url(${imgOne})`,
    backgroundRepeat:'no-repeat'
};
const backUrl = {
    width:'100%',
    backgroundImage: `url(${imgTwo})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover'
}
const defaultIndexInfo = [
    {index:0, top: 800,  id: 'gs'},
    {index:1, top: 1320 ,id: 'js'},
    {index:2, top: 2100 ,id: 'rc'},
    {index:3, top: 2820, id: 'lx'},
]
const Contact = () => {
    const scroll = useScroll();

    useEffect(() => {
        const handleScroll = (e) => {
            console.log(e,'addEventListener');
        }
        window.addEventListener('scroll', handleScroll);
    }, []);
    useEffect(()=>{

    },[scroll])
    return (
        <>
            <div className={styles.About_wrap}>
                <div className={styles.banners} style={back}>
                    <h3>让智慧医疗管理更便捷，让信任更简单</h3>
                    <p className={styles.text}>20+年医疗行业经验   1500+医院用户  面向医院管理，链接移动办公，成就智慧医院</p>
                </div>
                <div className={styles.center}>
                    <div className={styles.content}>
                        <div className={styles.shadow}>
                            <h3 className={styles.title}>联系我们</h3>
                            <div className={styles.location_wrap}>
                                <div className={styles.location} style={backUrl}>
                                    <div className={styles.boxshow}>
                                        <div className={styles.companyName}>北京凤凰世纪科技有限公司</div>
                                        <div className={styles.row}>
                                            <IconStyle/>
                                            <i className="iconfont">&#xe627;</i>
                                            010-87897479
                                        </div>
                                        <div className={styles.row}>
                                            <IconStyle/>
                                            <i className="iconfont">&#xe62e;</i>
                                            lzy@phxinfo.com.cn
                                        </div>
                                        <div className={styles.row}>
                                            <IconStyle/>
                                            <i className="iconfont">&#xe61f;</i>
                                            北京市海淀区花园路5号5幢（天博中润）2层221室
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.contact}>
                                    <div className={styles.item}>
                                        <div className={styles.imgs}>
                                            <img src={require('../../images/1461.png')} alt=""/>
                                        </div>
                                        <div className={styles.rText}>
                                            <p className={styles.name}>咨询电话</p>
                                            <p className={styles.phone}>010-87897479</p>
                                        </div>
                                    </div>
                                    <div className={styles.item}>
                                        <div className={styles.imgs}>
                                            <img src={require('../../images/1462.png')} alt=""/>
                                        </div>
                                        <div className={styles.rText}>
                                            <p className={styles.name}>市场邮箱</p>
                                            <p className={styles.phone}>pyk@phxinfo.com.cn</p>
                                        </div>
                                    </div>
                                    <div className={styles.item}>
                                        <div className={styles.imgs}>
                                            <img src={require('../../images/1463.png')} alt=""/>
                                        </div>
                                        <div className={styles.rText}>
                                            <p className={styles.name}>客服微信</p>
                                            <p className={styles.phone}>小易（phxinfo）</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NewFooter/>
        </>
    )
};
export default Contact;