//Displays and handles the colour palette.
function ColourPalette(){
	this.selectedColour = "#000000";

	//load in the colours 
	this.loadColours = function(){
		
		this.selectedColour = $("#colourInput").val();
		
		fill(this.selectedColour);
		stroke(this.selectedColour);
	};
	
	//call the loadColours function now it is declared
	this.loadColours();

	//handle clicks on the colours.
	$("#colourInput").change(() => { this.loadColours(); })
}