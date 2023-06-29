import "./ExclusiveContent.css";
import BookIcon from "../Assets/ExclusiveContent/BookIcon.png"
import VideoIcon from "../Assets/ExclusiveContent/360Icon.png"
import TestIcon from "../Assets/ExclusiveContent/TestIcon.png"
import TaskIcon from "../Assets/ExclusiveContent/TaskIcon.png"
import BtnBase from "./Buttons/BtnBase";

const ExclusiveContent = () => {
  return(
    <div className={"ExclusiveC-Container"}>
      <div className={"ExclusiveC-Content"}>
        <h1 className={"ExclusiveC-Title"}>CONTENIDO EXCLUSIVO</h1>
        <div className={"ExclusiveC-Main"}>
          <div className={"ExclusiveC-Card"}>
            <img src={BookIcon} alt={"BookIcon"} className={"ExclusiveC-CardIcon"}/>
            <h1 className={"ExclusiveC-CardTitle"}>e-books</h1>
          </div>
          <div className={"ExclusiveC-Card"}>
            <img src={VideoIcon} alt={"VideoIcon"} className={"ExclusiveC-CardIcon"}/>
            <h1 className={"ExclusiveC-CardTitle"}>360º videos</h1>
          </div>
          <div className={"ExclusiveC-Card"}>
            <img src={TestIcon} alt={"TestIcon"} className={"ExclusiveC-CardIcon"}/>
            <h1 className={"ExclusiveC-CardTitle"}>tests</h1>
          </div>
          <div className={"ExclusiveC-Card"}>
            <img src={TaskIcon} alt={"TaskIcon"} className={"ExclusiveC-CardIcon"}/>
            <h1 className={"ExclusiveC-CardTitle"}>tareas</h1>
          </div>
        </div>
        <div className={"BtnControlExclusiveC"}>
          <BtnBase className={"BtnYellow"} children={"Mas información"}/>
        </div>
      </div>
    </div>
  )
};export default ExclusiveContent;