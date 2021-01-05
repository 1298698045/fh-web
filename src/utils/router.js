import Home from '../pages/home/Home';
import HomePage from '../pages/home/HomePage'
import Solution from "../pages/solution/Solution";
import Download from "../pages/download/Download";
import AboutWe from "../pages/aboutWe/AboutWe";
import CustomerCase from '../pages/customerCase/CustomerCase'
import HrSystem from "../pages/hrSystem/HrSystem";
import WorkOA from "../pages/workOA/WorkOA";
import Xinwen from "../pages/xinwen/Xinwen";
import NewAboutWe from "../pages/newAboutWe/NewAboutWe";
import Product from "../pages/product/Product";
const routeList = [
    {
        path:'/Home',
        name:Home
    },
    {
        path:'/Product',
        name:Product
    },
    {
      path: '/Xinwen',
      name: Xinwen
    },
    {
        path: '/CustomerCase',
        name:CustomerCase
    },
    {
        path:'/Solution',
        name:Solution
    },
    {
        path:'/Download',
        name:Download
    },
    {
        path:'/AboutWe',
        name:AboutWe
    },
    {
        path:'/NewAboutWe',
        name:NewAboutWe
    },
    {
        path:'/HrSystem',
        name:HrSystem
    },
    {
        path:'/WorkOA',
        name:WorkOA
    },
    {
        path:'/',
        name:Home
    }

]
export default routeList;