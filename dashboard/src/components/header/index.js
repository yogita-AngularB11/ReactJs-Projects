import * as React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import Button from '@mui/material/Button';
// import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineMenuOpen } from "react-icons/md";
import SearchBox from "./SearchBox";

import { MdOutlineLightMode } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
// import { MdDarkMode } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";

// import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Tooltip from '@mui/material/Tooltip';
// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import { RxDashboard } from "react-icons/rx";
import { GoGear } from "react-icons/go";

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isOpennotificationsDrop, setisOpennotificationsDrop] = React.useState(false);

    const openMyAcc = Boolean(anchorEl);
    const openNotifications = Boolean(isOpennotificationsDrop);

    const handleOpenMyAccDrop = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAccDrop = () => {
        setAnchorEl(null);
    };

    const handleOpennotificationsDrop = () => {
        setisOpennotificationsDrop(true)
    }

    const handleClosenotificationsDrop = () => {
        setisOpennotificationsDrop(false)
    }
    return (
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center w-100">
                        {/*logo wrapper*/}

                        <div className="col-sm-2 part1">
                            <Link to={'./'} className="d-flex align-items-center">
                                <img src={logo} className="logo" alt="logo" />
                            </Link>
                        </div>

                        <div className="col-sm-3 d-flex align-items-center part2 pl-4">
                            <Button className="rounded-circle mr-3"><MdOutlineMenuOpen /></Button>
                            <SearchBox />
                        </div>

                        <div className="col-sm-7 d-flex align-items-center part3 pl-4 justify-content-end">
                            <Button className="rounded-circle mr-3"><MdOutlineLightMode /></Button>
                            <Button className="rounded-circle mr-3"><MdLanguage /></Button>
                            <Button className="rounded-circle mr-3"><BsCart4 /></Button>
                            <Button className="rounded-circle mr-3"><MdOutlineMail /></Button>

                            <div className="notificationsWrapper position-relative">
                                <Button className="rounded-circle mr-3" onClick={handleOpennotificationsDrop}><MdNotificationsNone /></Button>
                                <Menu
                                    anchorEl={isOpennotificationsDrop}
                                    id="notifications"
                                    className='notifications dropdown_list'
                                    open={openNotifications}
                                    onClose={handleClosenotificationsDrop}
                                    onClick={handleClosenotificationsDrop}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem onClick={handleClosenotificationsDrop}>
                                        Notifications(12)
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem onClick={handleClosenotificationsDrop}>
                                        <div className='d-flex align-items-center'>

                                            <div className='userImg'>
                                                <span className='rounded-circle'>
                                                    <img src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png" alt="" srcset="" />
                                                </span>
                                            </div>
                                            <div className='dropdownInfo'>
                                                <h6>
                                                    <span>
                                                        <b>Fahad Malik </b>
                                                        undefined, Placed 193.67 order! </span>
                                                </h6>
                                                <p class="text-order-date d-flex align-items-center">
                                                    <span class="text-order d-inline-flex px-2  fw-medium lh-sm rounded-pill text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                                                        New Order
                                                    </span>
                                                    <span class="ms-2">19 Aug, 2024  6:52 PM</span></p>
                                            </div>
                                            <div class="d-inline-block position-relative">
                                                <button type="button" class="btn p-0 text-red-500 hover-text-primary focus-outline-none">
                                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <polyline points="3 6 5 6 21 6"></polyline>
                                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                                    </svg>
                                                </button>
                                                <div class="position-absolute d-none bg-light text-danger end-0 z-index-50 p-2 text-sm fw-medium rounded shadow tooltip">
                                                    Delete
                                                </div>
                                            </div>

                                        </div>
                                    </MenuItem>

                                </Menu>
                            </div>
                            <div className="myAccWrapper">
                                <Button className="myAcc d-flex align-items-center" onClick={handleOpenMyAccDrop}>
                                    <div className="userImg">
                                        <span className="rounded-circle">
                                            <img src="https://i.ibb.co/WpM5yZZ/9.png" alt="" srcset="" />
                                        </span>
                                    </div>
                                    <div className="userInfo">
                                        <h4>Admin</h4>
                                        <p className="mb-0">@Kachabazar</p>
                                    </div>
                                </Button>

                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={openMyAcc}
                                    onClose={handleCloseMyAccDrop}
                                    onClick={handleCloseMyAccDrop}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem onClick={handleCloseMyAccDrop}>
                                        <ListItemIcon>
                                            <RxDashboard />
                                        </ListItemIcon>
                                        Dashboard
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseMyAccDrop}>
                                        <ListItemIcon>
                                            <GoGear />
                                        </ListItemIcon>
                                        Edit Profile
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseMyAccDrop}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;