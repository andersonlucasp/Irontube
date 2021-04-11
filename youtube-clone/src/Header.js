import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import headerLogo from './img/irontube_logo.svg';


function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon/>
                <img
                    className="header_logo"
                    src={headerLogo}
                    alt="youtube-logo"
                />
            </div>

            <div className="header_input">
                <input type="text" placeholder="Search"/>
                <SearchIcon className="header_inputButton"/>
            </div>
            
            <div className="header_icons">
                <VideoCallIcon className="header_icon"/>
                <AppsIcon className="header_icon"/>
                <NotificationIcon className="header_icon"/>
                <Avatar
                    src ="https://yt3.ggpht.com/yti/ANoDKi47dbMQFOQzzZF1KBORk8m-U6fKNIBO1TfPnTqx=s88-c-k-c0x00ffffff-no-rj-mo"
                    alt="Lucas Image"
                />
            </div>     
        </div>
    )
}

export default Header
