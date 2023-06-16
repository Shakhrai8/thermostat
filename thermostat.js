class Thermostat {

  constructor() {
    this.savingMode = true;
    this.temperature = 20;
  };

  getTemperature() {
    return this.temperature;
  };

  up() {
    if (this.savingMode === false && this.temperature < 32 || this.savingMode === true && this.temperature < 25) {
      this.temperature ++;
    };
  };

  down() {
    if (this.temperature > 10) {
      this.temperature --;
    }
  };

  setPowerSavingMode(something) {
    this.savingMode = something;
  };

  reset() {
    this.temperature = 20;
  };

  energyUsage() {
    if (this.temperature < 18) {
      return "low usage";
    } else if (this.temperature <= 25) {
      return "medium usage";
    } else {
      return "high usage";
    };
  };
}

module.exports = Thermostat;