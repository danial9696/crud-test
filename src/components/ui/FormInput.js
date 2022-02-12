import { useRef } from "react";

const FormInput = ({ type, value, name, label, inputChangeHandler }) => {
  const inputValue = useRef();
  console.log(inputValue.current);
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        ref={inputValue}
        className="form-control"
        type={type}
        value={value}
        name={name}
        id={name}
      />
    </div>
  );
};

export default FormInput;
