import "./BtnBase.css";

const BtnBase = (props) => {
  const {onClick, className} = props;
  return(
    <button className={`BtnBase ${className}`} onClick={onClick}>
      {props.children}
    </button>
  )
};export default BtnBase;