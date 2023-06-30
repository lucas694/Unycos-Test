import "./TestimonialCard.css";
import CheckIcon from "../../Assets/Cards/Testimonial/CheckIcon.png"

const TestimonialCard = ({testimonial}) => {
  const {id, name, description, job,photo} = testimonial;
  return(
    <div className={"TestimonialCardContainer"}>
      <div className={"TestimonialCardContent"}>
        <img src={photo} alt={"TestimonialCardImg"} className={"TestimonialCardImg"}/>
        <div className={"TestimonialCardText"}>
          <h1 className={"TestimonialCardTitle"}>{name}</h1>
          <p className={"TestimonialCardDesc"}>{description}</p>
          <section>
            <img src={CheckIcon} alt={"CheckIcon"} className={"TestimonialCardCheckIcon"}/>
            <p className={"TestimonialCardCheckText"}>{job}</p>
          </section>
        </div>
      </div>
      <hr className={"TestimonialCardLine"}/>
    </div>
  )
};export default TestimonialCard;