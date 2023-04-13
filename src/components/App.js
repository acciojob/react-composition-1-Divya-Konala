
import React, { useState } from "react";
import './../styles/App.css';
import Tab from "./Tab";
const tabs=["Tab 1","Tab 2","Tab 3"];
const App = () => {
  const [currTab,setCurrTab]=useState();
  return (
    <div>
        {/* Do not remove the main div */}
        <ul>
          {
            tabs.map((tab)=>{
              return <li onClick={()=>setCurrTab(tab)}>{tab}</li>
            })
          }
        </ul>
        {
          (currTab!==undefined && <Tab tab={currTab} />)
        }
    </div>
  )
}

export default App
