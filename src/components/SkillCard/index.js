import React, { useEffect } from 'react'
import '../style/SkillCard.css'
import { motion, useAnimation } from 'framer-motion';

const SkillCard = (props) => {
    const controls = useAnimation();
    const boxVariants = {
        right: { translateX: props.initial + 1000 },
        left: { translateX: props.initial-100 }
      }

    const changeAnimation = () => {
          
      }
    useEffect(() => {
          controls.start('right')
      },[])
    return (
        <motion.div className="SkillCard" style={{translateX: props.initial,backgroundColor: props.colour, boxShadow:`0px 20px 5px ${props.colour}`}} animate={controls} variants={boxVariants} transition={{ duration:10,ease: "linear" }} onAnimationComplete={(d) => {
            if(d) {
                if(d == 'right') {
                    controls.start('left')
                }else {
                    controls.start('right')
                }
            }
        }}>
            <h1>{props.title}</h1>
            <img src={require(`../images/${props.image}`)}/>
        </motion.div>
    )
}

export default SkillCard