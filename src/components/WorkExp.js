import React from 'react'
import './style/WorkExp.css'
import {workExp} from './data/workexp'
import WorkExpCard from './WorkExpCard'
const WorkExp = (props) => {
    let expList =[]
    let createList = () => {
        for(var i =0;i<workExp.length;i++) {
            // let Class="left"
            // if((i+1)%2 ===0) {
            //     Class= "right"
            // }
            expList.push(<WorkExpCard test="test" Align={"left"} key={i} exp={workExp[i]} />)
        }
        return expList
    }
    return (
        <div className="workExp-wrapper">
            <h1>
                Work Experience
            </h1>
            <div className="wrap">
                {createList()}
            </div>
            {/* <div className="divider"></div> */}
        </div>
    )
}

export default WorkExp;