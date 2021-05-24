import { Avatar } from '@material-ui/core';
import React from 'react'
import './Sidebar.css';
function SideBar() {
    const recentItem = (topic) =>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>);
    
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://neilpatel.com/wp-content/uploads/2017/08/colors.jpg" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>user name !! </h2>
                <h4>description</h4>
            </div>
            
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p> who viewed you</p>
                    <p className="sidebar__statsNumber">35</p>
                </div>
                <div className="sidebar__stat">
                    <p> Views on posts </p>
                    <p className="sidebar__statsNumber">142</p>
                </div>

            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('redux')}
            {recentItem('dev')}
            {recentItem('jobs')}


            </div>
        </div>
    )
}

export default SideBar
