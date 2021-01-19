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
    {index:0, top: 800,  id: 'xq'},
    {index:1, top: 2100 ,id: 'yy'},
    {index:2, top: 3500 ,id: 'kh'},
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
        // }else if(top<1400) {
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
                                <p className={index==0?styles.active:styles.tab} onClick={()=>getTab(0)}>员工</p>
                                <p className={index==1?styles.active:styles.tab} onClick={()=>getTab(1)}>产品功能</p>
                                <p className={index==2?styles.active:styles.tab} onClick={()=>getTab(2)}>客户案例</p>
                                {/*<p className={index==3?styles.active:styles.tab} onClick={()=>getTab(3)}>功能模块</p>*/}
                                {/*<p className={index==4?styles.active:styles.tab} onClick={()=>getTab(4)}>客户案例</p>*/}
                            </div>
                        </div>
                    </Anchor>
                    <div className={styles.container}>
                        <div className={styles.normal} id="xq">
                            <div className={styles.content}>
                                <div className={styles.lImg}>
                                    <img src={require('../../images/1716.png')} alt=""/>
                                </div>
                                <div className={styles.rBox}>
                                    <h1>员工</h1>
                                    <p className={styles.desc}>
                                    360度全景人员资料管理，从入职到离退，记录员工成长轨迹员工信息全面归档，打造高效信息平台重要事项准时提醒，有效规避劳动风险人事报表随时取用，实时掌握人员异动。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.shadow} id="yy">
                            <h3 className={styles.title}>产品功能</h3>
                            <div className={styles.yingyong}>
                                <div className={styles.product}>
                                    {
                                        productList.map((item,index)=>{
                                            return (
                                                <div className={styles.item_box}>
                                                    <div className={styles.imgs}>
                                                        <img className={styles.img} src={require('../../images/1037.png')} alt=""/>
                                                    </div>
                                                    <div className={styles.rText}>
                                                        <p className={styles.name}>{item.name}</p>
                                                        <p className={styles.desc}>
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    
                                </div>
                            </div>
                        </div>
                        <div className={styles.normal} id="kh">
                            <h3 className={styles.title}>客户案例</h3>
                            <div className={styles.content}>
                                {
                                    [1,2,3,4,5,6,7,8,9,10,11,12].map((item,index)=>{
                                        return (
                                            <div className={styles.al_item}>
                                                <img src={require('../../images/766.png')} alt=""/>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className={styles.link}>更多客户案例
                                <IconStyle/>
                                <i className="iconfont">&#xe62a;</i>
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