import React from 'react'

const Tab=({tab,state})=>{
    return <p className={state}>
        This is the content for {tab}.
    </p>
}

export default Tab
