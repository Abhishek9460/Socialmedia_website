import React from "react";
import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Topbar(){
    return(
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">社会的HUNT </span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
            <SearchIcon className="searchIcon"/>
            <input placeholder="Search for friends, post or videos" className="searchInput"></input>
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>    
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <PersonIcon />
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <ChatIcon />
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                    <NotificationsIcon />
                    <span className="topbarIconBadge">1</span>
                </div>    
            </div>
            <img src="https://th.bing.com/th/id/OIP.THPBARfvXFVqPpwDbrRl1wHaGx?w=185&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="topbarImg" />
        </div>
    </div>
    )
}
export default Topbar;