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
    {index:1, top: 1400 ,id: 'js'},
    {index:2, top: 2100 ,id: 'rc'},
    {index:3, top: 2820, id: 'lx'},
]
const Talent = () => {
    const scroll = useScroll();

    const [indexInfo, setIndexInfo] = useState(defaultIndexInfo);
    const [tabIdx,setTabIdx] = useState(0);
    useEffect(() => {
        const handleScroll = (e) => {
            console.log(e,'addEventListener');
        }
        window.addEventListener('scroll', handleScroll);
    }, []);
    useEffect(()=>{
    },[scroll])
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
                    <div className={styles.content}>
                        <div className={styles.recruit}>
                            <div className={styles.title_wrap}>
                                <h3 className={styles.title}>人才招聘</h3>
                                <p className={styles.text}>简历投递邮箱/hr@phxinfo.com.cn</p>
                            </div>
                            <div className={styles.content_wrap}>
                                <div className={styles.tabs}>
                                    <p className={tabIdx==0?styles.active:styles.tab} onClick={()=>{setTabIdx(0)}}>.NET高级开发工程师</p>
                                    <p className={tabIdx==1?styles.active:styles.tab} onClick={()=>{setTabIdx(1)}}>JAVA高级开发工程师</p>
                                    <p className={tabIdx==2?styles.active:styles.tab} onClick={()=>{setTabIdx(2)}}>项目实施工程师</p>
                                    <p className={tabIdx==3?styles.active:styles.tab} onClick={()=>{setTabIdx(3)}}>区域销售经理</p>
                                </div>
                                <div className={styles.boxCont}>
                                    <div className={styles.lCont}>
                                        <div className={styles.title}>
                                            <span></span>
                                            工作职责
                                        </div>
                                        <div className={styles.desc}>
                                            <br/>
                                            <p>1、向客户宣传介绍公司的产品和服务，推广公司的产品；</p>
                                            <br/>
                                            <p>2、在上级领导的指导和监督下，完成销售任务和指标；</p>
                                            <br/>
                                            <p>3、根据客户需求和市场变化，对公司的产品和服务提出改进建议；</p>
                                            <br/>
                                            <p>4、建立并管理客户档案、销售档案，做好售后服务，保持新老客户的良好关系；</p>
                                            <br/>
                                            <p>5、完成销售目标；</p>
                                            <br/>
                                            <p>6、完成上级交办的其他工作；</p>
                                        </div>
                                    </div>
                                    <div className={styles.rCont}>
                                        <div className={styles.title}>
                                            <span></span>
                                            岗位要求
                                        </div>
                                        <div className={styles.desc}>
                                            <br/>
                                            <p>1、大专及以上学历，营销、计算机相关或医疗相关专业；</p>
                                            <p>2、年龄35岁以下，两年以上医疗行业销售经验，有相关的社会关系及资源者可优先考虑；</p>
                                            <p>3、具备一定的软件项目招投标经验，熟悉基本的招投标流程；</p>
                                            <p>4、具有市场开拓能力，有强烈的竞争意识，能积极面对工作挑战和压力；</p>
                                            <p>5、形象气质佳，头脑灵活，思维敏捷，兴趣广泛，喜好交际，热爱销售工作，男女不限；</p>
                                            <p>6、具有较强的语言表达能力、沟通能力；</p>
                                            <p>7、注重效率，能适应高强度、快节奏的工作环境，有激情，有强烈的团队协作意识；</p>
                                            <p>8、具备较强的市场开拓、客户沟通能力，较强的沟通技巧和团队管理能力；</p>
                                            <p>9、能够承受工作压力和销售业绩要求，心态积极，乐观向上，诚实守信，勤奋敬业，适应经常出差；</p>
                                            <p>10、有HIS、PACS、LIS、HRP、合理用药、临床路径等医疗软件企业从业经历和医疗软件销售经验优先考虑；</p>
                                            <p>11、有医院客户资源优先考虑。</p>
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
export default Talent;