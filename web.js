const express = require("express");
const Thermostat = require("./thermostat");

const app = express();
const thermostat = new Thermostat();

app.use(express.static("public"));

app.get("/temperature", (req, res) => {
  res.json({ temperature: thermostat.getTemperature() });
});

app.post("/up", (req, res) => {
  thermostat.up();
  res.redirect("/");
});

app.post("/down", (req, res) => {
  thermostat.down();
  res.redirect("/");
});

app.post("/powerSavingMode/:status", (req, res) => {
  const { status } = req.params;
  thermostat.setPowerSavingMode(status === "on");
  res.redirect("/");
});

app.post("/reset", (req, res) => {
  thermostat.reset();
  res.redirect("/");
});

app.get("/energyUsage", (req, res) => {
  res.json({ usage: thermostat.energyUsage() });
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
