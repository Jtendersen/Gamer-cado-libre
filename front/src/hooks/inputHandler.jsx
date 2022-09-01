import { useState } from "react";

const Input_handler = () => {
  const [value, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
  };
  return { value, onChange };
};
export default Input_handler;
