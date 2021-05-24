import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOption from './HeaderOption';

function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <img
                 src="https://img-premium.flaticon.com/png/512/174/174857.png?token=exp=1621811566~hmac=fd99039bd28bcaa267df64ebb6d2e643"
                  />
            </div>
            
            <div className='header__search'>
                <SearchIcon/>
                <input type='text' />
            </div>

            <div className='header__right'>
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notification"/>
                <HeaderOption avatar="https://cdn.iconscout.com/icon/free/png-512/avatar-367-456319.png" title="Me"/>

            </div>
        </div>
    )
}

export default Header
