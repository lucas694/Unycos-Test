import "./LessonPlan.css";
import BtnBase from "./Buttons/BtnBase";
import {GetLessonPlanTopics} from "../Utils/Utils";
import LessonPlanTopic from "./Cards/LessonPlanTopic";
import {useState} from "react";

const LessonPlan = () => {
  const LessonPlanTopics = GetLessonPlanTopics();
  const [showAllTopics, setShowAllTopics] = useState(false);
  const handleShowAllTopics = () => {
    setShowAllTopics(!showAllTopics);
  };

  const getTopics = () => {
    const amount = showAllTopics ? LessonPlanTopics.length : 3
    return LessonPlanTopics.slice(0, amount)
  }

  return(
    <div className={"LessonPlanContainer"}>
      <div className={"LessonPlanContent"}>
        {getTopics().map((topic) => {
          return(
            <LessonPlanTopic
              key={topic.id}
              topic={topic}
            />
          )})
        }
        <div className={"LessonPlanBtnControl"}>
          <BtnBase className={"BtnTransparent-WhiteBorder md:hidden"}
                   onClick={handleShowAllTopics}
                   children={showAllTopics ? "Ver Menos" : "Ver Todos"}
          />
          <BtnBase className={"BtnTransparent-BlackBorder hidden md:block"}
                   onClick={handleShowAllTopics}
                   children={showAllTopics ? "Ver Menos" : "Ver Todos"}
          />
        </div>
      </div>
    </div>
  )
};export default LessonPlan;