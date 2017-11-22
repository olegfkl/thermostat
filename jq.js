$(document).ready(function() {

  var thermostat = new Thermostat();
  $("#temp").html(thermostat.temperature());

  $("#temp-up").on("click", function() {
    $("#temp-up").html(thermostat.up());
    $("#temp").html(thermostat.temperature());

  });

  $("#temp-down").on("click", function() {
    $("#temp-down").html(thermostat.down());
    $("#temp").html(thermostat.temperature());

  });

  $("#resetbt").on("click", function() {
    $("#resetbt").html(thermostat.reset());
    $("#temp").html(thermostat.temperature());

  });

  $("#power").on("click", function(){
    $("#power").html(thermostat.modeSwitch());
    $("#power").css("background-color", "pink");
    $("#temp").html(thermostat.temperature());
  });



});
