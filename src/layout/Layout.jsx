import React from 'react';
import LayoutHeader from '../components/LayoutHeader';
import LayoutFooter from '../components/LayoutFooter';
import Aside from '../components/Aside';
export const Layout = (props) => {
    // const  LayoutHead =<div className={"wrap"}> </div>
    // children是子模块
    return (<div className={"wrap"}>
        <LayoutHeader />
        {props.children}
        <LayoutFooter/>
        <Aside/>
        </div>);
}