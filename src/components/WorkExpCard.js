import React from 'react'
import './style/WorkExpCard.css'
const WorkExpCard = (props) => {
    console.log(props)
    return (
        <div className={props.Align + " card-wrapper"} >
            <div className="exp-card" >
                <h4>{props.exp.title}</h4>
                <h5>{props.exp.employer}</h5>
                <p>{props.exp.description}</p>
                <p>Job duration : <span style={{fontWeight:800}}>{props.exp.duration}</span></p>
            </div>
        </div>
        
    )
}

export default WorkExpCard