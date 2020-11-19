// 新闻动态
import React,{useState,useEffect} from "react";
import { Pagination } from 'antd';
import  '../css/journalism.scss';
import {IconStyle} from '../static/iconfont1/iconfont'
const Journalism = () => {
    const [listData,setListData] = useState([1,2,3])
    const list = listData.map((item,index)=>{
        return (
            <div className="journalism">
                <div className="lBox">
                    <img src={require('../images/296.png')} alt=""/>
                </div>
                <div className="rBox">
                    <p className="title">北京安定医院临床心理中心成立暨临床心理病房正式开区</p>
                    <p className="cont">
                        通过云和移动的技术助推医疗信息化改革，释放核心医疗资源，提升医生工作效率，解决患者看病难的问题。
                        通过云和移动的技术助推医疗信息化改革，释放核心医疗资源，提升医生工作效率，解决患者看病难的问题。
                        通过云和移动的技术助推医疗信息化改革，释放核心医疗资源，提升医生工作效率，解决患者看病难的问题。
                        通过云和移动的技术助推医疗信息化改革，释放核心医疗资源，提升医生工作效率，解决患者看病难的问题。
                    </p>
                    <div className="bottom">
                        <p>2019年7月09日</p>
                        <p>
                            <IconStyle />
                            <i className="iconfont" style={{marginRight:'10px'}}>&#xe836;</i>
                            6201
                        </p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <>
            {list}
            <div className="pagination">
                <Pagination defaultCurrent={1} total={100} />
            </div>

        </>
    )
}
export default Journalism;