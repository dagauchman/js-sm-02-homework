$(document).ready(function(){

	$('input#makeLetter').click(function(){

		// var Adjective = $('input#adjective').val();
		var texts = new Array();

		var adjectives = new Array();
		var friend = $('input#friendsName').val();
		var company = $('input#company').val();
		var lengthOfTime = $('input#lengthOfTime').val();
		var nouns = new Array();
		var occupations = new Array();
		var adverbs = new Array();


		var verbED = $('input#verbED').val();
		var verbING = $('input#verbING').val();
		var animal = $('input#animal').val();
		var nameOfMovie = $('input#nameOfMovie').val();
		var myName = $('input#myName').val();





		adjectives[0] = $('input#adjectiveOne').val();
		adjectives[1] = $('input#adjectiveTwo').val();
		adjectives[2] = $('input#adjectiveThree').val();
		adjectives[3] = $('input#adjectiveFour').val();
		adjectives[4] = $('input#adjectiveFive').val();
		adjectives[5] = $('input#adjectiveSix').val();
		adjectives[6] = $('input#adjectiveSeven').val();



		nouns[0] = $('input#nounOne').val();
		nouns[1] = $('input#nounTwo').val();
		nouns[2] = $('input#nounThree').val();
		nouns[3] = $('input#nounFour').val();
		nouns[4] = $('input#nounFive').val();
		occupations[0] = $('input#occupationOne').val();
		occupations[1] = $('input#occupationTwo').val();
		occupations[2] = $('input#occupationThree').val();
		occupations[3] = $('input#occupationFour').val();
		adverbs[0] = $('input#adverbOne').val();
		adverbs[1] = $('input#adverbTwo').val();


		texts[0] = 	'Dear ' + company + ':';

		texts[1] = friend + ' worked for me as my assistant for' + lengthOfTime + '. I recommend her without ' + nouns[0] + 's for the ' + occupations[0] + ' program.';

		texts[2] = 'While working in ' + nouns[0] + ' production, I often relied on ' + friend + ' to put together ' + adjectives[0] + ' presentations, for which she described and ' + verbED + ' the artistic approach to the project, researching ' + nouns[1] + 's and photographic ' + adjectives[1] + ' materials. Her creativity, resourcefulness and ability to see a project through really made these presentations ' + adjectives[2] + ' and ' + adjectives[3] + '.';

		texts[3] = 'When we went into production on the feature film ' + nameOfMovie + ', ' + friend + ' was able to observe every ' + nouns[2] + ' of the process, ' + verbING + ' in on meetings and working with ' + animal + 's in all areas of the production from the moment the production was set in motion through the release of the film ' + lengthOfTime + ' later.';

		texts[4] = 'During this time, she was an ' + adjectives[3] + ' ' + occupations[1] + ', often serving as my liason to scattered ' + nouns[2] + 's' + ' of the crew. She also coordinated projects involving ' + adjectives[5] + ' people, and her ability to work ' + adverbs[0] + ' while guiding the project quickly and ' + adverbs[1] + ' was ' + adjectives[7] + '. For example, when we suddenly needed to reconceive several action ' + nouns[4] + 's that had already been storyboarded, ' + friend + ' quickly found a new storyboard ' + occupations[2] + ' on location and worked with him, the stunt coordinator and the ' + occupations[3] + ' thorugh several drafts to make sure the new ' + nouns[4] + 's worked, and then ' + verbED + ' with crew ' + nouns[2] + 's from all departments, making sure everyone was up-to-date on the changes that were relevant to them. She even ' + verbED + ' in to draw a few last-minute ' + adjectives[7] + ' changes herself.';

		texts[5] = friend + '\'s sensitivity, ' + nouns[0] + ', energy and sense of ' + nouns[2] + ' made working with her a/an ' + nouns[2] + '. I highly recommend her as a/an ' + adjectives[8] + ' addition to the program.';

		texts[6] = 'Sincerely,';

		texts[7] = myName;

		$(texts).each(function(index, text){

			$('div.output').append('<p>' + text + '</p>');


		});

		$('div.output').fadeIn('slow');

	});


});