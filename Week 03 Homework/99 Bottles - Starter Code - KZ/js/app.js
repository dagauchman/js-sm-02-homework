$(document).ready(function(){

// My code keeps crashing the web browser. I think I might be over thinking this project, not sure.


// 1. move your variable declaration into the for loop!!
// 2. you'll notice that you're going to get every other line once you've done this..
// 3. you used "i--" in your string concatenation and it was actually incrementing down!!
// 4. I replace the above with "( i - 1 )"... 

// nice work david!!! these small tweaks would take care of your problem - when your browser starts crashing because of JS (it happens) try commenting things out to trouble shoot then google!!


for ( var i = 99; i > 0; i-- ) {
	$('div.bottles').append(i + ' bottles of beer on the wall, ' + i + ' bottles of beer.</br> Take one down and pass it around, ' + ( i - 1 ) + ' bottles of beer on the wall.')
};


});