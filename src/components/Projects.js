import React, {Component} from 'react'
import Project from './Project'
import './style/Projects.css'
class Projects extends Component {
    constructor () {
        super()
        this.state ={
            data : [
                {
                    title:'React Redux CLI',
                    content:'A light weight CLI which installs React application and setup Redux on single prompt.'
                },
                {
                    title:'Ticket booking service',
                    content:'A simple NodeJS API with features like book tickets,add movies, get schedules,automated ticket expiration, the application architecture follows repository design pattern.'
                },
                {
                    title:'P2P video chat platform',
                    content:'Simple Peer 2 peer video chat platform using webrtc and signalhub. The application is bundled using webpack and served on NodeJS server.'
                },
                {
                    title:"Converge 2019 and 2020 Website",
                    content:"Developed College Fest website for two consecutive years,one under the mentorships of seniors and in second I've mentored juniors. Tech Stack: NodeJS, HTML,CSS and Bootstrap."
                },
                {
                    title:"Automated Birthday Wisher",
                    content:"Developed a Python Script which lets user to login via their google account and this script sends birthday wishes to their google contact using calendar API. Tech Stack: Python"
                }, 
                {
                    title:"Chat room",
                    content:"Simple realtime chat room using Socket.io and Express, user can join conversation using nicknames."
                }
                
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