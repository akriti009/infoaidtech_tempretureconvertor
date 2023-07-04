function convertToCelsius() {
    var fahrenheitInput = document.getElementById("fahrenheit");
    var celsiusResult = document.getElementById("result");
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var celsius = (fahrenheit - 32) * 5 / 9;
    celsiusResult.textContent = fahrenheit + "°F is " + celsius.toFixed(2) + "°C";
}

function convertToFahrenheit() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitResult = document.getElementById("result");
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9 / 5) + 32;
    fahrenheitResult.textContent = celsius + "°C is " + fahrenheit.toFixed(2) + "°F";
}
