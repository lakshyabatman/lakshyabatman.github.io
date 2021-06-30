import React from 'react'
import { Skills } from '../data/skills'
import SkillCard from '../SkillCard'
import '../style/SkillCardRow.css'
const SkillCardRow = () => {
    
    let getSkillsCardRow = () => {
        return Skills.map((skill,idx) => <SkillCard title={skill.title} initial={-1000+ (idx*50)} image={skill.image} colour={skill.colour}/>)
    }

    return (
        <div className="skills">
            <h1 className='head'>My Skills</h1>
            <div className="skill-card-row">
                {getSkillsCardRow()}
            </div>
        </div>
    )
}

export default SkillCardRow