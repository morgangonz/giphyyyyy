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
			var button = $("<button>");
			button.html(topics[i]);
			button.data('gif', topics[i]);
			$('#buttonDiv').append(button);
		 	//calling APIcall fn to run on button click
			$('button').on('click', APIcall)
			//$('gif').on('click', animateGif)
    	};
	}			
	//search button input appear here: add to button div
	$('#search').on('click',function(){
		var gifInput = $('#addGif').val().trim();

		topics.push(gifInput);
		GifBtn();
	})

    function APIcall(){
    	//do "this" on click: run APIcall
    	var topic = $(this).data('gif');
    	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + 
    		"&api_key=dc6zaTOxFJmzC&limit=10";

    	// get info from the link above
    	$.ajax({ url: queryURL, method: 'GET'}).done(function(response) 
    	{

    		var results = response.data;

    		for (var i = 0; i <results.length; i++) {	
	    		var gifs = $('<div class"item">')
	    		var rating = results[i].rating;
	    		var topic = $('<p>').text("Rating:" + rating);	
	    		var gifImg = $('<img>');
	    		gifImg.attr('src', results[i].images.original_still.url);

	    		gifs.append(topic)
	    		gifs.append(gifImg)

	    		$('#gifDiv').prepend(gifs);
    			
    			function animateGif(){

    				if(document.getElementById('#gifDiv').src == "results[i].images.fixed_height.url");
    				{	document.getElementById('#gifDiv').src == "results[i].images.fixed_height.url";
    				}
    					
    			
				}
						

			};

				
		});	
	}	
//calling the fn outside of it 
GifBtn();

//closing tag

}); 

   

		

//var img = response.data[i].images.original_still

