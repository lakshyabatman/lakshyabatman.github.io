import React from 'react'
import './style/HomeScreen.css'
import Me from './images/me.png'
function HomeScreen () {
    return (
        <div className="HomeScreen">
            <div className="wrapper">
                <div>
                    <h1 id="Name">I'm Lakshya </h1>
                    <h2 id="TagLine">a Full Stack Developer and UI/UX Designer</h2>
                </div>
                <div className="row">
                    <div className="AboutMe">
                        <h1 style={{fontSize:62}}>Hola!</h1>
                        <p>
                            I am a Full Stack Developer and Ui/Ux Designer, I am currently a senior year Computer Science student at Jaypee Institute Of Information Technology.
                        </p>
                        <p>
                            I love open-source and contributed in many projects, and worked as student developer in Google Summer Of Code under JBOSS Community.
                        </p>
                        <p>
                           Also I am Tech Lead of Developer Student Club JIIT 128, where I manage team of 20 people and teach other students programming.
                        </p>
                        <div className="ContactMe">
                            <a href="mailto:lakshya.khera@gmail.com"><i className="fa fa-envelope" style={{fontSize:35}}></i></a>
                            <a href="https://lakshyakhera.wordpress.com/"><i className="fa fa-wordpress" style={{fontSize:37}}></i></a>
                            <a href="https://github.com/lakshyabatman"><i className="fa fa-github" style={{fontSize:40}}></i></a>
                            <a href="https://www.linkedin.com/in/lakshya-khera-52b67718/"><i className="fa fa-linkedin" style={{fontSize:40}}></i></a>
                            <button style={{backgroundColor:"#FFEA00"}}><a href="https://docs.google.com/document/d/1j_EQXQy7UizqMIsNqQD6NL6xl-LoJPCrhq1yag6uEqo/edit?usp=sharing" style={{textDecoration:"none",color:"black"}}>Open CV</a></button>
                        </div>
                    </div>
                    <div className="MyPic"><img alt="My face" style={{height:440}} src={Me}/></div>
                </div>
                
            </div>
        </div>
    )
}
export default HomeScreen