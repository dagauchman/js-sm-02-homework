$(document).ready(function(){

	//99 bottles of beer on the wall, 99 bottles of beer.
	//Take one down and pass it around, 98 bottles of beer on the wall.

	var NUM = [98];

for (var i = 0; i < NUM.length; i--) {
	$('div.bottles').append(NUM[i] + ' bottles of beer on the wall, ' + NUM[i] + ' bottles of beer.</br> Take one down and pass it around, ' + NUM[i-1] + ' bottles of beer on the wall.')
};



});