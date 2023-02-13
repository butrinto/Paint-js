//global variables that will store the toolboxm colour palette
//amnd the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;
var theSize = 10;
//variables needed to load image
var input; 
var img;


function setup() {

    //create a canvas to fill the content div from index.html
    canvasContainer = $('#content');
    var c = createCanvas(canvasContainer.innerWidth(), canvasContainer.innerHeight());
    c.parent("content");

	background(255,255,255,0);
	
	//sets up the load button
	input = createFileInput(handleFile)
	input.position(320, 9); 
	
	
	
   //create helper functions and the colour palette
    helpers = new HelperFunctions();
    colourP = new ColourPalette();
    
    //create a toolbox for storing the tools
    toolbox = new Toolbox();
    
    //add the tools to the toolbox. 
    toolbox.addTool(new FreehandTool());
    toolbox.addTool(new LineToTool());
    toolbox.addTool(new SprayCanTool());
    toolbox.addTool(new mirrorDrawTool());
	
	toolbox.addTool(new eraserTool());
	toolbox.addTool(new circleTool());
	toolbox.addTool(new rectTool());
	toolbox.addTool(new triangleTool()); 
	
	
}

function draw() {
	//if an image is assigned to the img with loading, it will draw the image once, then reset img to null, prevents constant loop.
	if (img) {
	 	image(img, 0, 0, width, height);
		img = null;
	}
	
    //call the draw function from the selected tool.
    //hasOwnProperty is a javascript function that tests
    //if an object contains a particular method or property
    //if there isn't a draw method the app will alert the user
	
	if(toolbox.selectedTool.hasOwnProperty("draw")){
    	toolbox.selectedTool.draw();
	}
	else{
		alert("it doesn't look like your tool has a draw method!");
	}
}

//function to assign a locally stored image to load.
function handleFile(file) {
	print(file);
	if (file.type === 'image') {
		img = createImg(file.data);
		img.hide();
	}
}