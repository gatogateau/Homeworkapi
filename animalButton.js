


var animalList = ["Rhino", "hippo", "cat", "ocelot", "ostrich", "dog", "cat", "ferret", "giraffe", "elephant"];

// display movie buttons
 function createButtons() {

	// empty to avoid repeat buttons
	$("#animalButton").empty();

	// Loop through the movieList array
	for (var i = 0; i < animalList.length; i++) {
		// get buttons for each animal
		var btn = $("<button>");
		btn.addClass("animal");
		btn.attr("data-name", animalList[i]);
		btn.text(animalList[i]);

		// place buttons on the page
		$("#animalButton").append(btn);
	}

	$("#addAnimal").on("click", function(event) {
		//makes form not refresh on 'submit'
		event.preventDefault();

		// get new animal from input box
		var animal = $("#animal-input").val().trim();
		// add new animal to animalList
		animalList.push(animal);

		
	});
 }

 //call functions
 createButtons();


// button to start function,  on click function for cat
$("#animalButton").on("click", function() {

    // query link - api url
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag="+animalButton;

    //calls the query link
    $.ajax({
        url: queryURL,
        method: "GET"
    })

    // loads the information without refreshing page.
    .then(function(response) {

        // receive an image 
        var imageUrl = response.data.image_original_url;

        //make animalImage an image
        var animalImage = $("<img>");

        //give animalImage the src image url.  then gives alt attribute
        animalImage.attr("src", imageUrl);
        animalImage.attr("alt", "image");

        //puts beginning of the div.  
        $("#animalPics").prepend(animalImage);

        
    });
    });
    