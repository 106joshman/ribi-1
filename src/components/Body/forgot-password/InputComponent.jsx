import React from "react";

function InputComponent({ className, type, onChange }) {
  return <input type={type} className={className} onChange={onChange} />;
}

export default InputComponent;
