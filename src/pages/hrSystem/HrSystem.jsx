import React,{useEffect,useState,useRef,useImperativeHandle} from "react";
import { Anchor } from 'antd';
import styles from './index.module.scss';
import { useScroll } from 'ahooks';
import {IconStyle} from "../../static/iconfont/iconfont";
import classnames from 'classnames';
import NewFooter from '../../components/NewFooter';
import imgOne from "../../images/1538.png";
import FormModal from "../../components/FormModal";
console.log(styles,'style')
const { Link } = Anchor;
const back = {
    width:'100%',
    height: '434px',
    backgroundImage: `url(${imgOne})`,
    backgroundRepeat:'no-repeat',
    backgroundSize: 'cover'
};
const newBack = {
    width: "100%",
    // height:"100%",
    backgroundImage: `url(${require('../../images/1_banner_2_1.jpg')})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
const defaultIndexInfo = [
    {index:0, top: 800, id:'yg'},
    {index:1, top: 800,  id: 'zz'},
    {index:2, top: 800,  id: 'sp'},
    {index:3, top: 800,  id: 'kq'},
    {index:4, top: 800,  id: 'pb'},
    {index:5, top: 800,  id: 'bxfl'},
    {index:6, top: 800,  id: 'xz'},
    {index:7, top: 800,  id: 'kp'},
    {index:8, top: 800,  id: 'zp'},
    {index:9, top: 800,  id: 'rydp'},
    {index:10, top: 800,  id: 'kfhl'}
]
const productList = [
    {
        name:'员工'
    },
    {
        name:"组织",
        desc:"灵活配置管理权限，⽀持复杂组织架构。灵活设置多级部⻔，快速搭建架构体系直观查看组织架构图，⽀持⼀键导出强大的权限定义，多维度精细设置编制直观查看，成本控制⼼中有数。"
    },
    {
        name:"人员调配",
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
    const childRef = useRef();
    const updateChildState = () => {
        // changeVal就是子组件暴露给父组件的方法
        console.log(childRef,'---')
        childRef.current.getApply(true);
    }
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
        // }else if(top<1200) {
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
                window.scrollTo({top: top+10})
            }
        })
    };
    return (
        <>
            <div className={styles.hr_wrap}>
                <div className={styles.new_banner} style={newBack}>
                    <div className={styles.bannerText}>
                        <div className={styles.bannerText_child}>
                            <p className={styles.title}>人力资源管理系统</p>
                            <p className={styles.desc}>支持复合组织架构和员工全生命周期在线管理


                            </p>
                            <p className={styles.desc} style={{marginTop:'20px'}}>人力薪税 随需应变的全模块人力资源管理云平台</p>
                            <p className={styles.btn} onClick={updateChildState}>
                                申请试用
                            </p>
                        </div>
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
                        <div className={styles.normal} id="yg">
                            <div className={styles.content}>
                                <div className={styles.lImg}>
                                    <img src={require('../../images/2.2_img_1.jpg')} alt=""/>
                                </div>
                                <div className={styles.rBox}>
                                    <div className={styles.name_wrap}>
                                        <p className={styles.solid}></p>
                                        <h1>员工</h1>
                                    </div>
                                    <p className={styles.desc}>
                                        从入职到离退，记录员工成长轨迹；员工信息全面归档，打造高效信息平台；重要事项准时提醒，有效规避劳动风险；人事报表随时取用，实时掌握人员异动。
                                    </p>
                                    <p className={styles.desclin}>360度全景人员资料管理</p>
                                    <p className={styles.apply} onClick={updateChildState}>申请试用</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.reverse} id="zz">
                            <div className={styles.content}>
                                <div className={styles.rBox}>
                                    <div className={styles.name_wrap}>
                                        <p className={styles.solid}></p>
                                        <h1>组织</h1>
                                    </div>
                                    <p className={styles.desc}>
                                        灵活配置管理权限，⽀持复杂组织架构。灵活设置多级部⻔，快速搭建架构体系直观查看组织架构图，⽀持⼀键导出强大的权限定义，多维度精细设置编制直观查看，成本控制⼼中有数。
                                    </p>
                                    <p className={styles.desclin}>灵活配置管理权限，⽀持复杂组织架构</p>
                                    <p className={styles.apply} onClick={updateChildState}>申请试用</p>
                                </div>
                                <div className={styles.lImg}>
                                    <img src={require('../../images/2.2_img_2.jpg')} alt=""/>
                                </div>

                            </div>
                        </div>
                        <div className={styles.reverse}  id="sp">
                            <div className={styles.content}>
                                <div className={styles.lImg}>
                                    <img src={require('../../images/2.2_img_3.jpg')} alt=""/>
                                </div>
                                <div className={styles.rBox}>
                                    <div className={styles.name_wrap}>
                                        <p className={styles.solid}></p>
                                        <h1>人员调配</h1>
                                    </div>
                                    <p className={styles.desc}>
                                        从入职到离退，记录员工成长轨迹；员工信息全面归档，打造高效信息平台；重要事项准时提醒，有效规避劳动风险；人事报表随时取用，实时掌握人员异动。
                                    </p>
                                    <p className={styles.desclin}>追踪所有人员变动</p>
                                    <p className={styles.apply} onClick={updateChildState}>申请试用</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.reverse} id="kq">
                            <div className={styles.content}>
                                <div className={styles.rBox}>
                                    <div className={styles.name_wrap}>
                                        <p className={styles.solid}></p>
                                        <h1>考勤</h1>
                                    </div>
                                    <p className={styles.desc}>
                                        设置不同考勤⽅案，⽀持多种打卡⽅式；灵活多样的班次设置，考勤管理更清晰；⼀键获取考勤报表，数据精准同步⼯资；考勤异常及时提醒，员工自主管理更高效。
                                    </p>
                                    <p className={styles.desclin}>考勤⽅案⾃定义 灵活打卡更便捷</p>
                                    <p className={styles.apply} onClick={updateChildState}>申请试用</p>
                                </div>
                                <div className={styles.lImg}>
                                    <img src={require('../../images/2.2_img_4.jpg')} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.reverse} id="pb">
                            <div className={styles.content}>
                                <div className={styles.lImg}>
                                    <img src={require('../../images/2.2_img_5.jpg')} alt=""/>
                                </div>
                                <div className={styles.rBox}>
                                    <div className={styles.name_wrap}>
                                        <p className={styles.solid}></p>
                                        <h1>排班</h1>
                                    </div>
                                    <p className={styles.desc}>
                                        按组、按部门，按周、月排班；灵活统计查询，夜班费用计算等。
                                    </p>
                                    <p className={styles.desclin}>排班支持多种方式</p>
                                    <p className={styles.apply} onClick={updateChildState}>申请试用</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.normal} id="bxfl">
                            <div className={styles.content}>
                                <div className={styles.rBox}>
                                    <div className={styles.name_wrap}>
                                        <p className={styles.solid}></p>
                                        <h1>保险福利</h1>
                                    </div>
                                    <p className={styles.desc}>
                                        保险缴纳调整，导入；月缴纳生成，未缴纳提醒；保险报表。
                                    </p>
                                    <p className={styles.desclin}>保险福利全流程操作</p>
                                    <p className={styles.apply} onClick={updateChildState}>申请试用</p>
                                </div>
                                <div className={styles.lImg}>
                                    <img src={require('../../images/2.2_img_6.jpg')} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.reverse} id="xz">
                            <div className={styles.content}>
                                <div className={styles.lImg}>
                                    <img src={require('../../images/2.2_img_7.jpg')} alt=""/>
                                </div>
                                <div className={styles.rBox}>
                                    <div className={styles.name_wrap}>
                                        <p className={styles.solid}></p>
                                        <h1>薪资</h1>
                                    </div>
                                    <p className={styles.desc}>
                                        针对不同员⼯类别，灵活配置薪酬⽅案
                                    </p>
                                    <p className={styles.desclin}>个性化薪酬⽅案 系统算薪更准确</p>
                                    <p className={styles.apply} onClick={updateChildState}>申请试用</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.normal} id="kp">
                            <div className={styles.content}>
                                <div className={styles.rBox}>
                                    <div className={styles.name_wrap}>
                                        <p className={styles.solid}></p>
                                        <h1>考评</h1>
                                    </div>
                                    <p className={styles.desc}>
                                        灵活定义指标，考评表，测评维度；批量发布考评，汇总报表，统计。
                                    </p>
                                    <p className={styles.desclin}>360度考评、年度考评，续签试用考评等</p>
                                    <p className={styles.apply} onClick={updateChildState}>申请试用</p>
                                </div>
                                <div className={styles.lImg}>
                                    <img src={require('../../images/2.2_img_8.jpg')} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.reverse} id="zp">
                            <div className={styles.content}>
                                <div className={styles.lImg}>
                                    <img src={require('../../images/2.2_img_9.jpg')} alt=""/>
                                </div>
                                <div className={styles.rBox}>
                                    <div className={styles.name_wrap}>
                                        <p className={styles.solid}></p>
                                        <h1>招聘</h1>
                                    </div>
                                    <p className={styles.desc}>
                                        职位/简历一站式管理，招聘全过程管理
                                    </p>
                                    <p className={styles.desclin}>招聘全流程处理</p>
                                    <p className={styles.apply} onClick={updateChildState}>申请试用</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.normal} id="rydp">
                            <div className={styles.content}>
                                <div className={styles.rBox}>
                                    <div className={styles.name_wrap}>
                                        <p className={styles.solid}></p>
                                        <h1>审批</h1>
                                    </div>
                                    <p className={styles.desc}>
                                        设置不同审批流程，满⾜不同业务场景；审批数据结果⾃动关联各模块；审批结果存档备忘，随时搜索审批详情；移动端审批⼊⼝，随时随地⾼效处理。
                                    </p>
                                    <p className={styles.desclin}>审批模式⾃定义 简明⾼效随时处理</p>
                                    <p className={styles.apply} onClick={updateChildState}>申请试用</p>
                                </div>
                                <div className={styles.lImg}>
                                    <img src={require('../../images/2.2_img_10.jpg')} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.reverse} id="kfhl">
                            <div className={styles.content} style={{border:'none'}}>
                                <div className={styles.lImg}>
                                    <img src={require('../../images/2.2_img_11.jpg')} alt=""/>
                                </div>
                                <div className={styles.rBox}>
                                    <div className={styles.name_wrap}>
                                        <p className={styles.solid}></p>
                                        <h1>开放互联</h1>
                                    </div>
                                    <p className={styles.desc}>
                                        与OA、HIS打通、集成微信小程序，实现系统之间互联互通；系统与用户的简单使用。
                                    </p>
                                    <p className={styles.desclin}>协同办公更便捷 满足事业单位一体化管理需求</p>
                                    <p className={styles.apply} onClick={updateChildState}>申请试用</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FormModal ref={childRef} cRef={childRef} />
            <NewFooter/>
        </>
    )
}
export default HrSystem;