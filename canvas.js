function doFirst()
{
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
	
	//Changes the filled shapes' color (must be placed before the creation of a filled shape)
	/*canvas.fillStyle = "blue"; */
	
	//Changes the color of the outline of a stroke shape (must be placed before the creation of the stroke objects)
	/*canvas.strokeStyle = "green"; */
	
	//Draws the outline of a rectangle, parameters are (x-coordinate, y-coordinate, width, height)
	/* canvas.strokeRect(10, 10, 200, 100); */
	//Draws a filled rectangle (same parameters)
	/*canvas.fillRect(320, 10, 200, 100); */
	
	//Draws a clear rectangle that acts as an eraser. Usually used on top of a filled rectangle to subtract pixels from the area
	 /*canvas.clearRect(340, 20, 75, 50); */
	
	/* var y = document.getElementById('canvas2'); */
	
	//************************************************************************************************************************************
	
	//Linear Gradients
	
	//Creates a linear gradient, parameters: (x-start-value, y-start-value, x-stop-value, y-stop-value)
	/* var g = canvas.createLinearGradient(0,0,100,100); */
	
	// Fades from blue to red
	/* g.addColorStop(0.0,"blue");
	g.addColorStop(1, "red"); */
	
	/* canvas.fillStyle = g;
	canvas.fillRect(10, 10, 100, 100); */
	
	//************************************************************************************************************************************
	
	//Creating Custom Shapes
	
	//Creates line to move from (50, 50) to (70, 250) to (300,200) making a weird looking rectangle
	/* canvas.beginPath();
	canvas.moveTo(50, 50);
	canvas.lineTo(70, 250);
	canvas.lineTo(300, 200);
	canvas.closePath(); */
	//Converts the line segments into an actual shape on the screen
	/* canvas.stroke(); */
	
	//************************************************************************************************************************************
	
	// Text on the Canvas
	
	/*canvas.font = "bold 36px Tahoma";
	canvas.textAlign = "end"; */
	
	//Shadow Properties
	/* canvas.shadowOffsetX = 4;
	canvas.shadowOffsetY = 4;
	canvas.shadowBlur = 6;
	canvas.shadowColor = "blue"; */
	//Fills in the text (what we're used to seeing everywhere), parameters: (text to fill, x-pos, y-pos), note that the x and y positions are the center of the text
	/* canvas.fillText("Sample Fill Text", 500, 100); */
	//Just creates the outline of a text
	/* canvas.strokeText("Sample Stroke Text", 500, 150); */
	
	//************************************************************************************************************************************
	
	//Canvas Transformations
	
	/*canvas.font = "bold 22px Tahoma";
	canvas.textAlign="start";
	canvas.fillText("Initial Text", 10, 30); */
	
	//Moves the entire canvas by the specified x-value and y-value
	/* canvas.translate(100, 150);
	canvas.fillText("After Translate", 10, 30); */
	
	//Rotates the canvas by the specified number of radians
	/* canvas.rotate(1);
	canvas.fillText("After Rotate", 10, 30); */
	
	//Stretches in the x and y directions, note that rotate changed the orientation the origin of the axes as well
	/* canvas.scale(1.5, 4);
	canvas.fillText("After Scale", 10, 50); */
	
	//************************************************************************************************************************************
	
	//Saving and Restoring the Canvas
	
	//Saves the current canvas settings
	/*canvas.save(); */
	
	//Applying transformation to show how restoring the canvas works
	/* canvas.fillText("Let's Begin", 10, 30); */
	
	/* canvas.rotate(1);
	canvas.fillText("After Rotate", 10, 30); */
	
	//Restores it to the most recent save point, note that it does not remove everything placed on the canvas, it un-does things such as rotations or transformations
	/* canvas.restore();
	canvas.fillText("After restore", 10, 30); */
	
	//************************************************************************************************************************************
	
	//Adding images to the canvas
	/*var pic = new Image();
	pic.src = "landscape.jpeg"; */
	
	// drawImage() takes two more optional parameters (width and height)
	/* pic.addEventListener("load", function() { canvas.drawImage(pic, 10, 10); }, false); */
	
	//************************************************************************************************************************************
	
	//Canvas Animation
	
	window.addEventListener("mousemove", drawing, false);
}

function drawing(e)
{
	//Clear canvas (note clearing this would create a drawing program essentially
	canvas.clearRect(0,0, 500, 500);
	
	// Gets and stores the x and y positions
	var xPos = e.clientX;
	var yPos = e.clientY;
	
	//Creates a tiny rectangle at the point of the mouse
	canvas.fillRect(xPos - 75, yPos - 75, 100, 100);
	
}

window.addEventListener("load", doFirst, false);