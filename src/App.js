import './App.css';
import Hero from './Components/Hero';
import ExclusiveContent from "./Components/ExclusiveContent";
import LessonPlan from "./Components/LessonPlan";
import MoreCourse from "./Components/MoreCourse";
import MoreInformation from "./Components/MoreInformation";
import Testimonial from "./Components/Testimonial";
import Articles from "./Components/Articles";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeaderMobile from "./Components/HeaderMobile";

function App() {
  return (
    <div className="App">
      <Header/>
      <HeaderMobile/>
      <Hero/>

      <ExclusiveContent/>
      <LessonPlan/>
      <MoreCourse/>
      <MoreInformation/>
      <Testimonial/>
      <Articles/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
