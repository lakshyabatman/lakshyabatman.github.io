import React from 'react'
import './style/Project.css'
function Project (props) {
    return (
        <div className="Project">
            <p className="title">{props.title}</p>
            <p>{props.content}</p>
        </div>
    )
}
export default Project