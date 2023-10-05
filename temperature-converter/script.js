const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  celsiusField.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();

  convertBtn.innerHTML = "<span><i class='fa fa-spinner fa-spin'></i>CONVERTING..</span>";
  setTimeout(() => {
    convertBtn.innerHTML = "<span>CONVERT</span>";
  }, 1000);
});

function convertToCelsius() {
  let inputValue = parseFloat(degree.value); // Parse the input value as a float

  setTimeout(() => {
    if (tempType.value === "fahrenheit") {
      const fahrenheitToCelsius = (inputValue - 32) * (5 / 9);
      celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)}&deg;C`; // Use backticks (`) for template literals and &deg; for the degree symbol
    } else if (tempType.value === "kelvin") {
      const kelvinToCelsius = inputValue - 273.15;
      celsiusField.innerHTML = `${kelvinToCelsius.toFixed(3)}&deg;C`;
    }
  }, 1200);
}
