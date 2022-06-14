import React from 'react';
import HomeScreen from './components/HomeScreen'
import Projects from './components/Projects'
import WorkExp from './components/WorkExp'
import SkillCardRow from './components/SkillCardRow';
import Gallery from './components/Gallery';
function App() {
  return (
    <div>
      <HomeScreen/>
      <WorkExp/>
      <SkillCardRow/>
      <Projects/>
      <Gallery/>
    </div>
  );
}

export default App;
