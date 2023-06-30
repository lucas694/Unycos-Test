import "./Blog.css";
import BtnBase from "./Buttons/BtnBase";

const Blog = () => {
  return(
    <div className={"BlogContainer"}>
      <div className={"BlogContent"}>
        <h1 className={"BlogTitle"}>APRENDE CON LOS MEJORES</h1>
        <h1 className={"BlogSubTitle"}>Detrás de cada éxito, hay una história. conoce en nuestro blog.</h1>
        <BtnBase className={"BtnTransparent-WhiteBorder"}
                 children={"leer más en nuestro blog"}
        />
      </div>
    </div>
  )
};export default Blog;