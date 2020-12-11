import React,{useRef,useState,useEffect} from "react";
import { Anchor } from 'antd';
import styles from './index.module.scss';
import { useScroll } from 'ahooks';
import {IconStyle} from "../../static/iconfont/iconfont";
import NewFooter from '../../components/NewFooter'
console.log(styles,'style')
const { Link } = Anchor;

const defaultIndexInfo = [
    {index:0, top: 800,  id: 'xq'},
    {index:1, top: 1400 ,id: 'fa'},
    {index:2, top: 2100 ,id: 'yy'},
    {index:3, top: 2820, id: 'gn'},
    {index:4, top: 3500 ,id: 'kh'},
]

const HrSystem = () =>{
    const listHeight= useRef();
    const [index,setIndex] = useState(0)
    const [targetOffset, setTargetOffset] = useState(undefined);
    const scroll = useScroll();

    const [indexInfo, setIndexInfo] = useState(defaultIndexInfo)
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
                <div className={styles.banner_wrap}>
                    <div className={styles.banner}>
                        <div className={styles.text_wrap}>
                            <h1 className={styles.name}>人力资源管理系统</h1>
                            <div className={styles.cont}>
                                伴随着行业的快速增长，在企业提供人力资源服务的过程中，产生了
                                大量人员相关的信息数据需求，基于人性化管理的人力资源平台，提
                                升人员信息集中化、部门间数据协作化，实现统一规划、统一建设、统
                                一投入、统一运营的人力资源电子流程化。解决系统间数据不联通的问题。
                            </div>
                            <div className={styles.btn}>试用申请</div>
                        </div>
                        <div className={styles.img_wrap}>
                            <img src={require('../../images/1010.png')} alt=""/>
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
                                <p className={index==0?styles.active:styles.tab} onClick={()=>getTab(0)}>需求分析</p>
                                <p className={index==1?styles.active:styles.tab} onClick={()=>getTab(1)}>方案思路</p>
                                <p className={index==2?styles.active:styles.tab} onClick={()=>getTab(2)}>应用优势</p>
                                <p className={index==3?styles.active:styles.tab} onClick={()=>getTab(3)}>功能模块</p>
                                <p className={index==4?styles.active:styles.tab} onClick={()=>getTab(4)}>客户案例</p>
                            </div>
                        </div>
                    </Anchor>
                    <div className={styles.container}>
                        <div className={styles.normal} id="xq">
                            <h3 className={styles.title}>需求分析</h3>
                            <p className={styles.text}>基于人性化管理的人力资源平台，统一规划、统一建设、统一投入、统一运营</p>
                            <div className={styles.content}>
                                <div className={styles.i_item}>
                                    <p className={styles.tag}></p>
                                    <h3 className={styles.name}>
                                        审批效率低
                                    </h3>
                                    <p className={styles.item_text}>整合所有与人相关的信息数据</p>
                                </div>
                                <div className={styles.i_item}>
                                    <p className={styles.tag}></p>
                                    <h3 className={styles.name}>
                                        缺乏沟通渠道
                                    </h3>
                                    <p className={styles.item_text}>人员数据分散，不集中，不统一，部门间数据不协作</p>
                                </div>
                                <div className={styles.i_item}>
                                    <p className={styles.tag}></p>
                                    <h3 className={styles.name}>
                                        信息缺乏
                                    </h3>
                                    <p className={styles.item_text}>数据收集 </p>
                                </div>
                                <div className={styles.i_item}>
                                    <p className={styles.tag}></p>
                                    <h3 className={styles.name}>
                                        缺乏科学依据、平台
                                    </h3>
                                    <p className={styles.item_text}>系统间数据不联通</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.normal} id="fa">
                            <h3 className={styles.title}>方案思路</h3>
                            <p className={styles.text}>基于互联网+现代人力资源管理的建设思路，以人为基础，建设“一个平台、多处应用系统”，实现部门数据协作共享、系统之间互联互通。</p>
                            <div className={styles.content}>
                                <div className={styles.item_box}>
                                    <div className={styles.position}>
                                        <p className={styles.name}>360全景</p>
                                        <span className={styles.border}></span>
                                        <p className={styles.desc}>
                                            搭建全医院流程协作、移动办公平台 ，实现随时随地办公
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.item_box}>
                                    <div className={styles.position}>
                                        <p className={styles.name}>流程协作化</p>
                                        <span className={styles.border}></span>
                                        <p className={styles.desc}>
                                            构建医院知识、通知与公告、规章、新闻等内容发布平台与门户、建立全院知识库，
                                            让OA成为全院职工了解医院动态平台
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.item_box}>
                                    <div className={styles.position}>
                                        <p className={styles.name}>电子化</p>
                                        <span className={styles.border}></span>
                                        <p className={styles.desc}>
                                            构建医院统一沟通平台、通过APP、邮件、AM等客户端形成快速沟通，实现人与人，
                                            职员与领导，科室与科室之间沟通无障碍
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.item_box}>
                                    <div className={styles.position}>
                                        <p className={styles.name}>互联互通</p>
                                        <span className={styles.border}></span>
                                        <p className={styles.desc}>
                                            构建综合(BI)数据平台，展现医院经营、OA、HR、HIS等系统各类报表，形成决策支持
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.shadow} id="yy">
                            <h3 className={styles.title}>应用优势</h3>
                            <p className={styles.text}>全方位、专业化、一体化</p>
                            <div className={styles.yingyong}>
                                <div className={styles.imgs}>
                                    <img src={require('../../images/1015.png')} alt=""/>
                                </div>
                                <div className={styles.r_text}>
                                    <div className={styles.box_cont}>
                                        <div className={styles.img_title}>
                                            <img src={require('../../images/1017.png')} alt=""/>
                                            规范性
                                        </div>
                                        <div className={styles.desc}>各种信息和业务流程均可在手机上进行处理，无需通过秘书代办、延时处理，保证意见能几时回复和传达。</div>
                                    </div>
                                    <div className={styles.box_cont}>
                                        <div className={styles.img_title}>
                                            <img src={require('../../images/1017(2).png')} alt=""/>
                                            规范性
                                        </div>
                                        <div className={styles.desc}>各种信息和业务流程均可在手机上进行处理，无需通过秘书代办、延时处理，保证意见能几时回复和传达。</div>
                                    </div>
                                    <div className={styles.box_cont}>
                                        <div className={styles.img_title}>
                                            <img src={require('../../images/1017(1).png')} alt=""/>
                                            规范性
                                        </div>
                                        <div className={styles.desc}>各种信息和业务流程均可在手机上进行处理，无需通过秘书代办、延时处理，保证意见能几时回复和传达。</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.normal} id="gn">
                            <h3 className={styles.title}>产品功能</h3>
                            <p className={styles.text}>最专业的医院OA系统</p>
                            <div className={styles.flex}>
                                <div className={styles.item}>
                                    <img src={require('../../images/1037.png')} alt=""/>
                                    <h6 className={styles.title}>人员管理</h6>
                                    <p className={styles.desc}>
                                        智能识别客户所在行业和特定行业惯常条款，为客户推荐贴合场景的合同模板
                                    </p>
                                </div>
                                <div className={styles.item}>
                                    <img src={require('../../images/1037.png')} alt=""/>
                                    <h6 className={styles.title}>流程管理</h6>
                                    <p className={styles.desc}>
                                        智能识别客户所在行业和特定行业惯常条款，为客户推荐贴合场景的合同模板
                                    </p>
                                </div>
                                <div className={styles.item}>
                                    <img src={require('../../images/1037.png')} alt=""/>
                                    <h6 className={styles.title}>内容管理</h6>
                                    <p className={styles.desc}>
                                        智能识别客户所在行业和特定行业惯常条款，为客户推荐贴合场景的合同模板
                                    </p>
                                </div>
                                <div className={styles.item}>
                                    <img src={require('../../images/1037.png')} alt=""/>
                                    <h6 className={styles.title}>考勤系统</h6>
                                    <p className={styles.desc}>
                                        智能识别客户所在行业和特定行业惯常条款，为客户推荐贴合场景的合同模板
                                    </p>
                                </div>
                                <div className={styles.item}>
                                    <img src={require('../../images/1037.png')} alt=""/>
                                    <h6 className={styles.title}>通讯系统</h6>
                                    <p className={styles.desc}>
                                        智能识别客户所在行业和特定行业惯常条款，为客户推荐贴合场景的合同模板
                                    </p>
                                </div>
                                <div className={styles.item}>
                                    <img src={require('../../images/1037.png')} alt=""/>
                                    <h6 className={styles.title}>会议系统</h6>
                                    <p className={styles.desc}>
                                        智能识别客户所在行业和特定行业惯常条款，为客户推荐贴合场景的合同模板
                                    </p>
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