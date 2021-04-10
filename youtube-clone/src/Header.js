import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';


function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon/>
                <img
                    className="header_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
                    alt="youtube-logo"
                />
            </div>

            <div className="header_input">
                <input type="text"/>
                <button><SearchIcon/></button>
            </div>
            
            
            <VideoCallIcon/>
            <AppsIcon/>
            <NotificationIcon/>
            <Avatar
                src ="https://yt3.ggpht.com/yti/ANoDKi47dbMQFOQzzZF1KBORk8m-U6fKNIBO1TfPnTqx=s88-c-k-c0x00ffffff-no-rj-mo"
                alt="Lucas Image"
            />
        </div>
    )
}

export default Header
