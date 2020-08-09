import React, {useState ,useEffect} from 'react'
import Typist from "react-typist";

const ReactTypist = () => {
  const [toggleFlag, setToggleFlag] = useState(1);
  useEffect(() => {
    setToggleFlag(1);
  }, [toggleFlag]);

  return(
    <div>

      {
      toggleFlag ? (
        <Typist  cursor={{show:false}} onTypingDone={() => setToggleFlag(0)}>
        <span id="TagLine">A Full Stack Developer</span>
        <Typist.Delay ms={2000}/>
        <Typist.Backspace count={20} delay={200}/>
        <span id="TagLine">Software Engineer</span>   
        <Typist.Backspace count={20} delay={200}/>                 
        </Typist>
      ) : (
        " "
      )}  
    </div>
  )
}

export default ReactTypist;