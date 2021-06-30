import React from 'react';
import HomeScreen from './components/HomeScreen'
import Projects from './components/Projects'
import SkillGraph from './components/SkillGraph';
import WorkExp from './components/WorkExp'
import SkillCardRow from './components/SkillCardRow';
function App() {
  return (
    <div>
      <HomeScreen/>
      <WorkExp/>
      <SkillCardRow/>
      <Projects/>
    </div>
  );
}

export default App;
