import { useState } from 'react';
import '../App.css'
import MessegeBox from './MessegeBox';

const ChatBox=()=>
{
    return (
        <div className="ChatBox">
            <div className="chatList">

            </div>
            <MessegeBox/>
        </div>
    )
}
export default ChatBox;