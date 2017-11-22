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



});


// $("header").on("click", function () {
// })
