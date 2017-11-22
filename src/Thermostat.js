'use strict';

function Thermostat() {
  this._temperature = 20;
  this._powerSaving = true;
  this._minTemperature = 10;
};

Thermostat.prototype.temperature = function () {
  return this._temperature;
};

Thermostat.prototype.minTemperature = function () {
  return this._minTemperature;
};
Thermostat.prototype.up = function () {
  this._temperature += 1 ;
};

Thermostat.prototype.down = function () {
  this._temperature -= 1 ;
};
Thermostat.prototype.powerSavingOn = function(){
  return this._powerSaving;
}

Thermostat.prototype.modeSwitch = function () {
  this._powerSaving = !this._powerSaving

};
