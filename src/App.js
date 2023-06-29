import './App.css';
import Hero from './Components/Hero';
import ExclusiveContent from "./Components/ExclusiveContent";
import LessonPlan from "./Components/LessonPlan";
import MoreCourse from "./Components/MoreCourse";
import MoreInformation from "./Components/MoreInformation";

function App() {
  return (
    <div className="App">
      <Hero/>

      <ExclusiveContent/>
      <LessonPlan/>
      <MoreCourse/>
      <MoreInformation/>
    </div>
  );
}

export default App;
