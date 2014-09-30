$(document).ready(function(){

	// silly way to make an alert
	var  msg = 'simple shopping list application, basic functionality'
	alert(msg);


	// add item function
	$('#myButton').on('click', function(){
		var input = $('#myInput').val();
		$('#list').append('<li class="item">'+input+'</li>');
	})
	
	// cross item function
	$('#list').on('click', '.item', function(){
		$(this).toggleClass('cross');
	})
})