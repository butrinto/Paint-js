function HelperFunctions(){
	
	//Jquery click events. Notice that there is no this. at the
	//start we don't need to do that here because the event will
	//be added to the button and doesn't 'belong' to the object

	//event handler for the clear button event. Clears the screen
	$("#clearButton").on("click", function(){
		//sets background to white
		
		background(255);
		
		if (img) {
			img = null;
			var canvas = getElementById("defaultCanvas0");
			c.clearRect(0,0,canvas.width,canvas.height)
		}
	
		
		
		//call loadPixels to update the drawing state
		//this is needed for the mirror tool
		loadPixels();
	});

	//event handler for the save image button. saves the canvsa to the
	//local file system. 
	$("#saveImageButton").on("click", function(){
		//???
		saveCanvas("myCanvas", "png");
	});
	
		
}