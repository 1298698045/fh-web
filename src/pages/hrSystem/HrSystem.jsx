import React,{useRef,useState,useEffect} from "react";
import { Anchor } from 'antd';
import styles from './index.module.scss';
import { useScroll } from 'ahooks';
import {IconStyle} from "../../static/iconfont/iconfont";
import classnames from 'classnames';
import NewFooter from '../../components/NewFooter';
import imgOne from "../../images/1538.png";
console.log(styles,'style')
const { Link } = Anchor;
const back = {
    width:'100%',
    height: '434px',
    backgroundImage: `url(${imgOne})`,
    backgroundRepeat:'no-repeat',
    backgroundSize: 'cover'
};
const defaultIndexInfo = [
    {index:0, top: 800,  id: 'zz'},
    {index:1, top: 800,  id: 'sp'},
    {index:2, top: 800,  id: 'kq'},
    {index:3, top: 800,  id: 'pb'},
    {index:4, top: 800,  id: 'bxfl'},
    {index:5, top: 800,  id: 'xz'},
    {index:6, top: 800,  id: 'kp'},
    {index:7, top: 800,  id: 'zp'},
    {index:8, top: 800,  id: 'rydp'},
    {index:9, top: 800,  id: 'kfhl'}
]
const productList = [
    {
        name:"组织",
        desc:"灵活配置管理权限，⽀持复杂组织架构。灵活设置多级部⻔，快速搭建架构体系直观查看组织架构图，⽀持⼀键导出强大的权限定义，多维度精细设置编制直观查看，成本控制⼼中有数。"
    },
    {
        name:"审批",
        desc:"审批模式⾃定义 简明⾼效随时处理设置不同审批流程，满⾜不同业务场景审批数据结果⾃动关联各模块审批结果存档备忘，随时搜索审批详情移动端审批⼊⼝，随时随地⾼效处理。"
    },
    {
        name:"考勤",
        desc:"考勤⽅案⾃定义，灵活打卡更便捷。设置不同考勤⽅案，⽀持多种打卡⽅式灵活多样的班次设置，考勤管理更清晰⼀键获取考勤报表，数据精准同步⼯资考勤异常及时提醒，员工自主管理更高效。"
    },
    {
        name:"排班",
        desc:"排班支持多种方式按组、按部门，按周、月排班，灵活统计查询，夜班费用计算等。"
    },
    {
        name:"保险福利",
        desc:"保险福利全流程操作保险缴纳调整，导入，月缴纳生成，未缴纳提醒，保险报表。"
    },
    {
        name:"薪资",
        desc:"个性化薪酬⽅案 系统算薪更准确针对不同员⼯类别，灵活配置薪酬⽅案。"
    },
    {
        name:"考评",
        desc:"360度考评、年度考评，续签试用考评等。灵活定义指标，考评表，测评维度，批量发布考评，汇总报表，统计。"
    },
    {
        name:"招聘",
        desc:"招聘全流程处理职位/简历一站式管理，招聘全过程管理。"
    },
    {
        name:"人员调配",
        desc:"追踪所有人员变动"
    },
    {
        name:"开放互联",
        desc:"协同办公更便捷 满足事业单位一体化管理需求。与OA、HIS打通、集成微信小程序，实现系统之间互联互通，系统与用户的简单使用。"
    }
]
const HrSystem = () =>{
    const listHeight= useRef();
    const [index,setIndex] = useState(0)
    const [targetOffset, setTargetOffset] = useState(undefined);
    const scroll = useScroll();

    const [indexInfo, setIndexInfo] = useState(defaultIndexInfo)
    const [defaultIdx,setDefaultIdx] = useState(0);
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
        // if(top<800) {
        //     setIndex(0);
        // }else if(top<1320) {
        //     setIndex(1)
        // }else if(top<2100) {
        //     setIndex(2)
        // } else if(top<2820){
        //     setIndex(3)
        // }else if(top<3500){
        //     setIndex(4)
        // }
        let index = indexInfo.findIndex((item,index)=>{
            return top <= document.getElementById(item.id).offsetTop;
        });
        console.log(index,'index')
        setIndex(index)
        // classList = []
    },[scroll])
    const handleClick = (e, link) => {
        e.preventDefault();
        console.log(link);
    };
    const getTab = (index) => {
        console.log(index);
        setIndex(index);
        indexInfo.map((item)=>{
            let top = document.getElementById(item.id).offsetTop-140;
            console.log(top);
            if(item.index===index) {
                window.scrollTo({top: top})
            }
        })
    };
    return (
        <>
            <div className={styles.hr_wrap}>
                <div className={styles.banners} style={back}>
                    <div className={styles.textW}>
                        <h3 className={styles.title}>凤凰世纪人力资源系统,让人事管理更简单高效</h3>
                        <p className={styles.text}>信息提升效率，数据洞见未来 </p>
                    </div>
                </div>
                <div className={styles.center}>
                    <Anchor targetOffset={targetOffset} onClick={handleClick} style={{zIndex:9999}}>
                        <div className={styles.nav_wrap} ref={listHeight}>
                            <div className={styles.nav}>
                                {/*<Link href={window.location.hash+"#components-anchor-demo-basic"}>*/}
                                {/*    <p className={index==0?styles.active:styles.tab}>需求分析</p>*/}
                                {/*</Link>*/}
                                {
                                    productList.map((item,idx)=>{
                                        return (
                                            <p className={index==idx?styles.active:styles.tab} onClick={()=>getTab(idx)}>{item.name}</p>
                                        )
                                    })
                                }
                                {/* <p className={index==0?styles.active:styles.tab} onClick={()=>getTab(0)}>员工</p>
                                <p className={index==1?styles.active:styles.tab} onClick={()=>getTab(1)}>产品功能</p>
                                <p className={index==2?styles.active:styles.tab} onClick={()=>getTab(2)}>客户案例</p> */}
                            </div>
                        </div>
                    </Anchor>
                    <div className={styles.container}>
                        <div className={styles.normal} id="zz">
                            <div className={styles.content}>
                                <div className={styles.lImg}>
                                    <img src={require('../../images/1716.png')} alt=""/>
                                </div>
                                <div className={styles.rBox}>
                                    <h1>组织</h1>
                                    <p className={styles.desc}>
                                    灵活配置管理权限，⽀持复杂组织架构。灵活设置多级部⻔，快速搭建架构体系直观查看组织架构图，⽀持⼀键导出强大的权限定义，多维度精细设置编制直观查看，成本控制⼼中有数。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.reverse}  id="sp">
                            <div className={styles.content}>
                                <div className={styles.rBox}>
                                    <h1>审批</h1>
                                    <p className={styles.desc}>
                                    简明⾼效随时处理设置不同审批流程，满⾜不同业务场景审批数据结果⾃动关联各模块审批结果存档备忘，随时搜索审批详情移动端审批⼊⼝，随时随地⾼效处理。
                                    </p>
                                </div>
                                <div className={styles.lImg}>
                                    <img src={require('../../images/1716.png')} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.normal} id="kq">
                            <div className={styles.content}>
                                <div className={styles.lImg}>
                                    <img src={require('../../images/1716.png')} alt=""/>
                                </div>
                                <div className={styles.rBox}>
                                    <h1>考勤</h1>
                                    <p className={styles.desc}>
                                    考勤⽅案⾃定义，灵活打卡更便捷。设置不同考勤⽅案，⽀持多种打卡⽅式灵活多样的班次设置，考勤管理更清晰⼀键获取考勤报表，数据精准同步⼯资考勤异常及时提醒，员工自主管理更高效。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.reverse} id="pb">
                            <div className={styles.content}>
                                <div className={styles.rBox}>
                                    <h1>排班</h1>
                                    <p className={styles.desc}>
                                    排班支持多种方式按组、按部门，按周、月排班，灵活统计查询，夜班费用计算等。
                                    </p>
                                </div>
                                <div className={styles.lImg}>
                                    <img src={require('../../images/1716.png')} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.normal} id="bxfl">
                            <div className={styles.content}>
                                <div className={styles.lImg}>
                                    <img src={require('../../images/1716.png')} alt=""/>
                                </div>
                                <div className={styles.rBox}>
                                    <h1>保险福利</h1>
                                    <p className={styles.desc}>
                                    保险福利全流程操作保险缴纳调整，导入，月缴纳生成，未缴纳提醒，保险报表。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.reverse} id="xz">
                            <div className={styles.content}>
                                <div className={styles.rBox}>
                                    <h1>薪资</h1>
                                    <p className={styles.desc}>
                                    个性化薪酬⽅案 系统算薪更准确针对不同员⼯类别，灵活配置薪酬⽅案。
                                    </p>
                                </div>
                                <div className={styles.lImg}>
                                    <img src={require('../../images/1716.png')} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.normal} id="kp">
                            <div className={styles.content}>
                                <div className={styles.lImg}>
                                    <img src={require('../../images/1716.png')} alt=""/>
                                </div>
                                <div className={styles.rBox}>
                                    <h1>考评</h1>
                                    <p className={styles.desc}>
                                    360度考评、年度考评，续签试用考评等。灵活定义指标，考评表，测评维度，批量发布考评，汇总报表，统计。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.reverse} id="zp">
                            <div className={styles.content}>
                                <div className={styles.rBox}>
                                    <h1>招聘</h1>
                                    <p className={styles.desc}>
                                    招聘全流程处理职位/简历一站式管理，招聘全过程管理。
                                    </p>
                                </div>
                                <div className={styles.lImg}>
                                    <img src={require('../../images/1716.png')} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.normal} id="rydp">
                            <div className={styles.content}>
                                <div className={styles.lImg}>
                                    <img src={require('../../images/1716.png')} alt=""/>
                                </div>
                                <div className={styles.rBox}>
                                    <h1>人员调配</h1>
                                    <p className={styles.desc}>
                                    追踪所有人员变动
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.reverse} id="kfhl">
                            <div className={styles.content}>
                                <div className={styles.rBox}>
                                    <h1>开放互联</h1>
                                    <p className={styles.desc}>
                                    满足事业单位一体化管理需求。与OA、HIS打通、集成微信小程序，实现系统之间互联互通，系统与用户的简单使用。
                                    </p>
                                </div>
                                <div className={styles.lImg}>
                                    <img src={require('../../images/1716.png')} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NewFooter/>
        </>
    )
}
export default HrSystem;