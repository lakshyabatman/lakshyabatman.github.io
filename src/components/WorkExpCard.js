import React, {useEffect} from 'react'
import './style/WorkExpCard.css'
import { motion,useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const WorkExpCard = (props) => {
    const controls = useAnimation();
    const { ref, inView } = useInView();
    useEffect(() => {
        if (inView) {
          controls.start('visible');
        }
        if (!inView) {
          controls.start('hidden');
        }
      }, [controls, inView]);

    const boxVariants = {
        hidden: { opacity:0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.5
          }
        }
      }
    return (
        <motion.div ref={ref} className={props.Align + " card-wrapper"} initial="hidden" animate={controls} variants={boxVariants}>
            <div className="exp-card" >
                <h4>{props.exp.title}</h4>
                <h5>{props.exp.employer}</h5>
                <p>{props.exp.description}</p>
                <p>Job duration : <span style={{fontWeight:800}}>{props.exp.duration}</span></p>
            </div>
        </motion.div>
        
    )
}

export default WorkExpCard