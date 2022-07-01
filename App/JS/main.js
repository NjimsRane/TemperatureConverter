const fahrenheitToCelsius = document.querySelector(".fahrenheitToCelsius");
const toCelsius = document.querySelector(".toCelsius");
const celsiusFromFahrenheit = document.querySelector(".celsiusFromFahrenheit");

const celsiusToFahrenheit = document.querySelector(".celsiusToFahrenheit");
const toFahrenheit = document.querySelector(".toFahrenheit");
const fahrenheitFromCelsius = document.querySelector(".fahrenheitFromCelsius");
const reset = document.querySelector(".reset");

// =============

toCelsius.addEventListener("click",()=>{
  celsiusFromFahrenheit.value =((Number(fahrenheitToCelsius.value) -32)/1.8).toFixed(1);
})

toFahrenheit.addEventListener("click",()=>{
  fahrenheitFromCelsius.value = ((Number(celsiusToFahrenheit.value) * 1.8) + 32).toFixed(1)
})