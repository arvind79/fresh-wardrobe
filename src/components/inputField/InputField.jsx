import "./style.css";

const InputField = (props) => {
  console.log("inputField props", props);
  console.log("input touched: ", props.isTouched)

  return (
    <div className="input-container">
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {
        props.errors && props.isTouched ? (
          <p className="form-error">{props.errors}</p>
        ) : ""
      }
    </div>
  );
};

export default InputField;
