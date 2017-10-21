$(document).ready(function(){
    
    $("#submitCity").click(function(){
        return getWeather();
    });
    
    
});

function getWeather(){
    var city = $("#city").val();
    
    if(city != ''){
        
        $.ajax({
           url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=c10bb3bd22f90d636baa008b1529ee25",
            type: "GET",
            dataType: "jsonp",
            success: function(data){
                var widget = showResults(data)
                
                
                $("#showWeather").html(widget);
                
                $("#city").val('');
            }
            
        });
        
        
    }else{
        $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty</div>");
    }
    
    
}


function showResults(data){
	
	return '<table class="table table-hover" style="border-radius:5px;margin-top:1%;">'+
	        "<tr><th colspan='2' style='font-size:30px;font-family:TimesNewRoman;'><center>Current Weather for "+data.name+', '+data.sys.country+"</center></th></tr>"+
	        "<tr><th>Weather</th><td>"+data.weather[0].main+"</td></tr>"+
			"<tr><th>Description</th><td><img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'> "+data.weather[0].description+"</td></tr>"+
			"<tr><th>Temperature</th><td>"+data.main.temp+"&deg;C</td></tr>"+
	        "<tr><th>Pressure</th><td>"+data.main.pressure+" hpa</td></tr>"+
		    "<tr><th>Humidity</th><td>"+data.main.humidity+"%</td></tr>"+
		    "<tr><th>Min Temperature</th><td>"+data.main.temp_min+"&deg;C</td></tr>"+
		    "<tr><th>Max Temperature</th><td>"+data.main.temp_max+"&deg;C</td></tr>"+
		    "<tr><th>Wind Speed</th><td>"+data.wind.speed+"m/s</td></tr>"+
		    "<tr><th>Wind Direction</th><td>"+data.wind.deg+"&deg;</td></tr>"+	
	        '</table>';			
   
}












