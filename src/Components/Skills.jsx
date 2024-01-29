import React from 'react'
import './Style/skills.css'
import BarChart from './SkillChart'
const Skills = () => {
    const chartData = {
        labels: ['React', 'JavaScript', 'Java', 'C/C++', 'HTML/CSS'],
        values: [70, 85, 50, 40, 90],
      };
  return (
    <>
   <section className="skill-container" id="skill">
    <div className="skill-item-container">
        <h2>Proficient in skills</h2>
        <li>React JS</li>
        <li>JavaScript</li>
        <li>Java</li>
        <li>C/C++</li>
        <li>HTML/CSS</li>
        <li>Express JS</li>
    </div>
    <BarChart data={chartData}/>
   </section>
    </>
  )
}

export default Skills
