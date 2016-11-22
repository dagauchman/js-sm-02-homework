

$(document).ready(function(){

	var newsDescription;
	var splitLocation;
	var statesArray = [];
	var saveStates;

	//create an object and save all my parameters inside this object
	var place = {}
	
	$.get("https://newsapi.org/v1/articles?source=associated-press&sortBy=latest&apiKey=da20e6d49f9d41d08c4874c315df47b5", function (data, status){
	        // console.log(data.articles[0].description);
	        console.log(data.articles);

	        data.articles.forEach(function(value, i){
	        	// console.log('value = ' + value);
	        	newsDescription = value.description;
	        	splitLocation = newsDescription.split('(AP)')[0];
	        	var myArticlePosition = getLocationGps(splitLocation, value);
	        	
	        });
	        

	});



var getLocationGps = function(splitLocation, value){
	var articleValue = value;
	// console.log(value);
	var urlPlaceName = 'https://maps.googleapis.com/maps/api/geocode/json?address=PLACENAME';

	var parsedUrl = urlPlaceName.replace('PLACENAME', splitLocation);

	// console.log(splitLocation);



	$.get(parsedUrl, function(data, status){   
			// console.log(data);

	        var markerLat = data.results[0].geometry.location.lat;
	        var markerLng = data.results[0].geometry.location.lng;



	        var statesArray = ['Alabama', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'exas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
	        
	        

	        var stateName;


			if(typeof data.results[0].address_components[1] !== 'undefined') {
   	            var findStateNameOne = data.results[0].address_components[1].long_name;
   	            if (statesArray.indexOf(findStateNameOne) > -1) {
       	            stateName = findStateNameOne;
       	        };
			};
	        if(typeof data.results[0].address_components[2] !== 'undefined') {
	            var findStateNameTwo = data.results[0].address_components[2].long_name;
	            if (statesArray.indexOf(findStateNameTwo) > -1) {
    	            stateName = findStateNameTwo;
    	        };
	        };

	        if(typeof data.results[0].address_components[3] !== 'undefined') {
	            var findStateNameThree = data.results[0].address_components[3].long_name;
	            if (statesArray.indexOf(findStateNameThree) > -1) {
    	            stateName = findStateNameThree;
    	        };
	        };
	        

	        var img = articleValue.urlToImage;
	        var title = articleValue.title;
	        // var author = articleValue.author;
	        var url = articleValue.url;
	        var description = articleValue.description;
	        var splitDescription = description.split('— ')[1];
	        var splitDescriptionLocation = description.split('(AP)')[0];
	        // console.log(splitDescriptionLocation);
	        
	        //This checks if Marker and Article are within the bounds of the map
	        // var markerLat = markerId._latlng.lat,
	        // 	markerLng = markerId._latlng.lng,
	        var	markerBounds = [markerLat, markerLng];

	        var southWest = L.latLng(23.778285, -129.352340),
	            northEast = L.latLng(49.534462, -55.348439),
	            bounds = L.latLngBounds(southWest, northEast);

	        if (bounds.contains(markerBounds)){
	        	addMarker(markerLat, markerLng, stateName, img, title, splitDescriptionLocation, splitDescription, url);
	        } else {
	        	//DONT DO THIS
	        };

	        // addMarker(markerLat, markerLng, stateName, img, title, splitDescriptionLocation, splitDescription, url);

	        // addNewsArticles();

	});

	// console.log(data, status, value);



}




//Leaflet JS Option
var addMarker = function(markerLat, markerLng, stateName, image, title, location, description, url){
	// console.log(stateName);

	var uniqueId = Math.random().toString(36).substring(18);

	console.log(uniqueId);

	// console.log(stateName);
	var stateTrim = stateName.replace(/ /g,'');
	// var res = str.substring(1, 4);
	// var statesubstring = stateTrim.substring(1, 4);
	// console.log(stateTrim);


		
	


	var greyIcon = L.icon({
	    iconUrl: 'img/leaflet-marker-grey.svg',
	    // shadowUrl: 'leaf-shadow.png',
	    className: 'allMarkers',
	    iconSize:     [25, 41], // size of the icon
	    // shadowSize:   [50, 64], // size of the shadow
	    iconAnchor:   [16, 40], // point of the icon which will correspond to marker's location
	    // shadowAnchor: [4, 62],  // the same for the shadow
	    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
	});

	var redIcon = L.icon({
	    iconUrl: 'img/leaflet-marker-red.svg',
	    // shadowUrl: 'leaf-shadow.png',
	    className: 'allMarkers',
	    iconSize:     [25, 41], // size of the icon
	    // shadowSize:   [50, 64], // size of the shadow
	    iconAnchor:   [16, 40], // point of the icon which will correspond to marker's location
	    // shadowAnchor: [4, 62],  // the same for the shadow
	    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
	});

	var markerId = L.marker( [markerLat, markerLng], {icon: greyIcon} )



	markerGroup.addLayer( markerId );
	
	 
	if (image !== null) {
		var imgContainerClass = "<img class='articleImage' src='" + image + "';' />";
		var articleContainerClass = "<div id='" + uniqueId + "' class='articleContainer'>" + imgContainerClass + "<div class='articleContainerInner'><a href='" + url + "' target='_blank'><h1 class='articleTitle'>" + title + "</h1></a><h1 class='articleAuthor'>" + location + "</h1><a href='" + url + "' target='_blank'><p class='articleDescription'>" + description + "</p></div></div>";
		var stateHeader = "<div class='stateContainer'><h1 class='stateText'>" + stateName.toUpperCase() + "</h1> </div>";
		var stateMainContainer = "<div data-id='" + stateTrim + "' id='" + stateTrim + "' class='stateSelector'></div>";

		//IF div id=state already exists add new article to that div.
		if( $('#' + stateTrim).length ) {
			
			$( "div.stateSelector#" + stateTrim ).append( articleContainerClass );

		} else {
			$( "div#scrollContainer" ).append( stateMainContainer );
			$( "div.stateSelector#" + stateTrim ).append( stateHeader );
			$( "div.stateSelector#" + stateTrim ).append( articleContainerClass );

		};	
	} else {
		articleContainerClass = "<div id='" + uniqueId + "' class='articleContainer'><div class='articleContainerInner'><a href='" + url + "' target='_blank'><h1 class='articleTitle'>" + title + "</h1></a><h1 class='articleAuthor'>" + location + "</h1><a href='" + url + "' target='_blank'><p class='articleDescription'>" + description + "</p></div></div>";
		stateHeader = "<div data-id='" + stateTrim + "' class='stateContainer'><h1 class='stateText'>" + stateName.toUpperCase() + "</h1> </div>";
		stateMainContainer = "<div data-id='" + stateTrim + "' id='" + stateTrim + "' class='stateSelector'></div>";
		//IF div id=state already exists add new article to that div.
		if( $('#' + stateTrim).length ) {
			
			$( "div.stateSelector#" + stateTrim ).append( articleContainerClass );

		} else {
			$( "div#scrollContainer" ).append( stateMainContainer );
			$( "div.stateSelector#" + stateTrim ).append( stateHeader );
			$( "div.stateSelector#" + stateTrim ).append( articleContainerClass );

		};

	};


	console.log


	
	//clicking a marker changes the coresponsing article in the scrollColumn
    markerId.on("click", function (event) {

    	//ICON CHANGE IS NOT WORKING YET
    	
    	console.log('event.allMarkers');
        // markerId.valueOf()._icon.style.fill = 'green';
        // L.icon({
        // 	    iconUrl: 'img/leaflet-marker-grey.svg',
        // });
        var layer = event.target;
            layer.setIcon(layer.options.icon == greyIcon ? redIcon : greyIcon);
        // L.icon.setIcon(greyIcon);


        event.target.setIcon(redIcon);

        $("div.articleContainer").css('border-left', '0px solid white');
    	$("div.articleContainer#" + uniqueId).css('border-left', '10px solid #FF322E');
		//working
    	var scrollPosition = $("div.articleContainer#" + uniqueId).first().position().top;
    	$( ".container" ).animate({
    		scrollTop: scrollPosition

    	}, 400);
    	return false;
   
    });

  

    //calls the function that will sort my articles and stateheader
    sortStates();
};



function sortStates(){
	// console.log('states found ', $('#scrollContainer').find('.stateContainer'));

	var alphabeticallyOrderedDivs = $('#scrollContainer').find('.stateSelector').sort(function(a, b) {
	    // console.log($(a).data('id'));
	    // console.log($(b).data('id'));
	    return String.prototype.localeCompare.call($(a).data('id').toLowerCase(), $(b).data('id').toLowerCase());
	});

	$("#scrollContainer").html(alphabeticallyOrderedDivs);


};






map.addLayer(markerGroup);

});