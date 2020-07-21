//create vars for api and url
//onclick event taking info and creating an ajax call
//then generate that info on page
//add city from input box to div storing it locally after search
//figure out a 5 day forecast card plan??






var apiKey = 'fe4de04b2dc40cad6dc883405a9a210c';
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Denver" + "&appid=" + apiKey;
var city = $('#city').val().trim();

$(document).ready();



console.log(queryURL)

$('#searchBtn').on('click', function(){

var apiKey = 'fe4de04b2dc40cad6dc883405a9a210c';
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
var city = $('#city').val().trim();

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response){
        $('.cityName').html('<h2>' + response.name + "Weather Details</h1>" );
        $('.temp').text('Temperature: ' + response.main.temp);
        $('.humidity').text('Humidity: ' + response.main.humidity);
        $('.wind').text('Wind Speed: ' + response.wind.speed);
        $('uvIndex').text('UV Index: ');
    });

    console.log(response.main.temp);

});
 
