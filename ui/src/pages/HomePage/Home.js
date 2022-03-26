import React from 'react';
import "./Home.css";
/*
export default function Home() {
    return (
       <div className="HomePage">
           <div className="ToprightLogo">
               <div id="wrapper">
                   PlaceHolderName.com
               </div>
               <div id ="search">
                   <form><input type = "search" placeholder="Search..." /></form>
               </div>
           </div>
       </div>
    )
}
*/
export default function Home() {
    return (
        <div className="HomePage">
            <div className="Topbar">
                <div id="wrapper">
                    PlaceHolder.com
                    <div className="search_bar">
                    <form><input type = "search" placeholder="Search..." size={50}/></form>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}