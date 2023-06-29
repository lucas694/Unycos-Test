import "./MoreCourse.css";
import MoreCourseCard from "./Cards/MoreCourseCard";
import {GetMoreCourseCards} from "../Utils/Utils";

const MoreCourse = () => {
  const MoreCourseCards = GetMoreCourseCards();

  return(
    <div className={"MoreCourseContainer"}>
      <div className={"MoreCourseContent"}>
        <h1 className={"MoreCourseTitle"}>MÁS CURSOS</h1>
        <div className={"MoreCourseCardsContainer"}>
          {MoreCourseCards.map((course) => {
            return(
              <MoreCourseCard course={course}
                              key={course.id}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
};export default MoreCourse;