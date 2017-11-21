'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has starting temperature 20', function(){
    expect(thermostat.temperature()).toEqual(20);
  });

  it('increase the temperature', function() {
    thermostat.up();
    expect(thermostat.temperature()).toEqual(21);
  });

  it('increase the temperature', function() {
    thermostat.down();
    expect(thermostat.temperature()).toEqual(19);
  });


});
