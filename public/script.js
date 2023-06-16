// script.js

document.addEventListener("DOMContentLoaded", () => {
  const temperatureElement = document.getElementById("temperature");
  const usageElement = document.getElementById("usage");

  // Function to update the temperature on the page
  const updateTemperature = () => {
    fetch("/temperature")
      .then((response) => response.json())
      .then((data) => {
        temperatureElement.textContent = data.temperature;
      });
  };

  // Function to update the energy usage on the page
  const updateEnergyUsage = () => {
    fetch("/energyUsage")
      .then((response) => response.json())
      .then((data) => {
        usageElement.textContent = data.usage;
      });
  };

  // Initial temperature and energy usage update
  updateTemperature();
  updateEnergyUsage();

  // Event listeners for button clicks
  document.getElementById("up").addEventListener("click", () => {
    fetch("/up", { method: "POST" }).then(() => {
      updateTemperature();
      updateEnergyUsage();
    });
  });

  document.getElementById("down").addEventListener("click", () => {
    fetch("/down", { method: "POST" }).then(() => {
      updateTemperature();
      updateEnergyUsage();
    });
  });

  document.getElementById("powerSavingMode").addEventListener("click", () => {
    const status = temperatureElement.textContent < 25 ? "on" : "off";
    fetch(`/powerSavingMode/${status}`, { method: "POST" }).then(() => {
      updateEnergyUsage();
    });
  });

  document.getElementById("reset").addEventListener("click", () => {
    fetch("/reset", { method: "POST" }).then(() => {
      updateTemperature();
      updateEnergyUsage();
    });
  });
});
