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



});
