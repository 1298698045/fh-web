import React,{ useState , useEffect , useRef } from "react";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';
import {Carousel,Divider,Pagination  } from "antd";
import {IconStyle} from "../../static/iconfont/iconfont";
import './index.scss'
import imgOne from '../../images/913.png';
import backUrl from "../../images/bj.png";
import NewFooter from "../../components/NewFooter";
const contentStyle = {
    height: '470px',
    color: '#fff',
    lineHeight: '470px',
    textAlign: 'center',
    background: '#364d79',
    autoplay:false
};
const back = {
    width:'100%',
    height: '434px',
    backgroundImage: `url(${imgOne})`,
    backgroundRepeat:'no-repeat'
};
const CustomerCase = () =>{
    const handlePhone = ()=> {
        window.location.href = "tel://10086";
    }
    const [list,setList] = useState([1,2,3,4,5,6,7,8,9]);
    const renderList = list.map((item,index)=>{
        return (
            <div className="box_box" key={index}>
                <p className="img">
                    <img src={require('../../images/103.png')} alt=""/>
                </p>
                <div className="cont_wrap">
                    <div className="desc">
                        喜报！北京协和医院电子票据管理平台正式上线，安全合规
                    </div>
                    <div className="row">
                        <p>签约动态 | 北京协和医院</p><p>2020-11-24</p>
                    </div>
                </div>
            </div>
        )
    })
    const welcome = useRef(null)
    return (
        <div className="wrap">
            <div className="center" style={{marginTop:'60px'}}>
                <div className="banners" style={back}>
                    <h3>让智慧医疗管理更便捷，让信任更简单</h3>
                    <p className={'text'}>20+年医疗行业经验   1500+医院用户  面向医院管理，链接移动办公，成就智慧医院</p>
                </div>
                <div className="contents">
                    <div className="case_wrap">
                        <div className={'dividerWrap'}>
                            <div className="divider">
                                <div className={'l'}>
                                    <span className={'line'}></span>
                                    <span className={'dian'}></span>
                                </div>
                                <div className={'title'}>
                                    新闻
                                </div>
                                <div className={'r'}>
                                    <span className={'dian'}></span>
                                    <span className={'line'}></span>
                                </div>
                            </div>
                        </div>
                        <div style={{textAlign:'center',color:'#626775',fontSize:'12px'}}>（展示部分合作医院，排名不分先后）</div>
                        <div className={'customerWrap'}>
                            {renderList}
                        </div>
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <Pagination defaultCurrent={1} total={100} />
                        </div>
                    </div>
                </div>
            </div>
            <NewFooter/>
        </div>
    )
}
export default CustomerCase;
