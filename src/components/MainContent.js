import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import "./MainContent.css"
import useOnlineStatus from "../utils/useOnlineStatus"

function MainContent(props) {
    const [inputtext, setInputText] = useState(window.location.href);
    const onlineStatus = useOnlineStatus();
    const location = useLocation();
    
   useEffect(()=>{
    setInputText(window.location.href)
   },[location]) 


   return (
        <>
            <div className='online-Status'>
                <p>online Statue:</p> {onlineStatus ? "✅" : "🔴" }
            </div>

            <div class="mobile-wrapper">
                <div class="mobile-device">
                    <div className='search-bar'>
                    <input type='text' value={inputtext} onChange={((e)=>setInputText(e.target.value))} /></div>

                    <Outlet />
                </div>
            </div>
        </>
     
    );
}

export default MainContent;