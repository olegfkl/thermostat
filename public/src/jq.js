$(document).ready(function() {

 var thermostat = new Thermostat();
 update();

 $('#plus').on('click', function() {
   thermostat.up();
    update();
 });
 $('#minus').on('click', function() {
   thermostat.down();
    update();
 });

 $('#powersave').click(function() {
   thermostat.modeSwitch();
   $('#powersave').html(thermostat._powerSaving ? "PowerSave On" : "PowerSave Off");
   if (thermostat._powerSaving) {
    $(".saveon").css("background-color","#66D8D8");
   }
   else {
    $(".saveon").css( "background-color","#959CA4");
  };
   thermostat.reset();
    update();
});

 $('#Reset').click(function() {
   thermostat.reset();
   update();
 });

 function update() {
   $('#number').html(thermostat.temperature());
  if(thermostat.energyUsage() === 'low-usage'){
    $(".number").css("color","#2FD18A");
    };
  if(thermostat.energyUsage() === 'medium-usage'){
      $(".number").css("color","#E3CE19");
      };
  if(thermostat.energyUsage() === 'high-usage'){
      $(".number").css("color","#E94040");
      };
  };

});
