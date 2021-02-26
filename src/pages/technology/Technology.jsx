import React,{useState,useEffect,useRef} from "react";
import styles from './index.module.scss';
import imgOne from '../../images/913.png';
import NewFooter from "../../components/NewFooter";
import {Anchor} from "antd";
import {useScroll} from "ahooks";
import {IconStyle} from "../../static/iconfont/iconfont";
const back = {
    width:'100%',
    height: '434px',
    backgroundImage: `url(${imgOne})`,
    backgroundRepeat:'no-repeat'
};
const defaultIndexInfo = [
    {index:0, top: 800,  id: 'gs'},
    {index:1, top: 1200 ,id: 'js'},
    {index:2, top: 2100 ,id: 'rc'},
    {index:3, top: 2820, id: 'lx'},
]
const Technology = () => {
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
                        <div className={styles.shadow} id={'js'}>
                            <h3 className={styles.title}>技术资质</h3>
                            <div className={styles.imgs_wrap}>
                                <div className={styles.img_box}>
                                    <img className={styles.img} src={require('../../images/ERC_1.png')} alt=""/>
                                </div>
                                <div className={styles.img_box}>
                                    <img className={styles.img} src={require('../../images/ERC_2.png')} alt=""/>
                                </div>
                                <div className={styles.img_box}>
                                    <img className={styles.img} src={require('../../images/ERC_3.png')} alt=""/>
                                </div>
                                <div className={styles.img_box}>
                                    <img className={styles.img} src={require('../../images/ERC_4.png')} alt=""/>
                                </div>
                                <div className={styles.img_box}>
                                    <img className={styles.img} src={require('../../images/ERC_5.png')} alt=""/>
                                </div>
                                <div className={styles.img_box}>
                                    <img className={styles.img} src={require('../../images/ERC_6.png')} alt=""/>
                                </div>
                                <div className={styles.img_box_h}>
                                    <img className={styles.img} src={require('../../images/ERC_7.png')} alt=""/>
                                </div>
                                <div className={styles.img_box_h}>
                                    <img className={styles.img} src={require('../../images/ERC_8.png')} alt=""/>
                                </div>
                                <div className={styles.img_box_h}>
                                    <img className={styles.img} src={require('../../images/ERC_9.png')} alt=""/>
                                </div>
                                <div className={styles.img_box_h}>
                                    <img className={styles.img} src={require('../../images/ERC_10.png')} alt=""/>
                                </div>
                                <div className={styles.img_box_h}>
                                    <img className={styles.img} src={require('../../images/ERC_11.png')} alt=""/>
                                </div>
                                <div className={styles.img_box_h}>
                                    <img className={styles.img} src={require('../../images/ERC_12.png')} alt=""/>
                                </div>
                                <div className={styles.img_box_h}>
                                    <img className={styles.img} src={require('../../images/ERC_13.png')} alt=""/>
                                </div>
                                <div className={styles.img_box_h}>
                                    <img className={styles.img} src={require('../../images/ERC_14.png')} alt=""/>
                                </div>
                                <div className={styles.img_box_h} style={{border:'none'}}>

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
export default Technology;