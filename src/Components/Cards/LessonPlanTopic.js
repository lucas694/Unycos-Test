import "./LessonPlanTopic.css";
import arrowIcon from "../../Assets/ArrowIcon.png";
import {useState} from "react";

const LessonPlanTopic = ({topic}) => {
  const [showDesc, setShowDesc] = useState(false);
  const toggleDesc = () => {
    setShowDesc(!showDesc);
  }
  const {id,title, desc} = topic;

  return(
    <div className={"LessonPlanTopic"}>
      <span>{id < 10 ? `0${id}` : id}</span>
      <div className={"LessonPlanTopicMain"}>
        <h1 className={"LessonPlanTopicTitle"}>{title}</h1>
        {/*Mobile P*/}
        <p className={showDesc ? "LessonPlanTopicDescMobile" : "hidden"}>{desc}</p>

        {/*Desktop P*/}
        <p className={"LessonPlanTopicDescDesktop"}>{desc}</p>
        <hr className={"LessonPlanHr"}/>
      </div>
      <button onClick={toggleDesc} className={"TopicMobileBtn"}>
        <img src={arrowIcon} alt={"Arrow Icon"} className={showDesc ? "ArrowIconRotate" : "ArrowIcon"}/>
      </button>
    </div>
  )
};export default LessonPlanTopic;