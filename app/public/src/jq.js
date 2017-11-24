$(document).ready(function() {




 var thermostat = new Thermostat();

 update();
sessionGet();


function displayWeather(city) {
var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city ;
var token = '&APPID=39f7158b4fbdeec4940041d9e1480b55' ;
var metric = '&units=metric';
$.get(url + metric + token, function(data) {
  $('#api').html(data.main.temp);
});
};

function sessionSave() {
  $.post('/save', { temperature: thermostat.temperature() });
};

function sessionGet() {
  $.get('/update', function(temp){
    console.log(thermostat._temperature);
    if (temp.temperature === null) {
    } else {
        thermostat._temperature = Number(temp.temperature) ;
    }
      update();
  });
}

$('#select-city').submit(function(event) {
  event.preventDefault();
  if ( $('#current-city').val() === '') {
    var city = 'London'
  } else {
    var city = $('#current-city').val();
  }
  displayWeather(city);
 });

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
   $('#number').html(thermostat.temperature() );
  if(thermostat.energyUsage() === 'low-usage'){
    $(".number").css("color","#2FD18A");
    };
  if(thermostat.energyUsage() === 'medium-usage'){
      $(".number").css("color","#E3CE19");
      };
  if(thermostat.energyUsage() === 'high-usage'){
      $(".number").css("color","#E94040");
      };
      sessionSave();
  };

});
