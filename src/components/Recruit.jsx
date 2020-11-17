import React,{useState,useEffect} from "react";

const Recruit = () =>{
   return (
       <>
           <div className={'dividerWrap'}>
               <div className="divider">
                   <div className={'l'}>
                       <span className={'line'}></span>
                       <span className={'dian'}></span>
                   </div>
                   <div className={'title'}>
                       凤凰文化
                   </div>
                   <div className={'r'}>
                       <span className={'dian'}></span>
                       <span className={'line'}></span>
                   </div>
               </div>
           </div>
           <div className="culture">
               <div className="box">
                   <div className="imgs">
                       <img src={require('../images/353 (2).png')} alt=""/>
                   </div>
                   <p className="name">愿景</p>
                   <div className="text">让知识成为人与组织、组织之间的价值连接</div>
               </div>
               <div className="box">
                   <div className="imgs">
                       <img src={require('../images/353 (1).png')} alt=""/>
                   </div>
                   <p className="name">价值观</p>
                   <div className="text">让知识成为人与组织、组织之间的价值连接</div>
               </div>
               <div className="box">
                   <div className="imgs">
                       <img src={require('../images/353 (2).png')} alt=""/>
                   </div>
                   <p className="name">使命</p>
                   <div className="text">让知识成为人与组织、组织之间的价值连接</div>
               </div>
           </div>
           <div className="joinCont">
               <div className={'dividerWrap'}>
                   <div className="divider">
                       <div className={'l'}>
                           <span className={'line'}></span>
                           <span className={'dian'}></span>
                       </div>
                       <div className={'title'}>
                           期待你的加入
                       </div>
                       <div className={'r'}>
                           <span className={'dian'}></span>
                           <span className={'line'}></span>
                       </div>
                   </div>
               </div>
               <div className="position">
                   <div className="head">
                       实施工程师
                   </div>
                   <div className="row">
                       <div className="item">
                           <p className="radio">

                           </p>
                           <p className={'name'}>
                               基本薪资：<span>面议</span>
                           </p>
                       </div>
                       <div className="item">
                           <p className="radio">

                           </p>
                           <p className={'name'}>
                               工作年限：<span>1-3年</span>
                           </p>
                       </div>
                       <div className="item">
                           <p className="radio">

                           </p>
                           <p className={'name'}>
                               最低学历：<span>本科</span>
                           </p>
                       </div>
                   </div>
                   <div className="maxRow">
                       <div className="radio"></div>
                       <div className="cont">
                           <p className={'name'}>岗位职责：</p>
                           <p>1、会安装部署IIS ，sql server，会使用 sql server 工具;</p>
                           <p>2、会sql 语句 查、增、改、删等基本操作。</p>
                           <p>3、具有很强沟通能力、口齿清晰、积极主动；</p>
                           <p>4、具有管理软件实施优先（oa，hr）；</p>
                       </div>
                   </div>
                   <div className="maxRow">
                       <div className="radio"></div>
                       <div className="cont">
                           <p className={'name'}>任职要求：</p>
                           <p>1、HR,OA,ERP安装、系统初始化</p>
                           <p>2、系统操作培训</p>
                           <p>3、收集整理客户需求，维护客户系统。</p>
                       </div>
                   </div>
               </div>
           </div>
           <div className="qrcodeWrap">
               <div className="qrCode">
                   <div className="box">
                       <div className="l">
                           <p className={'email'}>
                               简历投递邮箱：lzy@phxinfo.com.cn
                           </p>
                           <p className={'more'}>更多职位扫描右侧二维码查看</p>
                       </div>
                       <div className="r">
                           <p>直聘二维码</p><p>拉钩二维码</p>
                       </div>
                   </div>

               </div>
           </div>
        </>
   )
}
export default Recruit;