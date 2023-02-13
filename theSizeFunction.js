//$$$Created size function
function sFunction(theSize) {

	keyPressed()
	
}

function keyPressed(){
	
	if (keyCode == LEFT_ARROW) {
			theSize-=3;

	} else if (keyCode == RIGHT_ARROW) {
		theSize+=3;
	}
	
	console.log(theSize)
	if(theSize<=0){
		theSize=1
	}
	
	console.log(theSize)
	
}