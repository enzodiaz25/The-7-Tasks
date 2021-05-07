import convertTemperatureTo from "./utils/convertTemperatureTo"
import "./styles.css";
import { useState } from "react";

function Converter() {
  const [temp, setTemp] = useState({
    celsius: "",
    farenheit: ""
  });

  function handleChange(e, name) {
    const temp = e.target.value;
    if (temp) {
      const toTempScale = name === "celsius" ? "farenheit" : "celsius";
      const convertedTemp = convertTemperatureTo(toTempScale, temp);
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
    <div className="converter">
      <Temperature
        label="Farenheit"
        scale="farenheit"
        grades={temp.farenheit}
        handleChange={handleChange}
      />
      <Temperature
        label="Celsius"
        scale="celsius"
        grades={temp.celsius}
        handleChange={handleChange}
      />
    </div>
  );
}

function Temperature({ label, scale, grades, handleChange }) {
  return (
    <div className="temperature">
      <label>{label}</label>
      <input value={grades} onChange={(e) => handleChange(e, scale)} />
    </div>
  );
}

export default Converter;
