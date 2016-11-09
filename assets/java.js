$(document).ready(function(){

	// created my aray of topics to be displayed in buttons

	var topics = ['funny', 
				'grumpy cat', 
				'illusions', 
				'3d', 
				'architecture', 
				'painting', 
				'zombies',
				'john hamm', 
				'rio olympics',
				'surfing'];

	// created a loop to display my index as buttons within var topics 
	function GifBtn (){
		$('#buttonDiv').empty()
		for (var i = 0; i < topics.length; i++) {
			$('#buttonDiv').append("<button>" + topics[i] + "</button>");
		 	//calling APIcall fn to run on button click
			$('button').on('click', APIcall)
    	};
	}			
	//search button input appear here: add to button div
	$('#search').on('click',function(){
		var gifInput = $('#addGif').val().trim();

		topics.push(gifInput);
		GifBtn();
	})

    function APIcall(){
    	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC";

    	// get info from the link above
    	$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
    	
    	});		

	}
//calling the fn outside of it 
GifBtn();

//closing tag
}); 

   

		

//var img = response.data[i].images.original_still

