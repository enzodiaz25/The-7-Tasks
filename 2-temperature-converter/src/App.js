import "./styles.css";
import { useState } from "react";

const convertTo = (toScale, tempValue) => {
  switch (toScale) {
    default:
    case "farenheit":
      return Math.round((tempValue - 32) * (5 / 9));
    case "celsius":
      return Math.round(tempValue * (9 / 5) + 32);
  }
};

function Converter() {
  const [temp, setTemp] = useState({
    celsius: "",
    farenheit: ""
  });

  function handleChange(e, name) {
    const temp = e.target.value;
    if (temp) {
      const toTempScale = name === "celsius" ? "farenheit" : "celsius";
      const convertedTemp = convertTo(toTempScale, temp);
      setTemp(() => ({
        [name]: temp,
        [toTempScale]: convertedTemp
      }));
    } else {
      setTemp(() => ({
        celsius: "",
        farenheit: ""
      }));
    }
  }

  return (
    <>
      <Temperature
        name={"farenheit"}
        grades={temp.farenheit}
        handleChange={handleChange}
      />
      <Temperature
        name={"celsius"}
        grades={temp.celsius}
        handleChange={handleChange}
      />
    </>
  );
}

function Temperature({ name, grades, handleChange }) {
  return (
    <div>
      <label>{name}</label>
      <input value={grades} onChange={(e) => handleChange(e, name)} />
    </div>
  );
}

export default Converter;
