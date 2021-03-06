import React from 'react'
import './feed.css';

import InputOption from './InputOption';

import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form >
                        <input type="text" placeholder="Start a post"/>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption  Icon ={ImageIcon} title="photo" color="#70B5F9" />
                    <InputOption  Icon ={SubscriptionsIcon} title="video" color="#7FC15E" />
                    <InputOption  Icon ={EventNoteIcon} title="Event" color="#E7A33E" />
                    <InputOption  Icon ={CalendarViewDayIcon} title="Write article " color="#F5987E" />

                </div>
            </div>
        </div>
    )
}

export default Feed
