import { Button } from "@material-ui/core";
import {  BookmarkBorder, Home, ListAlt, MailOutline,  MoreHorizRounded, Notifications, PersonOutline, Search, Twitter } from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Twitter className="sidebar__twitter" />

      <SidebarOption active Icon={Home} text="Home" />
      <SidebarOption Icon={Search} text="Explore" />
      <SidebarOption Icon={Notifications} text="Notification" />
      <SidebarOption Icon={MailOutline} text="Messages" />
      <SidebarOption Icon={BookmarkBorder} text="Bookmarks" />
      <SidebarOption Icon={ListAlt} text="List" />
      <SidebarOption Icon={PersonOutline} text="Profile" />
      <SidebarOption Icon={MoreHorizRounded} text="More" />
 
    <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
    </div>
  );
};

export default Sidebar;
