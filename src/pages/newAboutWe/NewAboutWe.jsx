import React,{useState,useEffect,useRef} from "react";
import styles from './index.module.scss';
import imgOne from '../../images/913.png';
import NewFooter from "../../components/NewFooter";
import {Anchor} from "antd";
import {useScroll} from "ahooks";
const back = {
    width:'100%',
    height: '434px',
    backgroundImage: `url(${imgOne})`,
    backgroundRepeat:'no-repeat'
};
const defaultIndexInfo = [
    {index:0, top: 800,  id: 'xq'},
    {index:1, top: 1400 ,id: 'fa'},
    {index:2, top: 2100 ,id: 'yy'},
    {index:3, top: 2820, id: 'gn'},
    {index:4, top: 3500 ,id: 'kh'},
]
const NewAboutWe = () => {
    const [index,setIndex] = useState(0)
    const [targetOffset, setTargetOffset] = useState(undefined);
    const scroll = useScroll();

    const [indexInfo, setIndexInfo] = useState(defaultIndexInfo);
    useEffect(() => {
        setTargetOffset(window.innerHeight / 2);
        const handleScroll = (e) => {
            console.log(e,'addEventListener');
        }
        window.addEventListener('scroll', handleScroll);
    }, []);
    useEffect(()=>{
        console.log("scroll", scroll);
        const { left, top } = scroll;
        if(top<800) {
            setIndex(0);
        }else if(top<1400) {
            setIndex(1)
        }else if(top<2100) {
            setIndex(2)
        } else if(top<2820){
            setIndex(3)
        }else if(top<3500){
            setIndex(4)
        }
        // classList = []
    },[scroll])
    const getTab = (index) => {
        console.log(index);
        setIndex(index);
        // indexInfo.map((item)=>{
        //     let top = document.getElementById(item.id).offsetTop;
        //     console.log(top);
        //     if(item.index===index) {
        //         window.scrollTo({top: top})
        //     }
        // })
    };
    const handleClick = (e, link) => {
        e.preventDefault();
        console.log(link);
    };
    return (
        <>
            <div className={styles.About_wrap}>
                <div className={styles.banners} style={back}>
                    <h3>让智慧医疗管理更便捷，让信任更简单</h3>
                    <p className={styles.text}>20+年医疗行业经验   1500+医院用户  面向医院管理，链接移动办公，成就智慧医院</p>
                </div>
                <div className={styles.center}>
                    <Anchor targetOffset={targetOffset} onClick={handleClick} style={{zIndex:9999}}>
                        <div className={styles.nav_wrap}>
                            <div className={styles.nav}>
                                <p className={index==0?styles.active:styles.tab} onClick={()=>getTab(0)}>公司简介</p>
                                <p className={index==1?styles.active:styles.tab} onClick={()=>getTab(1)}>技术资质</p>
                                <p className={index==2?styles.active:styles.tab} onClick={()=>getTab(2)}>人才招聘</p>
                                <p className={index==3?styles.active:styles.tab} onClick={()=>getTab(3)}>联系我们</p>
                            </div>
                        </div>
                    </Anchor>
                    <div className={styles.content}>

                    </div>
                </div>
            </div>
            <NewFooter/>
        </>
    )
};
export default NewAboutWe;