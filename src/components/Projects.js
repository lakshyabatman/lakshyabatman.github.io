import React, {Component} from 'react'
import Project from './Project'
import './style/Projects.css'
import {PROJECTS} from './data/projects_data'
class Projects extends Component {
    constructor () {
        super()
        this.state ={
                data: [...PROJECTS]
            }
    }
    
    render() {
        return (
            <div className="ProjectWrapper">
                <h3>My Projects</h3>
                <div className="myGrid">
                    {this.state.data.map(function(project,index){
                        return <Project title={project.title} content={project.content} key={index}/>
                    })}
                </div>
            </div>
        )
    }
}
export default Projects