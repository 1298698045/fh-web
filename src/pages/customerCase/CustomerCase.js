import React,{ useState , useEffect , useRef } from "react";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';
import {Carousel,Divider,Pagination  } from "antd";
import {IconStyle} from "../../static/iconfont/iconfont";
import './index.scss'
import imgOne from '../../images/913.png';
import backUrl from "../../images/bj.png";
import NewFooter from '../../components/NewFooter';
import http from "../../utils/request";
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
    const [ItemId,setItemId] = useState('76B773D6-7DF3-445C-9F83-5D870A34FD81');
    const [PageIndex,setPageIndex] = useState(1);
    const [PageSize,setPageSize] = useState(9);
    const [total,setTotal] = useState(10);
    const [list,setList] = useState([]);
    useEffect(()=>{
        getQuery();
    },[])
    const changePage = async (e) =>{
        setPageIndex(e);
        await getQuery(e);
    }
    const getQuery = (e=1) =>{
        return new Promise((resolve,reject)=>{
            let url = '/api/Contentbase/GetContentbases?ItemId='+ItemId+'&PageIndex=' + e + '&PageSize=' + PageSize;
            http("get",url).then(res => {
                setList(res.rows);
                setTotal(res.total);
                resolve(res);
            },error => {
                console.log("网络异常~",error);
                // reject(error)
            })
        })

    }
    const renderList = list.map((item,index)=>{
        return (
            <div className="box" key={index}>
                <p className="img">
                    <img src={require('../../images/103.png')} alt=""/>
                </p>
                <div className="caseCont">
                    <div className="imgs">
                        <img src={require('../../images/104.png')} alt=""/>
                    </div>
                    <p className={'text textRow'}>医药医疗：山西省长治市人民医院</p>
                    <p className={'title_'}>{item.Title}</p>
                    <div className="divs">
                        <p className="text show">通过云和移动的技术助推医疗信息化改革，释放核心医疗资源，提升医生工作效率，解决患者看病难的问题。</p>
                        <div className="signRed">
                            <p>1000人以上</p><p>提升沟通效率、高效组织会议</p>
                        </div>
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
                                    客户案例
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
                            <Pagination defaultCurrent={PageIndex} current={PageIndex} pageSize={PageSize} total={total} onChange={changePage} />
                        </div>
                    </div>
                </div>
            </div>
            <NewFooter/>
        </div>
    )
}
export default CustomerCase;
