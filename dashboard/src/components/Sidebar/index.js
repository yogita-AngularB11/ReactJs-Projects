import Button from '@mui/material/Button';


import { RxDashboard } from "react-icons/rx";
import { FaAngleRight } from "react-icons/fa6";
import { LuSlack } from "react-icons/lu";
// import PixIcon from '@mui/icons-material/Pix';
import { FiUsers } from "react-icons/fi";
import { BsCart4 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { GoGear } from "react-icons/go";
import { MdLanguage } from "react-icons/md";
import { FiTarget } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState(0)
    const [isToggleSubmenu, setisToggleSubmenu] = useState(false);
    const isOpenSubmenu = (index) => {
        setActiveTab(index);
        setisToggleSubmenu(!isToggleSubmenu)
    }
    return (
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to='/'>
                            <Button className={` w-100 ${activeTab === 0 ? 'active' : ''}`} onClick={() => isOpenSubmenu(0)} >
                                <span className='icon'>
                                    <RxDashboard />
                                </span>
                                Dashboard
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <Button className={` w-100 ${activeTab === 1 ? 'active' : ''}`} onClick={() => isOpenSubmenu(1)} >
                                <span className='icon'><LuSlack />  </span>
                                Catalog
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                            <div className={`submenuWrapper ${activeTab === 1 && isToggleSubmenu === true ? 'collapse' : 'collapsed'}`}>
                                <ul className='submenu'>
                                    <li><Link to="#">Products</Link></li>
                                    <li><Link to="#">Categories</Link></li>
                                    <li><Link to="#">Attributes</Link></li>
                                    <li><Link to="#">Coupons</Link></li>
                                </ul>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to='/'>
                            <Button className={` w-100 ${activeTab === 2 ? 'active' : ''}`} onClick={() => isOpenSubmenu(2)} >
                                <span className='icon'>
                                    <FiUsers />
                                </span>
                                Customers
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <Button className={` w-100 ${activeTab === 3 ? 'active' : ''}`} onClick={() => isOpenSubmenu(3)} >
                                <span className='icon'>
                                    <BsCart4 />
                                </span>
                                Orders
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <Button className={` w-100 ${activeTab === 4 ? 'active' : ''}`} onClick={() => isOpenSubmenu(4)} >
                                <span className='icon'>
                                    <FiUser />
                                </span>
                                Our Staff
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <Button className={` w-100 ${activeTab === 5 ? 'active' : ''}`} onClick={() => isOpenSubmenu(5)} >
                                <span className='icon'>
                                    <GoGear />
                                </span>
                                Settings
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <Button className={` w-100 ${activeTab === 6 ? 'active' : ''}`} onClick={() => isOpenSubmenu(6)} >
                                <span className='icon'>
                                    <MdLanguage />
                                </span>
                                International
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                            <div className={`submenuWrapper ${activeTab === 6 && isToggleSubmenu === true ? 'collapse' : 'collapsed'}`}>
                                <ul className='submenu'>

                                    <li><Link to="/">Languages</Link></li>
                                    <li><Link to="/">Currencies</Link></li>
                                </ul>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <Button className={` w-100 ${activeTab === 7 ? 'active' : ''}`} onClick={() => isOpenSubmenu(7)} >
                                <span className='icon'>
                                    <FiTarget />
                                </span>
                                Online Store
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                            <div className={`submenuWrapper ${activeTab === 7 && isToggleSubmenu === true ? 'collapse' : 'collapsed'}`}>
                                <ul className='submenu'>
                                    <li><Link to="/">View Store</Link></li>
                                    <li><Link to="/">Store Customization</Link></li>
                                    <li><Link to="/">Store Setting</Link></li>
                                </ul>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <Button className={` w-100${activeTab === 8 ? 'active' : ''}`} onClick={() => isOpenSubmenu(8)} >
                                <span className='icon'>
                                    <LuSlack />
                                </span>
                                Pages
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                            <div className={`submenuWrapper${activeTab === 8 && isToggleSubmenu === true ? 'collapse' : 'collapsed'}`}>
                                <ul className='submenu'>
                                    <li><Link to="/">404</Link></li>
                                    <li><Link to="/">Coming Soon</Link></li>
                                </ul>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>


        </>
    )
}
export default Sidebar;