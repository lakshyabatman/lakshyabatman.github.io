import React from 'react';
import HomeScreen from './components/HomeScreen'
import Projects from './components/Projects'
import SkillGraph from './components/SkillGraph';
function App() {
  return (
    <div>
      <HomeScreen/>
      <SkillGraph/>
      <Projects/>
    </div>
  );
}

export default App;
