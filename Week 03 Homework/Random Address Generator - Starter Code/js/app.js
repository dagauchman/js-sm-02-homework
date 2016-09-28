$(document).ready(function(){

	var houseNumber = ['206', '501', '456', '5787', '6654', '2244', '5566', '8910', '10', '20', '307' ];
	var streets = ['Main', 'Smith', 'Wall', '42nd', 'Astor', 'St. Marks', 'Broadway', 'Water', 'Park', '5th', 'Hollywood' ];
	var types = ['St', 'Ave', 'Way', 'Hwy', 'Place'];
	var states = ['NY', 'CA', 'TN', 'TX', 'MO'];
	var cities = ['New York', 'Boulder', 'Santa Monica', 'Los Angeles', 'St. Louis'];
	var zip = ['10023', '90034', '50098', '43220', '23590'];



	$('button#makeAddress').click(function(){

		// Math.floor((Math.random() * 10) + 1); 

		// console.log( Math.floor(Math.random() * 10 + 1));
		var houseRandom = Math.floor(Math.random() * houseNumber.length);

		var streetRandom = Math.floor(Math.random() * streets.length);
		var typesRandom = Math.floor(Math.random() * types.length);
		var statesRandom = Math.floor(Math.random() * states.length);
		var citiesRandom = Math.floor(Math.random() * cities.length);
		var zipRandom = Math.floor(Math.random() * zip.length);

		
		// console.log( streets[streetRandom ]);

		//will generate a random number between 1 - 10.

		$('address.destination').html( houseNumber[houseRandom] + ' ' + streets[streetRandom]+ ' ' + types[typesRandom] + '<br/>' );
		$('address.destination').append( cities[citiesRandom] + ', ' + states[statesRandom] + ' ' + zip[zipRandom] );

	});

});