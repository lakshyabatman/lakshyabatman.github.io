import React from 'react'
import './style/HomeScreen.css'
import '../../node_modules/react-typist/dist/Typist.css'
import Me from './images/me.png'
function HomeScreen () {
    return (
        <div className="HomeScreen">
            <div className="wrapper">
                <div>
                    <h1 id="Name">I'm Lakshya </h1>
                    <span id="TagLine">A Software Engineer</span>
                </div>
                <div className="row">
                    <div className="AboutMe">
                        <h1 style={{fontSize:62}}>Hola!</h1>
                        <p>
                            I'm a software engineer. 
                        </p>
                        <p>
                            I'm currently working as Software Engineer at Zomentum. I've worked as student developer in Google Summer Of Code 2019 in JBOSS(Codeuino).
                        </p>
                        <p>
                            I love contributing to open source projects and working on multiple projects. Apart from it, I love documenting my journey so I write blogs and I'm a huge anime fan.
                        </p>
                        <div className="ContactMe">
                            <a href="mailto:lakshya.khera@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope" style={{fontSize:35}}></i></a>
                            <a href="https://medium.com/@lakshya.khera" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium" style={{fontSize:37}}></i></a>
                            <a href="https://github.com/lakshyabatman" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" style={{fontSize:40}}></i></a>
                            <a href="https://www.linkedin.com/in/lakshya-khera-52b67718/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" style={{fontSize:40}}></i></a>
                            <a href="https://twitter.com/lak_shya22" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" style={{fontSize:40}}></i></a>
                            <button style={{backgroundColor:"#FFEA00"}}><a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color:"black"}}>Open CV</a></button>
                        </div>
                    </div>
                    <div className="MyPic"><img alt="My face" className="myProfilePic" src={Me}/></div>
                </div>
                
            </div>
        </div>
    )
}
export default HomeScreen