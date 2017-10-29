"use strict";
var map;


function initMap() {
	if (latBreyta == 0 && lngBreyta == 0) {
		map = new google.maps.Map(document.getElementById('map'), {
	    	zoom: 14,
			center: {lat: 64.1265206, lng: -21.8174392 }
    	});
	}
	else{
		var location = { lat: parseFloat(latBreyta), lng: parseFloat(lngBreyta) };
		map = new google.maps.Map(document.getElementById('map'), {
	    	zoom: 14,
			center: location
    	});
    	var marker = new google.maps.Marker({
          position: location,
          map: map
        });
	}			
    	
}