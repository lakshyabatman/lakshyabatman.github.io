import React from 'react'
import Typist from 'react-typist'
import './style/HomeScreen.css'
import '../../node_modules/react-typist/dist/Typist.css'
import Me from './images/me.png'
function HomeScreen () {
    return (
        <div className="HomeScreen">
            <div className="wrapper">
                <div>
                    <h1 id="Name">I'm Lakshya </h1>
                    <Typist  cursor={{show:false}}>
                        <span id="TagLine">A </span>
                        <span id="TagLine">Full Stack Developer</span>
                        <Typist.Delay ms={2000}/>
                        <Typist.Backspace count={20} delay={200}/>
                        <span id="TagLine">UI/UX Designer</span>
                        <Typist.Delay ms={2000}/>
                        <Typist.Backspace count={14} delay={200}/>
                        <span id="TagLine">Mobile App Developer</span>
                    </Typist>
                </div>
                <div className="row">
                    <div className="AboutMe">
                        <h1 style={{fontSize:62}}>Hola!</h1>
                        <p>
                            I am a Full Stack Developer and UI/UX Designer, I am persuing computer science engineering at Jaypee Institute Of Information Technology.
                        </p>
                        <p>
                            I love open-source and contributed in many projects, and worked as student developer in Google Summer Of Code under JBOSS Community.
                        </p>
                        <p>
                           Also, I am python ethnusiast and loves to automate boring jobs using python.
                        </p>
                        <div className="ContactMe">
                            <a href="mailto:lakshya.khera@gmail.com"><i className="fa fa-envelope" style={{fontSize:35}}></i></a>
                            <a href="https://lakshyakhera.wordpress.com/"><i className="fa fa-wordpress" style={{fontSize:37}}></i></a>
                            <a href="https://github.com/lakshyabatman"><i className="fa fa-github" style={{fontSize:40}}></i></a>
                            <a href="https://www.linkedin.com/in/lakshya-khera-52b67718/"><i className="fa fa-linkedin" style={{fontSize:40}}></i></a>
                            <button style={{backgroundColor:"#FFEA00"}}><a href="https://docs.google.com/document/d/1j_EQXQy7UizqMIsNqQD6NL6xl-LoJPCrhq1yag6uEqo/edit?usp=sharing" style={{textDecoration:"none",color:"black"}}>Open CV</a></button>
                        </div>
                    </div>
                    <div className="MyPic"><img alt="My face" className="myProfilePic" src={Me}/></div>
                </div>
                
            </div>
        </div>
    )
}
export default HomeScreen