$(document).ready(function(){

	//99 bottles of beer on the wall, 99 bottles of beer.
	//Take one down and pass it around, 98 bottles of beer on the wall.

var i = 99;

for ( i > 0; i-- ) {
	$('div.bottles').append(i + ' bottles of beer on the wall, ' + i + ' bottles of beer.</br> Take one down and pass it around, ' + i-- + ' bottles of beer on the wall.')
};


});