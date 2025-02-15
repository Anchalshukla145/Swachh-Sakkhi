$(document).ready(function () {
    
        navigator.geolocation.getCurrentPosition(success, error);

    function success(pos) {
        var lat = pos.coords.latitude;
        var long = pos.coords.longitude;
        weather(lat, long);
    }

    function error() {
        console.log('There was an error');
        $("#city").html("Allow location permission to proceed.");
    }

    function weather(lat, long) {
        var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;

        $.getJSON(URL, function(data) {
            updateDOM(data);
            console.log(typeof data.main.temp);
        });
    }
    function updateDOM(data) {
        if(data.name == "Shuzenji"){
            $("#temperature").html("");
            $("#humidity").html("");
            $("#city").html("");
            $("#wind").html("");
            $("#prescription1").html("");
            $("#prescription1").html("Loading, please wait...");
            location.reload();
        }
        else{
            $("#temperature").html(data.main.temp_max + "° Celsius");
            $("#humidity").html("Humidity is: " + data.main.humidity + "%");
            $("#city").html("Your current location is " + data.name);
            $("#wind").html("Wind speed: " + data.wind.speed + "kmph");
            if (data.main.temp_max > "25"){
                console.log("u got bamboozled")
                $("#prescription").html("The temperature is suitable for <em>kharif</em> crops");
            }
            else{
                $("#prescription").html("The temperature is suitable for <em>rabi</em> crops");
        
            }
        
            if(data.main.humidity < "80"){
                $("#prescription1").html("It is not raining, you can cut your crops.");
            }
            else{
                $("#prescription1").html("It is raining, go save your crops!");
            }
        }
    }
})