// This example creates a 2-pixel-wide red polyline showing
// the path of William Kingsford Smith's first trans-Pacific flight between
// Oakland, CA, and Brisbane, Australia.

function initialize() {
    var mapOptions = {
	zoom: 3,
	center: new google.maps.LatLng(69.64, 18),
	mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),
				  mapOptions);
    

    var flightPlanCoordinates = [
	new google.maps.LatLng(37.772323, -122.214897),
	new google.maps.LatLng(21.291982, -157.821856),
	new google.maps.LatLng(-18.142599, 178.431),
	new google.maps.LatLng(-27.46758, 153.027892)
    ];

    
    // Tromsø
    var tromso = new google.maps.LatLng(69.649208, 18.955324);
	// Google Maps
    var gmaps = new google.maps.LatLng(37.405992, -122.078515);
	// YQL
    var yql = new google.maps.LatLng(43.170610, -78.690310);
	// api.met.no
    var met = new google.maps.LatLng(59.912730, 10.746090);
	// heroku
    var heroku = new google.maps.LatLng(39.043720, -77.487490);
	// ruter.no
    var ruter = new google.maps.LatLng(59.912730, 10.746090);
    

    var weatherPathCoordinates = [
	// Tromsø
	new google.maps.LatLng(69.649208, 18.955324),
	// YQL
	new google.maps.LatLng(43.170610, -78.690310),
	// api.met.no
	new google.maps.LatLng(59.912730, 10.746090)
    ];

    var serverPathCoordinates = [
	// Tromsø
	tromso,
	//new google.maps.LatLng(69.649208, 18.955324),
	// heroku
	heroku,
	// new google.maps.LatLng(39.043720, -77.487490),
	// ruter.no
	new google.maps.LatLng(59.912730, 10.746090)
    ];

    var gmapsPathCoordinates = [
	// Tromsø
	new google.maps.LatLng(69.649208, 18.955324),
	// Google Maps
	new google.maps.LatLng(37.405992, -122.078515)
    ];
    var serverPath = new google.maps.Polyline({
	path: serverPathCoordinates,
	geodesic: true,
	strokeColor: 'green',
	strokeOpacity: 1.0,
	strokeWeight: 2
    });
    var gmapsPath = new google.maps.Polyline({
	path: gmapsPathCoordinates,
	geodesic: true,
	strokeColor: 'blue',

	strokeOpacity: 1.0,
	strokeWeight: 2
    });

    var weatherPath = new google.maps.Polyline({
	path: weatherPathCoordinates,
	geodesic: true,
	strokeColor: '#FF0000',
	strokeOpacity: 1.0,
	strokeWeight: 2
    });

    var imageA = 'markers/pink_MarkerA.png';
    var imageB = 'markers/pink_MarkerB.png';
    var imageC = 'markers/pink_MarkerC.png';
    var imageD = 'markers/pink_MarkerD.png';
    var imageE = 'markers/pink_MarkerE.png';

    var markerA = new google.maps.Marker({
	position: tromso,
	map: map,
	icon: imageA
    });
    var markerB = new google.maps.Marker({
	position: gmaps,
	map: map,
	icon: imageB
    });
    var markerC = new google.maps.Marker({
	position: yql,
	map: map,
	icon: imageC
    });

    var markerD = new google.maps.Marker({
	position: heroku,
	map: map,
	icon: imageD
    }); 
    var markerE = new google.maps.Marker({
	position: met,
	map: map,
	icon: imageE
    });


    
    // IP, location, Latitude Longitude
    // Google Maps API
    // 216.58.209.106, United States, California, Mountain View, 37.405992, -122.078515

    // YQL
    // 98.139.131.15, United States, New York, Lockport, 43.170610, -78.690310
    
    // api.met.no
    // 157.249.32.164, Norway, Oslo, Oslo, 59.912730, 10.746090

    // heroku
    // 216.182.224.209, United States, Virginia, Ashburn, 39.043720, -77.487490

    // ruter.no API
    // 194.19.85.99, Norway, Oslo, Oslo, 59.912730, 10.746090

/*    var apiPath = new google.maps.Polyline({
	path: apiPathCoordinates,
	geodesic: true,
	strokeColor: '#FF0000',
	strokeOpacity: 1.0,
	strokeWeight: 2
    });
    */
    /*var flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
      });*/

    //    apiPath.setMap(map);
    weatherPath.setMap(map);
    serverPath.setMap(map);
    gmapsPath.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
