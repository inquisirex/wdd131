// 1. Set current year in footer
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

// 2. Set last modified date in footer
document.getElementById("lastModified").textContent = Last Modification: ${document.lastModified};

// 3. Wind Chill Calculation
// Static values for this assignment (as per typical instructions)
const temperature = 25; // Celsius
const windSpeed = 10;   // km/h

// Function to calculate wind chill (Metric)
function calculateWindChill(temp, wind) {
    // Wind chill is only valid for temps <= 10°C and wind > 4.8 km/h
    // Since Mexico is 25°C, it typically isn't applicable, but we implement the logic:
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
}

// Logic to display Wind Chill or "N/A"
const windChillElement = document.getElementById("windChill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = ${calculateWindChill(temperature, windSpeed)} °C;
} else {
    windChillElement.textContent = "N/A";
}