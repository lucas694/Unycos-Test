import "./MoreInformation.css"

const MoreInformation = () => {
  return(
    <div className={"MoreInformationContainer"}>
      <div className={"MoreInformationContent"}>
        <h1 className={"MoreInformationTitle"}>OBTÉN MÁS INFORMACiÓN</h1>
        <div className={"MoreInformationFormContainer"}>
          <div className={"MoreInformationForm"}>
            <label>
              <input type={"text"} placeholder={"nombre completo"} className={"MoreInformationInput"}/>
            </label>
            <label>
              <input type={"text"} placeholder={"Correo electrónico"} className={"MoreInformationInput"}/>
            </label>
          </div>
          <div className={"MoreInformationForm"}>
            <label>
              <input type={"text"} placeholder={"País / Código país"} className={"MoreInformationInput"}/>
            </label>
            <label>
              <input type={"number"} placeholder={"TeLéfono"} className={"MoreInformationInput"}/>
            </label>
          </div>
          <div className={"MoreInformationForm"}>
            <label>
              <input type={"checkbox"} className={"MoreInformationCheckbox"}/>
              <span>Acepto las condiciones de uso y protección de datos.</span>
            </label>
            <label>
              <input type={"checkbox"} className={"MoreInformationCheckbox"}/>
            </label>
          </div>

        </div>

      </div>
    </div>
  )
};export default MoreInformation;