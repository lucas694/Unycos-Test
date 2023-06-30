import "./Footer.css";
import FooterLogo from "../Assets/FooterLogo.png";
import FacebookLogo from "../Assets/Icons/facebook-outline.png";
import InstagramLogo from "../Assets/Icons/instagram.png";
import TwitterLogo from "../Assets/Icons/twitter-outline.png";
import YoutubeLogo from "../Assets/Icons/youtube.png";

const Footer = () => {
  return(
    <div className={"FooterContainer"}>
      <div className={"FooterContent"}>
        <div className={"FooterContentLeft"}>
          <img src={FooterLogo} alt={"FooterLogo"} className={"FooterLogo"}/>
        </div>
        <div className={"FooterContentMain"}>
          <div className={"FooterMainTop"}>
            <a className={"FooterTopLinks"} href={"#"}>
              <img src={FacebookLogo} alt={"FacebookLogo"} className={"FooterTopLogo"}/>
            </a>
            <a className={"FooterTopLinks"} href={"#"}>
              <img src={InstagramLogo} alt={"InstagramLogo"} className={"FooterTopLogo"}/>
            </a>
            <a className={"FooterTopLinks"} href={"#"}>
              <img src={TwitterLogo} alt={"TwitterLogo"} className={"FooterTopLogo"}/>
            </a>
            <a className={"FooterTopLinks"} href={"#"}>
              <img src={YoutubeLogo} alt={"YoutubeLogo"} className={"FooterTopLogo"}/>
            </a>
          </div>
          <hr className={"FooterHr"}/>
          <div className={"FooterMainBottom"}>
            <a className={"FooterBottomLinks"} href={"#"}>Terminos y condiciones</a>
            <a className={"FooterBottomLinks"} href={"#"}>Política de privacidad</a>
            <a className={"FooterBottomLinks"} href={"#"}>Aviso legal</a>
          </div>
        </div>
        <div className={"FooterContentRight"}>
          <p>USD ($) <span>EUR (€)</span></p>
        </div>

      </div>
    </div>
  )
};export default Footer;