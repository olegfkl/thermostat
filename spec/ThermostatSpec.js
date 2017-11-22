'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has starting temperature 20', function(){
    expect(thermostat.temperature()).toEqual(20);
  });

  it('minimum temperature 20', function(){
    expect(thermostat.minTemperature()).toEqual(10);
  });

  it('increase the temperature', function() {
    thermostat.up();
    expect(thermostat.temperature()).toEqual(21);
  });

  it('increase the temperature', function() {
    thermostat.down();
    expect(thermostat.temperature()).toEqual(19);
  });

  it('have a default power saving off', function(){
    expect(thermostat.powerSavingOn()).toBeTruthy()
  })

  it('switch power saving mode', function(){
    thermostat.modeSwitch();
    expect(thermostat.powerSavingOn()).toBeFalsy()
  })

  it('Switching power saving mode to off sets max temprature to 32', function(){
    thermostat.modeSwitch();
    expect(thermostat._maxTemperature).toEqual(32);
  });

  it('Switching power saving from on to off sets max temprature to 25', function(){
    thermostat.modeSwitch();
    thermostat.modeSwitch();
    expect(thermostat._maxTemperature).toEqual(25);
  });

  it("Cannot increate more than a max temperature of power mode on", function(){
    thermostat._temperature = 25
    thermostat.up();
    expect(thermostat._temperature).toEqual(25);
  });

  it("Cannot increate more than a max temperature of power mode off", function(){
    thermostat._temperature = 32
    thermostat.modeSwitch();
    thermostat.up();
    expect(thermostat._temperature).toEqual(32);
  });

  it('cannot lower the temp less than the min temperature set', function() {
    thermostat._temperature = 10;
    thermostat.down();
    expect(thermostat._temperature).toEqual(10);
  });

  it('resets temperature', function(){
    thermostat.reset();
    expect(thermostat._temperature).toEqual(20);
  });

});
