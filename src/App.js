import React from 'react';
import HomeScreen from './components/HomeScreen'
import Projects from './components/Projects'
import SkillGraph from './components/SkillGraph';
import WorkExp from './components/WorkExp'
function App() {
  return (
    <div>
      <HomeScreen/>
      <WorkExp/>
      <SkillGraph/>
      <Projects/>
    </div>
  );
}

export default App;
