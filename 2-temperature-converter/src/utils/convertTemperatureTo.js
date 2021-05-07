const convertTemperatureTo = (toScale, tempValue) => {
    switch (toScale) {
      default:
      case "farenheit":
        return Math.round((tempValue - 32) * (5 / 9));
      case "celsius":
        return Math.round(tempValue * (9 / 5) + 32);
    }
  };

  export default convertTemperatureTo