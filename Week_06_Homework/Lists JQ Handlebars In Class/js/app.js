$(document).ready(function(){

	var grabListId;

	$.ajax({

		url: 'http://www.kameronzach.com/todo/api/',
		method: 'GET',
		data: { action: 'displayList', list_id: 36, token: '58097cbe88b3a' },
		dataType: 'json',
		cache: false,
		success: function(data){

			// console.log( data.items[1].text );
			

			$( data.items ).each(function(index, value) {


				console.log(  value );
				addItem( value.text, value.id, true );
				grabListId = value.id;



			});


		}
	});

	


	function addItem(text, itemId, silent){

		

		// 3. Make sure input isn't empty INPUT != ''
		
			if( text == '' && silent == false){

			alert('Yo, we need an item...');
			return;

		}


		


		var listItemHTML = $('script#listHtml').html();
		var generateListItemTemplate = Handlebars.compile(listItemHTML);

		var itemData = { listItem: text, deleteText: 'Get Out of Here', listItemID: itemId };
		var newHTML = generateListItemTemplate( itemData );


			$('ul#list').append( newHTML );
			// $(listItemHTML).slideUp(900, function() {

		// });


		
		
		// 4. Append item to list

	}

	$('#composer').submit(function(e){

		e.preventDefault();

		var input = $('input#new-thing');
		var inputValue = input.val();

		$.ajax({

			url: 'http://www.kameronzach.com/todo/api/',
			method: 'POST',
			data: { action: 'newItem', list_id: 36, token: '58097cbe88b3a', text: inputValue },
			dataType: 'json',
			success: function(data){

				console.log( data );
				addItem(inputValue, data.item_id, false);
			}
		});

		input.val('');
		input.focus();

		

	});

	$('#list').on('change', 'input[type=checkbox]', function(){
		// var input = $('input#new-thing');
		var inputItem = $(this);
		var inputValue = inputItem.val();
		// var inputValue2 = 'hello';
		var checked = $(this).is(':checked');

		var itemID = $(this).parent().data('item-id');
		
		
		$.ajax({

			url: 'http://www.kameronzach.com/todo/api/',
			method: 'POST',
			data: { action: 'updateItem', list_id: 36, item_id: itemID, completed: checked, token: '58097cbe88b3a', text: inputValue },
			dataType: 'json',
			success: function(data){

				console.log( data );

				if( inputItem.parent().hasClass('done') ){
					inputItem.parent().removeClass('done');
				}else{
					inputItem.parent().addClass('done');
				}

				
			},

			error: function() {

				alert('Hey something went wrong');

			}
		});


		//Add this to sucess function above
		// if( $(this).parent().hasClass('done') ){
		// 	$(this).parent().removeClass('done');
		// }else{
		// 	$(this).parent().addClass('done');
		// }
		/////////

	});


	$('#list').on('click', 'a.deleteItem', function(e) {
		e.preventDefault();
		// alert('you clicked on this');
		var itemID = $(this).parent().data('item-id');
		var listItem = $(this);







		$.ajax({

			url: 'http://www.kameronzach.com/todo/api/',
			method: 'POST',
			data: { action: 'deleteItem', list_id: 36, token: '58097cbe88b3a', item_id: itemID },
			dataType: 'json',
			success: function(data){

				console.log( data );
				listItem.parents('li').slideUp(900, function() {

					$(this).remove();

				});

				
			},

			error: function() {

				alert('Hey something went wrong');

			}
		});

		
		

		


	});


	// $('input[type=checkbox]').click(function(){

	// // 	// check if parent HAS CLASS
	// // 	// use item PROP
	// // 	// .is


	// 	if( $(this).parent().hasClass('done') ){
	// 		$(this).parent().removeClass('done');
	// 	}else{
	// 		$(this).parent().addClass('done');
	// 	}

	// // 	// if( $(this).prop('checked') == true ){
	// // 	// 	$(this).parent().removeClass('done');
	// // 	// }else{
	// // 	// 	$(this).parent().addClass('done');
	// // 	// }

	// // 	// if( $(this).is(':checked') ){
	// // 	// 	$(this).parent().removeClass('done');
	// // 	// }else{
	// // 	// 	$(this).parent().addClass('done');
	// // 	// }

	// });


	// $('.fa-pencil').click(addItem);
	

});





