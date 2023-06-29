import "./Hero.css";
import HeroDeskImg from "../Assets/Hero/HeroDeskImg.png"
import HeroMobileImg from "../Assets/Hero/HeroMobileImg.png"
import BookIcon from "../Assets/Hero/BookIcon.png"
import FilmIcon from "../Assets/Hero/FilmIcon.png"
import BtnBase from "./Buttons/BtnBase";

const Hero = () => {
  return(
    <div className={"HeroContainer"}>
      <div className={"HeroContent"}>
        <div className={"HeroUp "}>
          <img src={HeroDeskImg} alt={"HeroDeskImg"} className={"HeroDeskImg"}/>
          <img src={HeroMobileImg} alt={"HeroDekImg"} className={"HeroMobileImg"}/>
          <div className={"HeroInfos"}>
            <h1 className={"HeroName"}>mireia belmonte</h1>
            <h1 className={"HeroJob"}>enseña <span>natación</span></h1>
          </div>
        </div>
        <div className={"HeroDown"}>
          <div className={"CardHero"}>
            <img src={BookIcon} alt={"BookIcon"} className={"CardHeroIcons"}/>
            <h1 className={"CardHeroText"}>12 modulos</h1>
          </div>
          <div className={"CardHero"}>
            <img src={FilmIcon} alt={"BookIcon"} className={"CardHeroIcons"}/>
            <h1 className={"CardHeroText"}>+3,5 horas</h1>
          </div>
          <div className={"BtnControlHeroDown"}>
            <BtnBase className={"BtnYellow"} children={"Mas información"}/>
          </div>
        </div>
      </div>
    </div>
  )
};export default Hero;