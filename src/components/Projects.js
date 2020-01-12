import React, {Component} from 'react'
import Project from './Project'
import './style/Projects.css'
class Projects extends Component {
    constructor () {
        super()
        this.state ={
            data : [
                {
                    title:"UI/UX modules for DONUT (GSoC 2019)",
                    content:"Developed Entire UI for the social media and added new functionalites in it. Tech Stack: NodeJS and VueJS"
                },
                {
                    title:"Converge 2019 and 2020 Website",
                    content:"Developed College Fest website for two consecutive years,one under the mentorships of seniors and in second I've mentored juniors. Tech Stack: NodeJS, HTML,CSS and Bootstrap."
                },
                {
                    title:"Github User and Readme Finder",
                    content:"A VueJS application, which let's user to search github profiles and renders their projects's Readme on browser. Tech Stack: VueJS"
                },
                {
                    title:"Connect Place",
                    content:"Currently building College Training and Placement Forum where students can post their interview experience and queries. Tech Stack : NodeJs and ReactJS."
                },
                {
                    title:"Automated Birthday Wisher",
                    content:"Developed a Python Script which lets user to login via their google account and this script sends birthday wishes to their google contact using calendar API. Tech Stack: Python"
                },
                {
                    title:"Chat Room ",
                    content:"Developed a basic chat room, where a user can join and message in real time usinh Sockets. Tech Stack: NodeJS, bootstrap and Socket.io"
                },
                
            ]
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