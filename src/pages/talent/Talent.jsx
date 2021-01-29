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
    {index:1, top: 1320 ,id: 'js'},
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
                                    <p className={tabIdx==0?styles.active:styles.tab} onClick={()=>{setTabIdx(0)}}>高级.NET开发工程师</p>
                                    <p className={tabIdx==1?styles.active:styles.tab} onClick={()=>{setTabIdx(1)}}>高级JAVA开发工程</p>
                                    <p className={tabIdx==2?styles.active:styles.tab} onClick={()=>{setTabIdx(2)}}>项目实施工程师</p>
                                    {/* <p className={tabIdx==3?styles.active:styles.tab} onClick={()=>{setTabIdx(3)}}>区域销售经理</p> */}
                                </div>
                                {tabIdx==0 && 
                                    <div className={styles.boxCont}>
                                        <div className={styles.lCont}>
                                            <div className={styles.title}>
                                                <span></span>
                                                工作职责
                                            </div>
                                            <div className={styles.desc}>
                                                <br/>
                                                <p>
                                                    1、根据开发进度和任务分配，完成相应模块开发、编程任务；
                                                    <br/>
                                                    2、具备高质量的专业技术文档编写能力；
                                                    <br/>
                                                    3、对业务需求描述文档有较强的理解能力。
                                                    <br/>
                                                </p>
                                            </div>
                                        </div>
                                        <div className={styles.rCont}>
                                            <div className={styles.title}>
                                                <span></span>
                                                岗位要求
                                            </div>
                                            <div className={styles.desc}>
                                                <br/>
                                                <p>
                                                    1、 计算机软件相关专业大专以上学历；
                                                    <br/>
                                                    2、 精通C#程序设计开发，至少具有2年的C#程序设计开发经验，能熟练运用ADO.NET/Web Services/WCF等技术。
                                                    <br/>
                                                    3、 精通面向对象设计开发思想，熟悉多层和分布式架构；
                                                    <br/>
                                                    4、 精通MVC开发模式，有2年及以上的项目开发经验。
                                                    <br/>
                                                    5、 精通SQL server，MySQL数据库，熟悉数据库设计及优化技术，并具备相关安全知识；
                                                    <br/>
                                                    6、 熟悉前端相关的技术html,css3,javascript,能熟练使用用相关的UI框架，如jQuery、jQuery UI或Bootstrap等。
                                                    <br/>
                                                    7、 技术能力强，自我学习能力强,对技术发展具有良好的理解能力，能够迅速掌握新技术，能够在短时间内攻克技术难关；
                                                    <br/>
                                                    8、 有良好的技术文档习惯，具有规范化标准化的代码编写习惯；
                                                    <br/>
                                                    9、 善于与他人沟通、合作，具有团队精神，良好的自学能力、严密的思维能力，反应敏捷，应变力强，责任心强，能承受较大的工作压力；
                                                    <br/>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {tabIdx==2 && 
                                    <div className={styles.boxCont}>
                                        <div className={styles.lCont}>
                                            <div className={styles.title}>
                                                <span></span>
                                                工作职责
                                            </div>
                                            <div className={styles.desc}>
                                                <br/>
                                                <p>
                                                    1. 负责项目现场的产品实施工作（安装，部署，测试，培训、验收等工作）；
                                                    <br/>
                                                    2. 负责收集、整理、录入产品所需的初始化数据；
                                                    <br/>
                                                    3. 了解医院业务流程，归纳客户在使用产品过程中的问题并及时反馈；
                                                    <br/>
                                                    4. 完善并总结实施过程中的文档，根据实施具体情况提出合理建议，提高实施效率；
                                                    <br/>
                                                </p>
                                            </div>
                                        </div>
                                        <div className={styles.rCont}>
                                            <div className={styles.title}>
                                                <span></span>
                                                岗位要求
                                            </div>
                                            <div className={styles.desc}>
                                                <br/>
                                                <p>
                                                    1. 计算机相关专业，本科及以上学历，2年及以上实施相关工作经验；
                                                    <br/>
                                                    2. 熟悉SQL Server/ MySQL数据库，精通SQL语句；
                                                    <br/>
                                                    3. 具备医疗行业相关实施经验为佳，熟悉管理软件系统优先；
                                                    <br/>
                                                    4. 具有良好的职业素养，责任心强，具有较强理解、表达、沟通协调能力，具有良好的服务意识及团队精神。
                                                    <br/>
                                                    5. 工作积极主动，吃苦耐劳，适应能力、抗压能力强，能适应一定频率出差。
                                                    <br/>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {tabIdx==1 && 
                                    <div className={styles.boxCont}>
                                        <div className={styles.lCont}>
                                            <div className={styles.title}>
                                                <span></span>
                                                工作职责
                                            </div>
                                            <div className={styles.desc}>
                                                <br/>
                                                <p>
                                                    1.深入理解业务，参与需求评审，业务架构设计，开发对应的业务需求；
                                                    <br/>
                                                    2.负责到人力资源系统业务开发，负责日常业务需求的迭代开发；
                                                    <br/>
                                                    3.负责日常项目的需求评审，详细设计评审，code review工作。
                                                    <br/>
                                                </p>
                                            </div>
                                        </div>
                                        <div className={styles.rCont}>
                                            <div className={styles.title}>
                                                <span></span>
                                                岗位要求
                                            </div>
                                            <div className={styles.desc}>
                                                <br/>
                                                <p>
                                                    1.大学本科以上学历，计算机或相关专业，3年以上Java实际项目开发经验；
                                                    <br/>
                                                    2.熟悉设计模式、DDD，熟悉主流开源应用框架，如Spring、iBatis、XML、JSON、Maven等开发技术；
                                                    <br/>
                                                    3.熟悉关系型数据库SQL SERVER 、MySQL、SQL优化，熟悉Memcached、MongoDB、Redis、HBase等；
                                                    <br/>
                                                    4.熟悉分布式系统的设计和应用，熟悉分布式、缓存、消息、负载均衡等机制和实现；
                                                    <br/>
                                                    5.有扎实的Java基础，Java多线程、并发以及网络通信有深厚的经验优先；
                                                    <br/>
                                                    6.热爱技术，对技术有不懈的追求，喜欢研究开源代码；
                                                    <br/>
                                                    7.良好的学习能力、团队协作能力和沟通能力；能主动承担压力，态度端正积极，善于思考，能独立分析和解决问题。

                                                    <br/>
                                                    1.有机会参与到公司医疗系统产品框架底层框架设计开发；
                                                    <br/>
                                                    2.业务的量级比较大，对技术的挑战比较高。
                                                    <br/>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                }
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