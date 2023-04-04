import React from "react";
import "./sidebar.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
function Sidebar(){
return(
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeedIcon htmlColor="#FFA559" className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Feed
                    </span>
                </li>
                <li className="sidebarListItem">
                    <ChatIcon htmlColor="#FFA559" className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Chats
                    </span>
                </li>
                <li className="sidebarListItem">
                    <PlayCircleIcon htmlColor="#FFA559" className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Videos
                    </span>
                </li>
                <li className="sidebarListItem">
                    <GroupIcon htmlColor="#FFA559" className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Groups
                    </span>
                </li>
                <li className="sidebarListItem">
                    <BookmarkIcon htmlColor="#FFA559" className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Bookmarks
                    </span>
                </li>
                <li className="sidebarListItem">
                    <HelpOutlineIcon htmlColor="#FFA559" className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Questions
                    </span>
                </li>
                <li className="sidebarListItem">
                    <WorkIcon htmlColor="#FFA559" className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Jobs
                    </span>
                </li>
                <li className="sidebarListItem">
                    <EventIcon htmlColor="#FFA559" className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Events
                    </span>
                </li>
                <li className="sidebarListItem">
                    <SchoolIcon htmlColor="#FFA559" className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Courses
                    </span>
                </li>
            </ul>
            <button className="sidebarButton">
                Show More
            </button>
            <hr className="sidebarHr"/>
            <ul className="sidebarFriendList">
                {Users.map(u=>(
                    <CloseFriend key={u.id} user={u} />
                ))}
            </ul>
        </div>
        
    </div>
)
}
export default Sidebar;