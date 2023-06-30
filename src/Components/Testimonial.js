import "./Testimonial.css";
import TestimonialCard from "./Cards/TestimonialCard";
import {getTestimonialData} from "../Utils/Utils";
import {useState} from "react";
import BtnBase from "./Buttons/BtnBase";

const Testimonial = () => {
  const [showAllTestimonialData, setShowAllTestimonialData] = useState( );
  const handleShowAll = () => {
    setShowAllTestimonialData(!showAllTestimonialData)
  }
  const testimonialData = getTestimonialData();
  const getTestimonial = () => {
    const amount = showAllTestimonialData ? testimonialData.length : 2;
    return testimonialData.slice(0, amount)
  }
  return(
    <div className={"TestimonialContainer"}>
      <h1 className={"TestimonialTitle"}>Comentarios de los estudiantes</h1>
      <div className={"TestimonialContent"}>
        {getTestimonial().map((testimonial) => {
          return(
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          )})
        }
      </div>
      <div className={"TestimonialBtnControl"}>
        <BtnBase className={"BtnTransparent-WhiteBorder"}
                 onClick={handleShowAll}
                 children={showAllTestimonialData ? "Ver Menos" : "Ver Todos"}
        />
      </div>
    </div>
  )
};export default Testimonial;