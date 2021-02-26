import React,{useState,useEffect,useRef} from "react";
import styles from './index.module.scss';
import imgOne from '../../images/913.png';
import NewFooter from "../../components/NewFooter";
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
const NewAboutWe = () => {
    useEffect(() => {
    }, []);
    return (
        <>
            <div className={styles.About_wrap}>
                <div className={styles.banners} style={back}>
                    <h3>让智慧医疗管理更便捷，让信任更简单</h3>
                    <p className={styles.text}>20+年医疗行业经验   1500+医院用户  面向医院管理，链接移动办公，成就智慧医院</p>
                </div>
                <div className={styles.center}>
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
                    </div>
                </div>
            </div>
            <NewFooter/>
        </>
    )
};
export default NewAboutWe;