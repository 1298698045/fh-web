import React,{useState,useEffect,useRef} from "react";
import { Breadcrumb } from 'antd';
import styles from './detail.module.scss';
import NewFooter from "../../components/NewFooter";
import http from "../../utils/request";
import { useHistory, useLocation, Link } from 'react-router-dom';
const Detail = () =>{
    let location = useLocation();
    let history = useHistory();
    const [info,setInfo] = useState();
    const [ContentBody,setContentBody] = useState();
    const [Title,setTitle] = useState();
    console.log(location,'id')
    const [ContentId, setContentId] = useState(() => {
        const ContentId = window.localStorage.getItem("id");
        return ContentId;
    });
    // let id = location.state?location.state.id:ContentId;
    const getDetail = () =>{
        return new Promise((resolve,reject)=>{
            let url = `/api/Contentbase/GetContentbaseDetails?ContentId=${ContentId}`
            http("get",url).then(res => {
                setInfo(res.rows);
                setContentBody(res.rows.ContentBody);
                setTitle(res.rows.Title);
                resolve(res);
            },error => {
                console.log("网络异常~",error);
                // reject(error)
            })
        })

    }
    const [html,setHtml] = useState('<h1>121212</h1>')
    useEffect(()=>{
        // window.localStorage.setItem("id", id);
        getDetail();
    },[])
    return (
        <>
            <div className={styles.wrap}>
                <div className={styles.container}>
                    <div className={styles.crumbs}>
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <Link to={'/'}>
                                    首页
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <Link to={'/Xinwen'}>
                                    新闻中心
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                新闻详情
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className={styles.center}>
                        <div className={styles.content}>
                            <div className={styles.next}>
                                下一篇
                            </div>
                            <h3 className={styles.title}>
                                {Title}
                            </h3>
                            <p className={styles.time}>
                                2021-01-07
                            </p>
                            <div className={styles.cont}>
                                <div dangerouslySetInnerHTML={{__html:ContentBody}}></div>
                            </div>
                        </div>
                        <div className={styles.rightCont}>
                            <h1 className={styles.title}>
                                热门推荐
                            </h1>
                            <div className={styles.list}>
                                <p className={styles.row_text}>喜报！北京协和医院电子票据管理平台正式上线，安全合规</p>
                                <p className={styles.row_text}>喜报！北京协和医院电子票据管理平台正式上线，安全合规</p>
                                <p className={styles.row_text}>喜报！北京协和医院电子票据管理平台正式上线，安全合规</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.prev}>上一篇：暂无</div>
                    <div className={styles.next_text}>
                        下一篇：喜报！北京协和医院电子票据管理平台正式上线，安全合规！
                    </div>
                </div>
            </div>
        </>
    )
}
export default Detail;