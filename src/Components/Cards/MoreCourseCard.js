import "./MoreCourseCard.css"

const MoreCourseCard = ({ course }) => {
  const { name, job, img } = course;
  return(
    <div className={"MoreCourseCardContainer"}>
      <img src={img} alt={"More Course Card"} className={"MoreCourseCardImg"}/>
      <div className={"MoreCourseText"}>
        <h1 className={"MoreCourseCardTitle"}>{name}</h1>
        <p className={"MoreCourseCardJob"}><span>enseña</span> {job}</p>
      </div>
    </div>
  )
};export default MoreCourseCard;