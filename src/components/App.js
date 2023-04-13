
import React, { useState } from "react";
import './../styles/App.css';
import Tab from "./Tab";
const tabs=["Tab 1","Tab 2","Tab 3"];
const App = () => {
  const [currTab,setCurrTab]=useState();
  return (
    <div className="App">
        {/* Do not remove the main div */}
        <ul>
          {
            tabs.map((tab,index)=>{
              return <li key={index} onClick={()=>setCurrTab(tab)}>{tab}</li>
            })
          }
        </ul>
        <div className="tabs">
        {
          tabs.map((tab,index)=>{
            return <Tab key={index} state={(currTab==tab)?"active":"inactive"} tab={tab}/>
          })
        }
        </div>
    </div>
  )
}

export default App
