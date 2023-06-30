import "./MoreInformation.css"
import BtnBase from "./Buttons/BtnBase";

const MoreInformation = () => {
  return(
    <div className={"MoreInformationContainer"}>
      <div className={"MoreInformationContent"}>
        <h1 className={"MoreInformationTitle"}>OBTÉN MÁS INFORMACiÓN</h1>
        <div className={"MoreInformationFormContainer"}>
          {/*Form*/}
          <div className={"MoreInformationForm"}>
            <label>
              <input type={"text"} placeholder={"nombre completo"} className={"MoreInformationInput"}/>
            </label>
            <label>
              <input type={"text"} placeholder={"Correo electrónico"} className={"MoreInformationInput"}/>
            </label>
          </div>

          {/*Form*/}
          <div className={"MoreInformationForm"}>
            <label>
              <input type={"text"} placeholder={"País / Código país"} className={"MoreInformationInput"}/>
            </label>
            <label>
              <input type={"number"} placeholder={"TeLéfono"} className={"MoreInformationInput"}/>
            </label>
          </div>

          {/*Form*/}
          <div className={"MoreInformationForm"}>
            <label>
              <input type={"checkbox"} className={""}/>
              <span className={"MoreInfCheckTerms"}>Acepto las condiciones de uso y protección de datos.</span>
            </label>
            <label>
              <input type={"checkbox"} className={""}/>
              <span className={"MoreInfCheckTerms"}>Me gustaría recibir información sobre nuevos cursos, ofertas y promociones</span>
            </label>
          </div>

          {/*BtnControl*/}
          <div className={"MoreInfBtnControl"}>
            <BtnBase className={"BtnYellow"} children={"enviar"}/>
          </div>
        </div>
      </div>
    </div>
  )
};export default MoreInformation;