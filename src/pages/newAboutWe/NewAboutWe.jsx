import React,{useState,useEffect,useRef} from "react";
import styles from './index.module.scss';
import './index.scss';
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
const NewAboutWe = () => {
    const [index,setIndex] = useState(0)
    const [targetOffset, setTargetOffset] = useState(undefined);
    const scroll = useScroll();

    const [indexInfo, setIndexInfo] = useState(defaultIndexInfo);
    const [tabIdx,setTabIdx] = useState(0);
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
    },[scroll])
    const getTab = (index) => {
        console.log(index);
        setIndex(index);
        indexInfo.map((item)=>{
            // console.log(top);
            if(item.index===index) {
                let top = document.getElementById(item.id).offsetTop-110;
                window.scrollTo({top: top})
            }
        })
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
                        <div className={styles.shadow} id={'gs'}>
                            <h3 className={styles.title}>公司简介</h3>
                            <div className={styles.article}>
                                <div className={styles.lText}>
                                    <p>北京凤凰世纪科技有限公司成立于2016年2月，公司总部位于北京中关村，2018年通过国家级高新技术企业认定，
                                        2019年顺利通过了“双软企业”认证，获得北京软件行业协会颁发的双软认证证书《软件企业证书》和《软件产品证书》。</p>
                                    <br/>
                                    <p>国家级高新技术企业和“双软企业”认证是对公司极大的鼓舞，充分肯定了我公司多年来软件开发方面工作的不懈努力；
                                        也说明我们在规范经营等方面又迈上了一个新台阶，充分证明了公司软件产品的开发技术力量、
                                        技术服务水平又上了一个新的台阶，也表明了我们得到了政府、行业和客户的认可，这是对我们历史成绩的肯定，
                                        更是对今后工作的巨大推动。对促进公司科技创新良性发展有着重要意义，同时还利于公司进一步吸引人才，提升企业核心竞争力。</p>
                                    <br/>
                                    <p>
                                        凤凰世纪是一家专业从事智慧医院综合管理平台研发的高科技公司，公司定位于为医院提供智慧医院综合管理平台，
                                        为病患提供基于移动端的全面的高效便捷的就医工具，协助医院提高信息化建设水平，优化患者就医流程。
                                    </p>
                                    <br/>
                                    <p>
                                        凤凰世纪拥有一支属于自己的核心技术团队，并与腾讯微信平台和阿里巴巴支付宝平台建立长期合作关系。
                                        凭借强大的技术支持能力、良好的运营体系与稳定的售后服务，凤凰世纪科技智慧医院综合管理平台已与众多医院和政府机构达成深度合作，
                                        仅在山西省内已有90%以上的三甲医院成功上线，支付宝“未来医院”服务窗也陆续登陆各合作医院。
                                    </p>
                                    <br/>
                                    <p>
                                        公司将以专业化的技术和专心致志的服务协助政府和医院实现现有医疗资源优化配置，提升医院管理效率，
                                        完善医疗服务体系，革新就医服务模式，为医院整体信息化建设和变革注入可持续发展动力，以此服务社会，服务民生。
                                    </p>
                                </div>
                                <div className={styles.rImg}>
                                    <img src={require('../../images/287.png')} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.shadow} id={'js'}>
                            <h3 className={styles.title}>技术资质</h3>
                            <div className={styles.imgs_wrap}>
                                <div className={styles.img_box}></div>
                                <div className={styles.img_box}></div>
                                <div className={styles.img_box}></div>
                                <div className={styles.img_box}></div>
                                <div className={styles.img_box}></div>
                                <div className={styles.img_box}></div>
                                <div className={styles.img_box_h}></div>
                                <div className={styles.img_box_h}></div>
                                <div className={styles.img_box_h}></div>
                                <div className={styles.img_box_h}></div>
                                <div className={styles.img_box_h}></div>
                                <div className={styles.img_box_h}></div>
                            </div>
                        </div>
                        <div className={styles.recruit} id={'rc'}>
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
                        <div className={styles.shadow} id={'lx'}>
                            <h3 className={styles.title}>联系我们</h3>
                            <div className={styles.location_wrap}>
                                <div className={styles.location}>
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
export default NewAboutWe;