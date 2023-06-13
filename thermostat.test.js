const Thermostat = require ('./thermostat');

describe('thermostat', () =>{
  beforeEach(() => {
    thermostat_1 = new Thermostat();
  });

  it ('returns a default value of 20', () =>{
    expect(thermostat_1.getTemperature()).toBe(20);
  });

  it ('increases the temperature by 2', () =>{
    thermostat_1.up();
    thermostat_1.up();
    expect(thermostat_1.getTemperature()).toBe(22);
  });

  it ('decreases the temperature by 1', () =>{
    thermostat_1.up();
    thermostat_1.up();
    thermostat_1.down();
    expect(thermostat_1.getTemperature()).toBe(21);
  });

  it ('testing the default saving mode', () =>{
    for (let i = 0 ; i < 10 ; i++) {
      thermostat_1.up();
    }
    expect(thermostat_1.getTemperature()).toBe(25);
    thermostat_1.down();
    expect(thermostat_1.getTemperature()).toBe(24);
  });

  it ('testing the default saving mode', () =>{
    for (let i = 0 ; i < 20 ; i++) {
      thermostat_1.down();
    }
    expect(thermostat_1.getTemperature()).toBe(10);
    thermostat_1.up();
    expect(thermostat_1.getTemperature()).toBe(11);
  });

  it ('testing the turbo mode', () =>{
    thermostat_1.setPowerSavingMode(false);
    for (let i = 0 ; i < 10 ; i++) {
      thermostat_1.up();
    }
    expect(thermostat_1.getTemperature()).toBe(30);
    thermostat_1.up();
    thermostat_1.up();
    thermostat_1.up();
    expect(thermostat_1.getTemperature()).toBe(32);
  });

  it ('tests the reset function', () =>{
    thermostat_1.setPowerSavingMode(false);
    for (let i = 0 ; i < 10 ; i++) {
      thermostat_1.up();
    }
    thermostat_1.reset();
    expect(thermostat_1.getTemperature()).toBe(20);
  });

  it ('checks the energyUsage method', () =>{
    expect(thermostat_1.energyUsage()).toBe('medium usage');

    thermostat_1.setPowerSavingMode(false);
    for (let i = 0 ; i < 10 ; i++) {
      thermostat_1.up();
    }
    expect(thermostat_1.energyUsage()).toBe('high usage');

    for (let i = 0 ; i < 15 ; i++) {
      thermostat_1.down();
    }

    expect(thermostat_1.energyUsage()).toBe('low usage');
  });
});