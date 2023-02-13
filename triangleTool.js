function triangleTool(){
	//set an icon and a name for the object
	this.icon = "assets/triangleIcon.png";
	this.name = "triangleTool";
	
	//initalise variables
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	
	this.draw = function(){

		if(mouseIsPressed){ 
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels(); // loads the canvas before the line is drawn every frame, prevents a trail of lines of being created.
			}

			else{
				updatePixels(); // once mouse click is released, frame is saved
				triangle(mouseX-(startMouseX/10), mouseY-(startMouseY/10),startMouseX, startMouseY,mouseX+(startMouseX/10), mouseY+(startMouseY/10));
			}

		}

		else if(drawing){
			updatePixels(); // once mouse click is released, frame is saved
			triangle(mouseX-(startMouseX/10), mouseY-(startMouseY/10),startMouseX, startMouseY,mouseX+(startMouseX/10), mouseY+(startMouseY/10));
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


	this.unselectTool = function () {
		loadPixels();
	}
}