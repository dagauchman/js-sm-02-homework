$(document).ready(function(){

	var streets = ['Main', 'Smith', 'Wall', '42nd', 'Astor', 'St. Marks', 'Broadway', 'Water', 'Park', '5th', 'Hollywood' ];
	var types = ['St', 'Ave', 'Way', 'Hwy', 'Place'];
	var states = ['NY', 'CA', 'TN', 'TX', 'MO'];
	var cities = ['New York', 'Boulder', 'Santa Monica', 'Los Angeles', 'St. Louis'];
	var zip = ['10023', '90034', '50098', '43220', '23590'];

	function makeRandomNumber(min, max){

		return (Math.floor( Math.random() * max - min) + min );


	}

	$('button#makeAddress').click(function(){

		console.log(makeRandomNumber(5,10));

		return;

		var houseRandom = makeRandomNumber(1,9999)
		var streetRandom = makeRandomNumber(0,streets.length)
		var typesRandom = makeRandomNumber(0,types.length)
		var statesRandom = makeRandomNumber(0,states.length)
		var citiesRandom = makeRandomNumber(0,cities.length)
		var zipRandom = makeRandomNumber(0,zip.length)


		// var houseRandom = Math.floor(Math.random() * 10000);
		// var streetRandom = Math.floor(Math.random() * streets.length);
		// var typesRandom = Math.floor(Math.random() * types.length);
		// var statesRandom = Math.floor(Math.random() * states.length);
		// var citiesRandom = Math.floor(Math.random() * cities.length);
		// var zipRandom = Math.floor(Math.random() * zip.length);

		


		$('address.destination').html( houseRandom + ' ' + streets[streetRandom]+ ' ' + types[typesRandom] + '<br/>' );
		$('address.destination').append( cities[citiesRandom] + ', ' + states[statesRandom] + ' ' + zip[zipRandom] );

	});

});