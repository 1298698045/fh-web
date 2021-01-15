import Home from '../pages/home/Home';
import HomePage from '../pages/home/HomePage'
import Solution from "../pages/solution/Solution";
import Download from "../pages/download/Download";
import AboutWe from "../pages/aboutWe/AboutWe";
import CustomerCase from '../pages/customerCase/CustomerCase'
import HrSystem from "../pages/hrSystem/HrSystem";
import WorkOA from "../pages/workOA/WorkOA";
import Xinwen from "../pages/xinwen/Xinwen";
import NewAboutWe from "../pages/newAboutWe/CopyAbout";
import Product from "../pages/product/Product";
import ElectronSystem from '../pages/electronSystem/ElectronSystem';
import MoveSystem from '../pages/moveSystem/MoveSystem';
import Intelligence from '../pages/intelligence/Intelligence';
import ContractAdmin from '../pages/contractAdmin/ContractAdmin';
import Technology from "../pages/technology/Technology";
import Contact from '../pages/contact/Contact';
import Talent from '../pages/talent/Talent';
import Detail from '../pages/xinwen/Detail';
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
        path:'/ElectronSystem',
        name:ElectronSystem
    },
    {
        path:'/MoveSystem',
        name:MoveSystem
    },
    {
        path:'/Intelligence',
        name:Intelligence
    },
    {
        path:'/ContractAdmin',
        name:ContractAdmin
    },
    {
        path:'/Technology',
        name:Technology
    },
    {
        path: '/Contact',
        name:Contact
    },
    {
        path: '/Talent',
        name:Talent
    },
    {
        path:'/Detail',
        name:Detail
    },
    {
        path:'/',
        name:Home
    }

]
export default routeList;