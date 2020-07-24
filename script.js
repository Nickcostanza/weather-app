
//OnClick event to get users deseired city

$('#searchBtn').on('click', function() {

var city = $('#city').val().trim();    
var apiKey = 'fe4de04b2dc40cad6dc883405a9a210c';
var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey;
var queryURL5 = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=' + apiKey;

//Querying Api with users response
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response){

    
        var icon = response.weather[0].icon;
        var iconURL = 'http://openweathermap.org/img/w/'

    //generating text to the page
        $('#wicon').attr('src', 'http://openweathermap.org/img/w/' + icon + '.png');   
        $('.cityName').html('<h2>' + response.name + "</h1>" );
        $('.temp').text(response.main.temp +'°F');
        $('.humidity').text('Humidity: ' + response.main.humidity + '%');
        $('.wind').text('Wind Speed: ' + response.wind.speed + ' MPH');
        $('.uvIndex').text('UV Index: ');
        
    })

    //locally Store City and add to an <ul> on page
    localStorage.setItem('city', city);
    localStorage.getItem(city);


      // api call to retreive 5 day forecast  
    $.ajax ({
        url: queryURL5,
        method: 'GET'
    }).then(function(response){

        console.log(queryURL5);

    })

    //Need to creat a for loop to get 5 day forecast?
    //also to append the 5 cards to the page to show info to user using a card group w/ Bootstrap

});




 
