import React, {useState} from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import headerLogo from './img/irontube_logo.svg';
import { Link } from 'react-router-dom';


function Header() {
    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon/>
                <Link to="/">
                <img
                    className="header_logo"
                    src={headerLogo}
                    alt="youtube-logo"
                />
                </Link> 
            </div>

            <div className="header_input">
                <input
                onChange={(e) => setInputSearch(e.target.value)}
                value={inputSearch}
                placeholder="Search"
                type="text"
                />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header_inputButton" />
                </Link>
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
