//create vars for api and url
//onclick event taking info and creating an ajax call
//then generate that info on page
//add city from input box to div storing it locally after search
//figure out a 5 day forecast card plan??







$('#searchBtn').on('click', function() {

var city = $('#city').val().trim();    
var apiKey = 'fe4de04b2dc40cad6dc883405a9a210c';
var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey;



    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response){

    
        var icon = response.weather.icon;

        console.log(icon);


    
        $('#wicon').attr('src', icon);   
        $('.cityName').html('<h2>' + response.name + "</h1>" );
        $('.temp').text(response.main.temp +'°F');
        $('.humidity').text('Humidity: ' + response.main.humidity);
        $('.wind').text('Wind Speed: ' + response.wind.speed + ' MPH');
        $('uvIndex').text('UV Index: ');
        
    });

    

});
 
