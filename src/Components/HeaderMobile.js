import "./HeaderMobile.css";
import HeaderLogo from "../Assets/HeaderLogo.png";
import Menu from "../Assets/Icons/bx-menu.png";
import BtnIcon from "../Assets/Icons/BtnIcon.png";
import Bell from "../Assets/Icons/bell-outline.svg";
import DropmenuLogo from "../Assets/DropmenuLogo.png";
import wppicon from "../Assets/Icons/bxl-whatsapp.png";
import {useState} from "react";

const HeaderMobile = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  }
  return(
    <div className={"HeaderMobileContainer"}>
      <img src={Menu} alt={""} className={""}/>
      <img src={HeaderLogo} alt={"HeaderLogo"} className={"HeaderLogo"}/>
      <button className={"HeaderMobileBtn"} onClick={handleShowMenu}>
        <img src={BtnIcon} alt={""} className={"HeaderMobileBtnIcon"}/>
      </button>
      <div className={showMenu ? "HeaderMobileDropdownMenu" : "hidden"}>
        <img src={DropmenuLogo} alt={""} className={"HeaderMobileDropmenuLogo"}/>
        <section>
          <h1 className={"HeaderDropdownName"}><span>Hola,</span> Daniela</h1>
          <img src={Bell}/>
        </section>
        <hr className={"HeaderDropdownHr"}/>
        <ul className={"HeaderMobileUl"}>
          <li>
            <a href={"#"}>Panel de Control</a>
          </li>
          <li>
            <a href={"#"}>MIS cursos</a>
          </li>
          <li>
            <a href={"#"}>Perfil</a>
          </li>
          <li>
            <a href={"#"}>Todos los cursos</a>
          </li>
        </ul>
        <div className={"HeaderMobileContact"}>
          <h1>Contáctanos por whatsapp</h1>
          <span>
            <img src={wppicon} alt={""} className={"wppIcon"}/>
            +34 653 46 73 60
          </span>
          <button className={"HeaderDropdownLogout"} onClick={handleShowMenu}>Cerrar sesión</button>
        </div>
      </div>
    </div>
  )
};export default HeaderMobile;