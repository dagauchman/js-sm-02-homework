$(document).ready(function(){

// My code keeps crashing the web browser. I think I might be over thinking this project, not sure.

var i = 99;

for ( i > 0; i-- ) {
	$('div.bottles').append(i + ' bottles of beer on the wall, ' + i + ' bottles of beer.</br> Take one down and pass it around, ' + i-- + ' bottles of beer on the wall.')
};


});