import "./Header.css";
import HeaderLogo from "../Assets/HeaderLogo.png";
import bxmenu from "../Assets/Icons/bx-menu.png";


const Header = () => {
  return(
    <div className={"HeaderContainer"}>
      <div className={"HeaderContent"}>
        <img src={bxmenu} alt={""} className={"bx-menu"}/>
        <img src={HeaderLogo} alt={"HeaderLogo"} className={"HeaderLogo"}/>
        <ul className={"UlHeader"}>
          <li className={"LiHeader"}>Cursos</li>
          <li className={"LiHeader"}>
            hola, <span>glaydston</span>
            <ul className={"HeaderDropdownMenu"}>
              <li>Panel de Control</li>
              <li>Tus cursos</li>
              <li>Perfil</li>
              <li>Cuenta</li>
              <li>Cerrar sesión</li>
            </ul>
          </li>
        </ul>

      </div>
    </div>
  )
};export default Header;