import React,{useState,useEffect,useRef} from 'react';
import 'antd/dist/antd.css';
import './index.scss';
import Journalism from '../../components/Journalism';
import Recruit from '../../components/Recruit';
import WeMy from '../../components/WeMy';
const AboutWe = () => {
    const [idx,setIdx] = useState(0);
    const [data,setData] = useState(['公司简介','新闻动态','人才招聘','联系我们']);
    const tabs = data.map((item,index)=>{
        return <p className={idx==index?'active':''} onClick={()=>handleTab(index)} key={index}>{item}</p>
    })
    const handleTab = (index) => {
        setIdx(index)
    };
    let JournalismC;
    let company;
    let recruit;
    let wemy;
    if(idx==0){
        company = (
             <div>
                 <div className={'dividerWrap'}>
                     <div className="divider">
                         <div className={'l'}>
                             <span className={'line'}></span>
                             <span className={'dian'}></span>
                         </div>
                         <div className={'title'}>
                             公司简介
                         </div>
                         <div className={'r'}>
                             <span className={'dian'}></span>
                             <span className={'line'}></span>
                         </div>
                     </div>
                 </div>
                 <div className="boxCont">
                     <div className="article">
                         <p>
                             北京凤凰世纪科技有限公司成立于2016年2月，公司总部位于北京中关村，
                             2018年通过国家级高新技术企业认定，2019年顺利通过了“双软企业”认证，
                             获得北京软件行业协会颁发的双软认证证书《软件企业证书》和《软件产品证书》。
                         </p>
                         <br/>
                         <p>
                             国家级高新技术企业和“双软企业”认证是对公司极大的鼓舞，充分肯定了我公司多年来软件开发方面工作的不懈努力；
                             也说明我们在规范经营等方面又迈上了一个新台阶，充分证明了公司软件产品的开发技术力量、技术服务水平又上了一个新的台阶，
                             也表明了我们得到了政府、行业和客户的认可，这是对我们历史成绩的肯定，更是对今后工作的巨大推动。
                             对促进公司科技创新良性发展有着重要意义，同时还利于公司进一步吸引人才，提升企业核心竞争力。
                         </p>
                         <br/>
                         <p>
                             凤凰世纪是一家专业从事智慧医院综合管理平台研发的高科技公司，
                             公司定位于为医院提供智慧医院综合管理平台，为病患提供基于移动端的全面的高效便捷的就医工具，
                             协助医院提高信息化建设水平，优化患者就医流程。
                         </p>
                         <br/>
                         <p>
                             凤凰世纪拥有一支属于自己的核心技术团队，并与腾讯微信平台和阿里巴巴支付宝平台建立长期合作关系。
                             凭借强大的技术支持能力、良好的运营体系与稳定的售后服务，凤凰世纪科技智慧医院综合管理平台已与众多医院和政府机构达成深度合作，
                             仅在山西省内已有90%以上的三甲医院成功上线，支付宝“未来医院”服务窗也陆续登陆各合作医院。
                         </p>
                         <br/>
                         <p>
                             公司将以专业化的技术和专心致志的服务协助政府和医院实现现有医疗资源优化配置，提升医院管理效率，完善医疗服务体系，
                             革新就医服务模式，为医院整体信息化建设和变革注入可持续发展动力，以此服务社会，服务民生。
                         </p>
                     </div>
                     <div className="coverImg">
                         <img src={require('../../images/287.png')} alt=""/>
                     </div>
                 </div>
             </div>
         )
    }else
    if(idx==1){
        JournalismC = (<Journalism/>);
    }else if(idx==2){
        recruit = (<Recruit/>)
    }else if(idx==3){
        wemy = (<WeMy/>)
    }
    return (
        <div className="wrap">
            <div className="banner">
                <img src={require('../../images/7.png')} alt=""/>
                <div className="position">
                    <h1>专注提供医院运营管理软件</h1>
                    <h3>帮助医院建立管理在日常办公中有效提高效率的管理平台，形成随时随地轻松办公</h3>
                </div>
            </div>
            <div className="center-wrap">
                <div className="nav">
                    <div className="about">
                        <p style={{fontWeight:'bold',fontSize:'14px'}}>ABOUT US</p>
                        <p>关于我们</p>
                    </div>
                    <div className="tabs">
                        {tabs}
                    </div>
                </div>
                <div className="content">
                    {company}
                    {JournalismC}
                    {recruit}
                    {wemy}
                </div>
            </div>
        </div>
    )
}
export default AboutWe;