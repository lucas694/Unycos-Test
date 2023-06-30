import "./Articles.css";
import BtnBase from "./Buttons/BtnBase";

const Articles = () => {
  return(
    <div className={"ArticlesContainer"}>
      <h1 className={"ArticlesMainTitle"}>ARTÍCULOS RELACIONADOS</h1>
      <div className={"ArticlesContent"}>
        <div className={"ArticlesControl"}>
          <section>
            <h1 className={"ArticlesTitle"}>Consejos para nadadores principiantes</h1>
            <p className={"ArticlesDate"}>22.06.2019</p>
          </section>
          <section>
            <h1 className={"ArticlesTitle"}>Recomendaciones para lograr que un niño venza el miedo al agua</h1>
            <p className={"ArticlesDate"}>22.06.2019</p>
          </section>
        </div>

        <div className={"ArticlesControl"}>
          <section>
            <h1 className={"ArticlesTitle"}>¿Nadar es un buen método para adelgazar?</h1>
            <p className={"ArticlesDate"}>22.06.2019</p>
          </section>
          <section>
            <h1 className={"ArticlesTitle"}>Consejos para mejorar la técnica del estilo crol</h1>
            <p className={"ArticlesDate"}>22.06.2019</p>
          </section>
        </div>

      </div>
      <div className={"ArticlesBtnControl"}>
        <BtnBase className={"BtnTransparent-WhiteBorder"}
                 children={"leer más en nuestro blog"}
        />
      </div>
    </div>
  )
};export default Articles;
